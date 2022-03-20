const AnswerModel = require('../models/AnswerModel');
const QuestionService = require('./QuestionService');

class AnswerService {
  async createAnswer(answers, user) {
    const questionService = new QuestionService();
    const userAnswers = [];
    let correctAnswers = 0;
    await Promise.all(answers.map(async (answer) => {
      const question = await questionService.getQuestionById(answer.questionId);
      const find = question.alternatives.find((alternative) => alternative.id === answer.answerId && alternative.correct);
      if (find) {
        correctAnswers += 1;
      }
      userAnswers.push({ ...answer, correct: !!find });
    }));
    const average = (correctAnswers * 100) / answers.length;
    const response = await AnswerModel.create({
      user, userAnswers, average,
    });
    return ({ data: response, message: 'Respuestas agregadas con éxito' });
  }

  async getAnswers() {
    return AnswerModel.find();
  }
}

module.exports = AnswerService;
