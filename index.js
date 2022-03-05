const { error } = require('console');
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
// const { json } = require('sequelize/types');
const db = require('./db');

const PORT = 8000;
const app = express();

app.get('/', (req, res) => {
  res.send(console.log('ok'));
});

app.listen(PORT, () => {
  console.log('server runbning on port : ' + PORT);
});
