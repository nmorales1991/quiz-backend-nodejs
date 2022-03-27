require('dotenv').config();
const express = require('express');
const { port } = require('./config/config');
const routes = require('./routes');

require('./config/connection');

const app = express();

app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
