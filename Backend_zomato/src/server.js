const express = require("express");
const con = require("./connector");

const app = express();
const PORT = 8080;

app.get("/api/orders", (req, res) => {
    let { limit, offset } = req.query;

    const parsedLimit = Number(limit);
    const parsedOffset = Number(offset);

    const finalLimit = (!parsedLimit || parsedLimit <= 0) ? 10 : parsedLimit;
    const finalOffset = (parsedOffset < 0 || isNaN(parsedOffset)) ? 0 : parsedOffset;

    const sql = `SELECT * FROM orders LIMIT ? OFFSET ?`;

    con.query(sql, [finalLimit, finalOffset], (error, rows) => {
        if (error) {
            console.error("DB Error:", error);
            return res.status(500).json({ message: "Internal Server Error" });
        }

        return res.status(200).json({
            count: rows.length,
            data: rows
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
});