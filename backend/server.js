const express = require("express");
require("./config/db");

const cors = require("cors");

// Routes
const servicesRoutes = require("./routes/servicesRoutes");
const providersRoutes = require("./routes/providersRoutes");
const bookingsRoutes = require("./routes/bookingsRoutes");

const app = express();

// 🔥 FIX: Use dynamic port (Render requirement)
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Express server is working" });
});

// API Routes
app.use("/api/services", servicesRoutes);
app.use("/api/providers", providersRoutes);
app.use("/api/bookings", bookingsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});