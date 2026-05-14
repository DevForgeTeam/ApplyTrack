const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();

// Connect to SQLite3 database
const db = new sqlite3.Database(process.env.DB_PATH, (err) => {
    if (err) {
        console.error("Error connecting to the database:", err.message);
    } else {
        console.log("Successfully connected to the SQLite database.");
    }
});

// Create applications table if it does not exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        company TEXT NOT NULL,
        position TEXT NOT NULL,
        status TEXT DEFAULT 'Pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
});

module.exports = db;