const shortid = require('shortid');
const QuestionModel = require('../models/QuestionModel');

class QuestionService {
  async createQuestion(question, alternatives) {
    const alternativesWithUid = alternatives.map((alternative) => ({
      ...alternative,
      id: shortid.generate(),
    }));
    const response = await QuestionModel.create({
      question,
      alternatives: alternativesWithUid,
    });
    return { data: response, message: 'Pregunta agregada con éxito' };
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

  async updateQuestions(id) {
    QuestionModel.findById(id);
  }

  async deleteQuestion(id) {
    try {
      const question = await QuestionModel.findById(id);
      if (!question) {
        return { data: null, message: `Pregunta ${id} no existe` };
      }
      await QuestionModel.findByIdAndUpdate(id, { status: false });
      return { data: 'ok', message: `Pregunta ${id} se eliminó` };
    } catch (e) {
      return response.status(400).json({ message: `ID ${id} no válido` });
    }
  }
}

module.exports = QuestionService;
