const express = require("express");
const router = express.Router();
const db = require("../config/db");
const nodemailer = require("nodemailer");

// Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "quickserve12345@gmail.com",      // 👈 same gmail used for app password
    pass: "ktsbcbziytzxxksq" // 👈 app password (no spaces)
  }
});

router.post("/", (req, res) => {
  const { providerId, address, date, timeSlot } = req.body;

  if (!providerId || !address || !date || !timeSlot) {
    return res.status(400).json({ message: "Missing booking details" });
  }

  // Get provider email
  db.query(
    "SELECT name, email FROM providers WHERE id = ?",
    [providerId],
    (err, results) => {
      if (err || results.length === 0) {
        return res.status(404).json({ message: "Provider not found" });
      }

      const provider = results[0];

      // Save booking
      db.query(
        "INSERT INTO bookings (provider_id, customer_address, booking_date, time_slot) VALUES (?, ?, ?, ?)",
        [providerId, address, date, timeSlot],
        async (err) => {
          if (err) {
            return res.status(500).json({ message: "Booking save failed" });
          }

          // Email content
          const mailOptions = {
            from: "quickserve12345@gmail.com",
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
            `
          };

          try {
            await transporter.sendMail(mailOptions);
            console.log("📧 Email sent to:", provider.email);

            res.status(201).json({
              message: "Booking confirmed & email sent to provider"
            });
          } catch (emailError) {
            console.error(emailError);
            res.json({
              message: "Booking saved but email failed"
            });
          }
        }
      );
    }
  );
});

module.exports = router;
