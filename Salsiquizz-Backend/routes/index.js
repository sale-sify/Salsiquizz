var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to Salsiquizz API');
});


// Connexion avec la base de donnees NeonDB - PostgreSQL
const { Client } = require('pg');
const connectionString = new Client({
  connectionString: process.env.CONNECT_STRING_BDD,
  ssl: { rejectUnauthorized: false }
});
const client = new Client( connectionString );
client.connect();




module.exports = router;
