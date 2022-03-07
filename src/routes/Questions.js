const express = require('express');
const QuestionController = require('../controllers/QuestionController');

const router = express.Router();
const questionController = new QuestionController();

router.post('/', questionController.createQuestion);

module.exports = router;
