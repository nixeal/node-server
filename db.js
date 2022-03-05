const sqlite3 = require('sqlite3').verbose();
const db_name = `new.db`;

let db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
  }
});

module.exports = db;
