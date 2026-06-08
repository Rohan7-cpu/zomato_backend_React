require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./connector");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});

// Orders Route
app.get("/api/orders", (req, res) => {

    let { limit, offset } = req.query;

    // Convert query params to numbers
    limit = Number(limit);
    offset = Number(offset);

    // Validate limit
    if (
        isNaN(limit) ||
        !Number.isInteger(limit) ||
        limit <= 0
    ) {
        limit = 10;
    }

    // Validate offset
    if (
        isNaN(offset) ||
        !Number.isInteger(offset) ||
        offset < 0
    ) {
        offset = 0;
    }

    const query = "SELECT * FROM orders LIMIT ? OFFSET ?";

    connection.query(query, [limit, offset], (err, result) => {

        if (err) {
            console.error("Database Error:", err);
            return res.status(500).send("Server Error");
        }

        return res.status(200).json(result);
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
});

module.exports = app;