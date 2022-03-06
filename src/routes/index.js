const express = require('express');
const Users = require('./Users');
const Login = require('./Login');

const app = express();

app.use('/server/users', Users);
app.use('/server/login', Login);

module.exports = app;
