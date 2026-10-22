import express from "express";
import path from "path";
import cors from "cors";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config({ path: fs.existsSync('.env') ? '.env' : '.env.example' });

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());
  app.use(cors());

  // Dummy database file path
  // Use /tmp in production because the Cloud Run container is read-only
  const DB_PATH = process.env.NODE_ENV === "production" 
    ? path.join("/tmp", "database.json")
    : path.join(process.cwd(), "database.json");

  // Initialize DB file
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ contacts: [] }), "utf-8");
  }

  // API Route: Contact Form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required." });
      }

      // 1. Save to Database (Local JSON file as requested)
      const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
      const newContact = {
        id: Date.now().toString(),
        name,
        email,
        phone,
        message,
        createdAt: new Date().toISOString()
      };
      data.contacts.push(newContact);
      fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");

      // 2. Mock Email Sending via NodeMailer
      // To actually send emails, you need an SMTP account and to put the credentials in .env
      // Using a test Ethereal account for demo purposes, or just logging it.
      
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const destEmail = process.env.CONTACT_EMAIL || "vectortech254@gmail.com";

      if (smtpUser && smtpPass) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Vector Technical Website" <${smtpUser}>`,
          to: destEmail,
          subject: `New Contact Form Submission from ${name}`,
          text: `You have a new message from your website.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`,
        });
        console.log(`Email sent successfully to ${destEmail}`);
      } else {
        console.log("No SMTP credentials found in .env. Mocking email send.");
        console.log(`[MOCK EMAIL TO ${destEmail}] From: ${name} <${email}> - ${message}`);
      }

      res.status(200).json({ success: true, message: "Message sent and stored successfully!" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
