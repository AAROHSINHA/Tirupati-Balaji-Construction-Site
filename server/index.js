const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// CORS setup
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

const MAILTRAP_URL = "https://send.api.mailtrap.io/api/send";
const MAILTRAP_TOKEN = process.env.MAILTRAP_API_TOKEN;
const EMAIL_RECEIVER = process.env.EMAIL_RECEIVER;

// Root check
app.get("/", (req, res) => {
  return res.status(200).send("✅ Mailtrap API server running!");
});

// 📩 send-email route (project details)
app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const payload = {
    from: {
      email: "no-reply@tirupatibalajiconstruction.in", // domain you verified in Mailtrap
      name: "Tirupati Balaji 👷",
    },
    to: [{ email: EMAIL_RECEIVER }],
    subject: `PROJECT DETAILS SUBMISSION FROM ${name ? name : "ANONYMOUS"}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
    reply_to: { email },
  };

  try {
    const response = await fetch(MAILTRAP_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${MAILTRAP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Mailtrap API error: ${response.statusText}`);
    }

    res
      .status(200)
      .json({ message: "Email sent successfully via Mailtrap API!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
});

// 📩 send-form route (contact form)
app.post("/send-form", async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  const payload = {
    from: {
      email: "no-reply@tirupatibalajiconstruction.in", // domain verified in Mailtrap
      name: "Tirupati Balaji 👷",
    },
    to: [{ email: EMAIL_RECEIVER }],
    subject: `CONTACT FORM SUBMISSION: ${subject ? subject : "No Subject"}`,
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `,
    reply_to: { email },
  };

  try {
    const response = await fetch(MAILTRAP_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${MAILTRAP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Mailtrap API error: ${response.statusText}`);
    }

    res.status(200).json({
      message: "Contact form email sent successfully via Mailtrap API!",
    });
  } catch (error) {
    console.error("Error sending form email:", error);
    res
      .status(500)
      .json({ message: "Failed to send form email", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 SERVER RUNNING ON PORT ${PORT}`);
});
