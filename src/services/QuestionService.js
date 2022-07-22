const { clearConfigCache } = require('prettier');
const shortid = require('shortid');
const QuestionModel = require('../models/QuestionModel');
const UserModel = require('../models/UserModel');

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

  async updateQuestions(question, alternatives, id) {
    let countTrueAlternatives = 0;
    alternatives.forEach((alternative) => {
      if (alternative.correct) {
        countTrueAlternatives += 1;
      }
    });
    if (countTrueAlternatives !== 1) {
      return { data: null, message: 'Ingrese bien las alternativas' };
    }

    const result = await QuestionModel.findByIdAndUpdate(
      id,
      { question, alternatives },
      { new: true }
    );

    return { data: result, message: `Pregunta ${id} se actualizó` };
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
      return { data: null, message: 'Algo ocurrió mal' };
    }
  }
  async getQuestionById(id) {
    const question = await QuestionModel.findById(id);
    if (!question) {
      return { data: null, message: 'No se pudo encontrar la pregunta' };
    }
    return { data: { question }, message: 'Pregunta Encontrada' };
  }
}

module.exports = QuestionService;
