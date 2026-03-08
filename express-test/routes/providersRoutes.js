const express = require("express");
const router = express.Router();
const db = require("../config/db");

console.log("🔥 providersRoutes.js LOADED 🔥");

// GET all providers
router.get("/", (req, res) => {
  db.query("SELECT * FROM providers", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// GET providers by service (PATH PARAM)
router.get("/by-service/:service", (req, res) => {
  const service = req.params.service;

  console.log("Service param received:", service);

  const sql =
    "SELECT * FROM providers WHERE LOWER(TRIM(service)) = LOWER(TRIM(?))";

  db.query(sql, [service], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

module.exports = router;




