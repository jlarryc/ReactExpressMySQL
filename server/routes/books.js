var express = require('express');
var router = express.Router();

const db = require('../config/db');

console.log(db.user, ' ', db.password);

/* GET books listing. */
router.get('/', function(req, res, next) {
  res.send('I like my books');
});

module.exports = router;
