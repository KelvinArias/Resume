const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

app.post("/contact", async (req, res) => {
  const { name, lastName, email, subject, message } = req.body;

  const mailOptions = {
    from: "kelvin727631@gmail.com",
    to: "kelvin727631@gmail.com",
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
