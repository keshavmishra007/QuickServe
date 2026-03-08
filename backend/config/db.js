const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "keshav2004",        // your MySQL password
  database: "servicehub"
});

db.connect(err => {
  if (err) {
    console.error("DB Connection Failed:", err);
  } else {
    console.log("✅ MySQL Connected to servicehub");
  }
});

module.exports = db;

