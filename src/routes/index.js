const express = require('express');
const Users = require('./Users');
const Login = require('./Login');

const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

const app = express();

app.use('/server/users', [authentication, authorization], Users);
app.use('/server/login', Login);

module.exports = app;
