require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: "http://localhost:3000" })); // Adjust as needed
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
    host: "127.0.0.1", // or "localhost"
    user: "root",
    password: "1432",
    database: "automation_testing",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to MySQL database.");
});

// ✅ **Fix: Add a GET route to check if the server is running**
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// API Endpoint to Handle Enrollment Form Submission
app.post("/enroll", (req, res) => { // Changed route from "/" to "/enroll"
    const { name, phone, email, course } = req.body;

    if (!name || !phone || !email || !course) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    const sql = "INSERT INTO enrollments (name, phone, email, course) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, phone, email, course], (err, result) => {
        if (err) {
            console.error("Error inserting data: ", err);
            return res.status(500).json({ message: "Server error" });
        }
        res.status(200).json({ message: "Enrollment successful!" });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
