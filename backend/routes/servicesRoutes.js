const express = require("express");
const router = express.Router();

// GET /api/services
router.get("/", (req, res) => {
  res.json({
    services: [
      "Plumber",
      "Electrician",
      "Carpenter",
      "Cleaner",
      "Salon"
    ]
  });
});

module.exports = router;
