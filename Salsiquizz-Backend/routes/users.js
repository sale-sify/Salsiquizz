var express = require('express');
var router = express.Router();

const db = require('../neondb');

/* GET users listing. */
router.get("/", async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM users");
        res.json({ ok: true, users: result.rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, error: err.message });
    }
});






module.exports = router;
