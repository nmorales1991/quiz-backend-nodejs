const AnswerModel = require('../models/AnswerModel');

class AnswerService {
  async createAnswer(answers, user) {
    return ({ data: { answers, user }, message: 'Respuestas agregadas con éxito' });
  }

  async getAnswers() {
    return AnswerModel.find();
  }
}

module.exports = AnswerService;
