var express = require('express');
var router = express.Router();

const db = require('../neondb');

// Route for user registration -> POST /auth/signin
                // Expected body: { name: string, email: string, password: string }
                // Response: { ok: boolean, message?: string, error?: string }

// TODO: Add validation and hashing for password
router.post("/signin", async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    try {
        await db.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
            [name, email, password]
        );
        res.json({ ok: true, message: "User created successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, error: err.message });
    }
})

module.exports = router;