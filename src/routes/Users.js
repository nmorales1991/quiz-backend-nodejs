const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();
const userController = new UserController();

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
