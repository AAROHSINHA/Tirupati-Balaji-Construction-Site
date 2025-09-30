// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://tirupati-balaji-construction-site-nine.vercel.app",
    "https://www.tirupatibalajiconstruction.in",
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

// ---------- Mailtrap SMTP transporter ----------
const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST || "smtp.mailtrap.live",
  port: Number(process.env.MAILTRAP_PORT || 587),
  secure: false, // use STARTTLS (false for port 587)
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

// Verify transporter on startup (logs helpful info)
transporter
  .verify()
  .then(() => console.log("✅ Mailtrap SMTP ready"))
  .catch((err) =>
    console.warn(
      "⚠️ Mailtrap SMTP verify failed (SMTP may be blocked on host). Error:",
      err.message
    )
  );

// ---------- Routes ----------
app.get("/", (req, res) => {
  return res.status(200).send("WORKS FINE with Mailtrap 🚀");
});

// send email (project details)
app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: `"Tirupati Balaji 👷" <${
      process.env.MAIL_FROM || "no-reply@tirupatibalajiconstruction.in"
    }>`, // MUST be a verified sending address/domain
    to: process.env.EMAIL_RECEIVER,
    subject: `PROJECT DETAILS SUBMISSION FROM ${name ? name : "ANONYMOUS"}`,
    text: `Name: ${name || "—"}
Email: ${email || "—"}
Phone: ${phone || "—"}

Message:
${message || "—"}`,
    replyTo: email || undefined,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Mail sent:", info.messageId);
    res.status(200).json({
      message: "Email sent successfully via Mailtrap!",
      id: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
});

// send email from contact form
app.post("/send-form", async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  const mailOptions = {
    from: `"Tirupati Balaji 👷" <${
      process.env.MAIL_FROM || "no-reply@tirupatibalajiconstruction.in"
    }>`,
    to: process.env.EMAIL_RECEIVER,
    subject: `CONTACT FORM SUBMISSIONS: ${subject ? subject : "No Subject"}`,
    text: `First Name: ${firstName || "—"}
Last Name: ${lastName || "—"}
Email: ${email || "—"}
Subject: ${subject || "—"}

Message:
${message || "—"}`,
    replyTo: email || undefined,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Form mail sent:", info.messageId);
    res.status(200).json({
      message: "Contact form email sent via Mailtrap!",
      id: info.messageId,
    });
  } catch (error) {
    console.error("Error sending form email:", error);
    res
      .status(500)
      .json({ message: "Failed to send form email", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ SERVER RUNNING ON PORT ${PORT}`);
});
