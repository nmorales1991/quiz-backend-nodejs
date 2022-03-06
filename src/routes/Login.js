const express = require('express');
const LoginController = require('../controllers/LoginController');

const router = express.Router();
const loginController = new LoginController();

router.post('/', loginController.login);

module.exports = router;
