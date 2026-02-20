var express = require('express');
var router = express.Router();

const db = require('../neondb');
const jwt = require('jsonwebtoken');




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




// Route for user login -> POST /auth/login
                // Expected body: { email: string, password: string }
                // Response: { ok: boolean, message?: string, error?: string }

// TODO: Add validation and hashing for password
router.post("/login", async (req, res, next) => {
    const { email, password } = req.body;
    
    try {
        const result = await db.query(
            "SELECT * FROM users WHERE email = $1 AND password = $2",
            [email, password]
        );

        if (result.rows.length > 0) {
            const user = result.rows[0];
            const token = jwt.sign(
                { sub: user.id, email: user.email, name: user.name },
                process.env.JWT_SECRET,
                { expiresIn: "24h" }
            );

            res.json({ 
                ok: true,
                token,
                message: "Login successful",
                user: { id: user.id, name: user.name, email: user.email, is_admin: user.is_admin }
            });

        } else {
            res.status(401).json({ ok: false, error: "Invalid email or password" });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, error: err.message });
    }
});

module.exports = router;