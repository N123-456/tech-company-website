import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";

// Load environment variables
dotenv.config();

const app = express();

// Configure CORS for specific origin
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || "http://localhost:8000" }));
app.use(express.json());

// Input validation
const validateRequest = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("subject").trim().notEmpty().withMessage("Subject is required"),
  body("message").trim().notEmpty().withMessage("Message is required"),
  body("phone").optional().trim(),
  body("service").optional().trim(),
];

app.post("/send", validateRequest, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, subject, service, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // Use authenticated email
    to: process.env.RECIPIENT_EMAIL || "ayeshanizam39@gmail.com",
    subject: `New Lead: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone || "Not provided"}
      Service: ${service || "Not specified"}
      Message: ${message}
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ message: "Failed to send email", error: err.message });
  }
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});