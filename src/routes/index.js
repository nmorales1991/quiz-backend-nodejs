const express = require('express');
const Users = require('./Users');
const Login = require('./Login');
const Questions = require('./Questions');
const Answers = require('./Answers');

const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

const app = express();

app.use('/server/users', [authentication, authorization], Users);
app.use('/server/questions', authentication, Questions);
app.use('/server/answers', authentication, Answers);
app.use('/server/login', Login);

module.exports = app;
