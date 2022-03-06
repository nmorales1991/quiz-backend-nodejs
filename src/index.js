require('dotenv').config();
const express = require('express');
const config = require('./config/config');

const app = express();

require('./config/connection');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});
