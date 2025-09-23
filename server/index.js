const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5174", // Allow your frontend origin
  })
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// check
app.get("/", (req, res) => {
  return res.status(200).send("WORKS FINE");
});

// send email
app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: `CONTACT FORM SUBMISSION FROM ${name ? name : "ANONYMOUS"}`,
    text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error: error });
  }
});

// send email from form
app.post("/send-form", async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: `Contact Form Submission: ${subject ? subject : "No Subject"}`,
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error: error });
  }
});

app.listen(PORT, () => {
  console.log("SERVER STARTED!");
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
