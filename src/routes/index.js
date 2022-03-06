const express = require('express');
const Users = require('./Users');

const app = express();

app.use('/server/users', Users);

module.exports = app;
