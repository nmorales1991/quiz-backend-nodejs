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

  async getQuestions() {
    return QuestionModel.find({ status: true }, 'question alternatives.alternative alternatives.id');
  }
}

module.exports = QuestionService;
