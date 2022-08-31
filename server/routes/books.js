const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const connectionPool = require('../database/connection-pool');

// const conn = mysql.createConnection({user: '', password: '', host: ''});
//const conn = mysql.createConnection(db);

// conn.connect(err => {
//   if(err) {throw err};
//   console.log('Connected to db');
// });

/* GET books listing. */
router.get('/', function(req, res, next) {

  const book = {
    'author': 'Charles Dickens',
    'title': 'Great Expectatins',
    'published': '1861-01-01'
  };

  connectionPool.getPool().query('insert into books set ?', book, (err, result) => {
    if(err) {throw err};
    console.log(result);
  });
  res.send('I like my books');
});


module.exports = router;
