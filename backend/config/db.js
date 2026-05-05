const mysql = require("mysql2");

const db = mysql.createConnection({
  uri: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB Connection Failed:", err);
  } else {
    console.log("✅ MySQL Connected (Railway)");
  }
});

module.exports = db;