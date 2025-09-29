const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// CORS setup
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://tirupati-balaji-construction-site-nine.vercel.app",
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

// ✅ Configure Brevo transporter
const transporter = nodemailer.createTransport({
  host: process.env.BREVO_HOST,
  port: process.env.BREVO_PORT,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS,
  },
});

// check
app.get("/", (req, res) => {
  return res.status(200).send("WORKS FINE with Brevo 🚀");
});

// send email (project details)
app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: `"Tirupati Balaji 👷" <${process.env.BREVO_USER}>`, // must be verified in Brevo
    to: process.env.EMAIL_RECEIVER,
    subject: `PROJECT DETAILS SUBMISSION FROM ${name ? name : "ANONYMOUS"}`,
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
    res.status(200).json({ message: "Email sent successfully via Brevo!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error: error });
  }
});

// send email from contact form
app.post("/send-form", async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  const mailOptions = {
    from: `"Tirupati Balaji 👷" <${process.env.BREVO_USER}>`, // use Brevo sender
    to: process.env.EMAIL_RECEIVER,
    subject: `CONTACT FORM SUBMISSIONS: ${subject ? subject : "No Subject"}`,
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
    res.status(200).json({ message: "Contact form email sent via Brevo!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to send form email", error: error });
  }
});

app.listen(PORT, () => {
  console.log(`✅ SERVER RUNNING ON PORT ${PORT}`);
});

// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 3000;
// app.use(express.json());
// const corsOptions = {
//   origin: [
//     "http://localhost:5173",
//     "https://tirupati-balaji-construction-site-nine.vercel.app",
//   ],
//   methods: ["GET", "POST", "OPTIONS"],
//   allowedHeaders: ["Content-Type"],
// };

// app.use(cors(corsOptions));
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // check
// app.get("/", (req, res) => {
//   return res.status(200).send("WORKS FINE");
// });

// // send email
// app.post("/send-email", async (req, res) => {
//   const { name, email, phone, message } = req.body;
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_RECEIVER,
//     subject: `PROJECT DETAILS SUBMISSION FROM ${name ? name : "ANONYMOUS"}`,
//     text: `
//     Name: ${name}
//     Email: ${email}
//     Phone: ${phone}
//     Message: ${message}
//     `,
//     replyTo: email,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Failed to send email", error: error });
//   }
// });

// // send email from form
// app.post("/send-form", async (req, res) => {
//   const { firstName, lastName, email, subject, message } = req.body;

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_RECEIVER,
//     subject: `CONTACT FORM SUBMISSIONS: ${subject ? subject : "No Subject"}`,
//     text: `
//       First Name: ${firstName}
//       Last Name: ${lastName}
//       Email: ${email}
//       Subject: ${subject}
//       Message: ${message}
//     `,
//     replyTo: email,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Failed to send email", error: error });
//   }
// });

// app.listen(PORT, () => {
//   console.log("SERVER STARTED!");
//   console.log(`SERVER RUNNING ON PORT ${PORT}`);
// });
