const QuestionModel = require('../models/QuestionModel');

class QuestionService {
  async createQuestion(question, alternatives) {
    const response = await QuestionModel.create({
      question,
      alternatives,
    });
    return ({ data: response, message: 'Pregunta agregada con éxito' });
  }
}

module.exports = QuestionService;
