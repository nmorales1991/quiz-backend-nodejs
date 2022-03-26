const express = require('express');
const AnswerController = require('../controllers/AnswerController');

const router = express.Router();
const answerController = new AnswerController();

router.post('/', answerController.createAnswer);
router.get('/', answerController.getAnswers);
router.get('/user/:id', answerController.getAnswersByUser);

module.exports = router;
