const { error } = require('console');
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
// const { json } = require('sequelize/types');
const db = require('./db');

db.serialize(() => {
  let insert = `CREATE TABLE IF NOT EXISTS newTable(
    ID INTEGER NOT NULL AUTOINCREMENT PRIMARY KEY,
    SALE REAL,
    NAME VARCHAR(100)
  )`;
  db.run(insert, (error) => {
    if (error) {
      console.log('error');
    } else {
      console.log('created newTable file in db');
    }
  });
});

const PORT = 8000;
const app = express();

app.get('/', (req, res) => {
  res.send(console.log('ok'));
});

app.listen(PORT, () => {
  console.log('server runbning on port : ' + PORT);
});
