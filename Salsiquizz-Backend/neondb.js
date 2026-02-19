// Connexion avec la base de donnees NeonDB - PostgreSQL
const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.CONNECT_STRING_BDD,
    ssl: {  rejectUnauthorized: false },
});

client.connect()
    .then(() => console.log("✅ Connected to NeonDB"))
    .catch((err) => console.error("❌ DB connection error:", err));


module.exports = client;