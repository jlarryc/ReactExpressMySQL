'use strict';

const mysql = require('mysql');
const db = require('../config/db');

const connectionPool = {

  pool: null,
  
  init: function() {
    this.pool = mysql.createPool(db);
    console.log("Initializing pool");
  },
  getPool: function() {
    return this.pool;
  }
}

console.log(db.user, ' ', db.password);
module.exports = connectionPool;