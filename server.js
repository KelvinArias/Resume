const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const PORT = 5000; // Change this to the desired port number

// Specify allowed origins
const allowedOrigins = ["http://localhost:3000"]; // Add your client-side application's URL here
app.use(
  cors({
    origin: allowedOrigins,
  })
);

// ... rest of your server code ...

// Middleware to parse JSON request bodies
app.use(express.json());

// Create a Nodemailer transporter using Gmail SMTP credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email, // Replace with your Gmail email address
    pass: process.env.password, // Replace with your Gmail password
  },
});

// Route to handle form data submission
app.post("/contact", async (req, res) => {
  const { name, lastName, email, subject, message } = req.body;
  console.log(name, lastName, email, subject, message);
  // Compose email
  const mailOptions = {
    from: "kelvin727631@gmail.com", // Replace with your Gmail email address
    to: "kelvin727631@gmail.com", // Replace with the recipient email address
    subject: "Webpage Form",
    text: `Name: ${name}\nLast Name: ${lastName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\n\n`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Form data sent via email");
    res.status(200).json({ message: "Form data submitted successfully" });
  } catch (error) {
    console.error("Failed to send email", error);
    res.status(500).json({ error: "Failed to submit form data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
