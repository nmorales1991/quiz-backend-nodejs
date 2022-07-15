const express = require('express');
const QuestionController = require('../controllers/QuestionController');
const authorization = require('../middlewares/authorization');

const router = express.Router();
const questionController = new QuestionController();

router.post('/', authorization, questionController.createQuestion);
router.get('/', questionController.getQuestions);
router.get('/admin', questionController.getQuestionsAdmin);
router.delete('/:id', questionController.deleteQuestion);

module.exports = router;
