const shortid = require('shortid');
const QuestionModel = require('../models/QuestionModel');

class QuestionService {
  async createQuestion(question, alternatives) {
    const alternativesWithUid = alternatives.map((alternative) => ({ ...alternative, id: shortid.generate() }));
    const response = await QuestionModel.create({
      question,
      alternatives: alternativesWithUid,
    });
    return ({ data: response, message: 'Pregunta agregada con éxito' });
  }

  async getQuestions(admin = false) {
    let params = '';
    if (!admin) {
      params = 'question alternatives.alternative alternatives.id';
    }
    return QuestionModel.find({ status: true }, params);
  }

  async getQuestionById(id) {
    return QuestionModel.findById(id);
  }
}

module.exports = QuestionService;
