const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ["http://localhost:3000", "https://kresume.dev/"];
app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.mail,
    pass: process.env.password,
  },
});

app.get("/contact", async (req, res) => {
  const { name, lastName, email, subject, message } = req.query;

  const mailOptions = {
    from: process.env.mail,
    to: process.env.mail,
    subject: "Webpage Form",
    text: `Name: ${name}\nLast Name: ${lastName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\n\n`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Form data sent via email");
    res.status(200).json({ message: "Form data submitted successfully" });
  } catch (error) {
    console.error("Failed to send email", error);
    res.status(500).json({ error: "Failed to submit form data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
