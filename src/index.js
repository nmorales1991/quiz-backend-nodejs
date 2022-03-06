require('dotenv').config();
const express = require('express');
const config = require('./config/config');
const routes = require('./routes');

require('./config/connection');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});
