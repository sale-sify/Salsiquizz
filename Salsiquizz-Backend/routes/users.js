



var express = require('express');
var router = express.Router();

const connectDB = require('../db');

connectDB();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
