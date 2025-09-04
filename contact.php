<?php
/**
 * contact.php — Hostinger (PHP) contact form handler
 * - Sends via SMTP using your domain mailbox (Titan/Hostinger)
 * basic rate limiting + robust validation
 *
 * Expected POST fields:
 *  name, lastname, email, subject, message
 */

// -----------------------------
// 🔧 CONFIG — EDIT THESE
// -----------------------------
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue; // skip comments
        list($key, $value) = explode('=', $line, 2);
        putenv(trim($key) . '=' . trim($value));
    }
}

$SMTP_HOST   = 'smtp.titan.email';   // Check "Email Accounts → Manage → Configuration"
$SMTP_PORT   = 587;                  // 587 (TLS) or 465 (SSL)
$SMTP_SECURE = 'tls';                // 'tls' or 'ssl'
$SMTP_USER   = 'kelvin@kresume.dev';    // your domain mailbox
$SMTP_PASS   = getenv('SMTP_PASS'); // loads from .env

$TO_EMAIL    = 'kelvin@kresume.dev';    // send to your domain mailbox (will forward to Gmail)
$TO_NAME     = 'Site Contact';           // label shown in the inbox

$ALLOWED_ORIGINS  = ['https://kresume.dev', 'http://kresume.dev']; // update if needed
$RATE_LIMIT_WINDOW_SEC = 60; // 1 minute window
$RATE_LIMIT_MAX        = 3;  // max submissions per window per IP

// -----------------------------
// ⛑️ Helpers
// -----------------------------
function json_exit($ok, $msg, $extra = []) {
  header('Content-Type: application/json');
  echo json_encode(array_merge(['ok' => $ok, 'message' => $msg], $extra));
  exit;
}

// CORS (tighten as needed)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: ' . (isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*'));
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  exit;
}
if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $ALLOWED_ORIGINS, true)) {
  header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
}

// Only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  json_exit(false, 'Method not allowed.');
}

// Basic rate limiting (per IP, in-memory via temp file)
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$rateDir = sys_get_temp_dir() . '/contact_rate_limit';
if (!is_dir($rateDir)) { @mkdir($rateDir, 0700, true); }
$rateFile = $rateDir . '/' . md5($ip);
$now = time();
$events = [];
if (file_exists($rateFile)) {
  $events = array_filter(explode("\n", @file_get_contents($rateFile)), function($t) use ($now, $RATE_LIMIT_WINDOW_SEC) {
    return (ctype_digit($t) && ($now - (int)$t) < $RATE_LIMIT_WINDOW_SEC);
  });
}
if (count($events) >= $RATE_LIMIT_MAX) {
  http_response_code(429);
  json_exit(false, 'Too many requests. Please try again in a minute.');
}
$events[] = (string)$now;
@file_put_contents($rateFile, implode("\n", $events));

// Collect & validate inputs
$fields = [
  'name'     => trim($_POST['name']     ?? ''),
  'lastname' => trim($_POST['lastname'] ?? ''),
  'email'    => trim($_POST['email']    ?? ''),
  'subject'  => trim($_POST['subject']  ?? ''),
  'message'  => trim($_POST['message']  ?? ''),
];

// Validate
if ($fields['name'] === '' || mb_strlen($fields['name']) > 100) {
  json_exit(false, 'Please provide a valid first name.');
}
if ($fields['lastname'] === '' || mb_strlen($fields['lastname']) > 100) {
  json_exit(false, 'Please provide a valid last name.');
}
if (!filter_var($fields['email'], FILTER_VALIDATE_EMAIL) || mb_strlen($fields['email']) > 254) {
  json_exit(false, 'Please provide a valid email address.');
}
if ($fields['subject'] === '' || mb_strlen($fields['subject']) > 200) {
  json_exit(false, 'Please provide a valid subject.');
}
if ($fields['message'] === '' || mb_strlen($fields['message']) > 5000) {
  json_exit(false, 'Please provide a valid message (max 5000 chars).');
}

// Build the email body
$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
$ref = $_SERVER['HTTP_REFERER'] ?? '';
$body = "You received a new contact form submission:\n\n".
        "First Name: {$fields['name']}\n".
        "Last Name: {$fields['lastname']}\n".
        "Email: {$fields['email']}\n".
        "Subject: {$fields['subject']}\n\n".
        "Message:\n{$fields['message']}\n\n".
        "---\nIP: {$ip}\nUser-Agent: {$ua}\nReferrer: {$ref}\nTime: ".date('c')."\n";

// Try to send via PHPMailer (SMTP). If not available, fall back to mail().
$sent = false;
$error = '';

if (!class_exists('PHPMailer\\PHPMailer\\PHPMailer')) {
  // Try to load PHPMailer if uploaded manually or via Composer
  $autoloadPaths = [
    __DIR__ . '/vendor/autoload.php',
    __DIR__ . '/phpmailer/src/PHPMailer.php'
  ];
  foreach ($autoloadPaths as $p) {
    if (file_exists($p)) { require_once $p; }
  }
}

if (class_exists('PHPMailer\\PHPMailer\\PHPMailer')) {
  try {
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = $SMTP_HOST;
    $mail->Port       = $SMTP_PORT;
    if ($SMTP_SECURE === 'ssl') { $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS; }
    if ($SMTP_SECURE === 'tls') { $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS; }
    $mail->SMTPAuth   = true;
    $mail->Username   = $SMTP_USER;
    $mail->Password   = $SMTP_PASS;

    $mail->setFrom($SMTP_USER, $TO_NAME);         // must be your domain mailbox
    $mail->addAddress($TO_EMAIL, $TO_NAME);       // send to your domain mailbox (will forward to Gmail)
    $mail->addReplyTo($fields['email'], $fields['name'].' '.$fields['lastname']); // reply goes to visitor

    $mail->Subject = $fields['subject'];
    $mail->Body    = $body;
    $mail->AltBody = $body;
    $mail->CharSet = 'UTF-8';

    $mail->send();
    $sent = true;
  } catch (Throwable $e) {
    $error = $e->getMessage();
  }
}

if (!$sent) {
  // Fallback: native mail() — less reliable
  $headers = [];
  $headers[] = 'From: '.$TO_NAME.' <'.$SMTP_USER.'>';
  $headers[] = 'Reply-To: '.$fields['name'].' '.$fields['lastname'].' <'.$fields['email'].'>';
  $headers[] = 'MIME-Version: 1.0';
  $headers[] = 'Content-Type: text/plain; charset=UTF-8';
  $ok = @mail($TO_EMAIL, $fields['subject'], $body, implode("\r\n", $headers));
  if ($ok) { $sent = true; } else { $error = 'mail() failed'; }
}

// Done
if ($sent) {
  json_exit(true, 'Thanks! Your message has been sent.');
} else {
  http_response_code(500);
  json_exit(false, 'Message not sent. Please try again later.', ['error' => $error]);
}
