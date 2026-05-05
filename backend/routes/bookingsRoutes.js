const express = require("express");
const router = express.Router();
const db = require("../config/db");
const nodemailer = require("nodemailer");

// ===============================
// EMAIL CONFIG (GMAIL)
// ===============================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// ===============================
// BOOKING ROUTE
// ===============================
router.post("/", (req, res) => {
  const { providerId, address, date, timeSlot } = req.body;

  // Validate input
  if (!providerId || !address || !date || !timeSlot) {
    return res.status(400).json({ message: "Missing booking details" });
  }

  // Step 1: Get provider details
  db.query(
    "SELECT name, email FROM providers WHERE id = ?",
    [providerId],
    (err, results) => {
      if (err) {
        console.error("DB Error (provider fetch):", err);
        return res.status(500).json({ message: "Database error" });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "Provider not found" });
      }

      const provider = results[0];

      // Step 2: Save booking
      db.query(
        "INSERT INTO bookings (provider_id, customer_address, booking_date, time_slot) VALUES (?, ?, ?, ?)",
        [providerId, address, date, timeSlot],
        (err) => {
          if (err) {
            console.error("DB Error (booking insert):", err);
            return res.status(500).json({ message: "Booking save failed" });
          }

          // 🔥 Respond immediately (NO WAIT FOR EMAIL)
          res.status(201).json({
            message: "Booking confirmed",
          });

          // ===============================
          // SEND EMAIL IN BACKGROUND
          // ===============================
          const mailOptions = {
            from: process.env.EMAIL_USER,
            to: provider.email,
            subject: "📩 New Service Booking",
            text: `
Hello ${provider.name},

You have received a new booking.

📅 Date: ${date}
⏰ Time: ${timeSlot}
📍 Address: ${address}

Please contact the customer.

— QuickServe Team
            `,
          };

          transporter
            .sendMail(mailOptions)
            .then(() => {
              console.log("📧 Email sent to:", provider.email);
            })
            .catch((error) => {
              console.error("❌ Email failed:", error);
            });
        }
      );
    }
  );
});

module.exports = router;