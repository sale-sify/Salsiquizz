
var express = require('express');
var router = express.Router();
const app = express();


// Connexion avec la base de donnees NeonDB - PostgreSQL
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.CONNECT_STRING_BDD,
  ssl: {  rejectUnauthorized: false },
});

client.connect()
  .then(() => console.log("✅ Connected to NeonDB"))
  .catch((err) => console.error("❌ DB connection error:", err));



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
