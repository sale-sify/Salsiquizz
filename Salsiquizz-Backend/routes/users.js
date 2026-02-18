var express = require('express');
var router = express.Router();

const db = require('../neondb');

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const result = await db.query("SELECT NOW() as now");
    res.json({ ok: true, now: result.rows[0].now });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
