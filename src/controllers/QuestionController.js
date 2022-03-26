const QuestionService = require('../services/QuestionService');

class QuestionController {
  async createQuestion(request, response) {
    const { question, alternatives } = request.body;
    try {
      if (question && alternatives && alternatives.length > 0) {
        const questionService = new QuestionService();
        const result = await questionService.createQuestion(question, alternatives);
        return response.status(200).json(result);
      }
      return response.status(400).json({ message: 'Ingrese los campos obligatorios' });
    } catch (e) {
      return response.status(400).json({ message: e.message });
    }
  }

  async getQuestions(request, response) {
    try {
      const questionService = new QuestionService();
      const result = await questionService.getQuestions();
      if (result.length > 0) {
        return response.status(200).json({ data: result, message: 'Listado de preguntas' });
      }
      return response.status(400).json({ message: 'No existen preguntas' });
    } catch (e) {
      return response.status(400).json({ message: e.message });
    }
  }

  async getQuestionsAdmin(request, response) {
    try {
      const questionService = new QuestionService();
      const result = await questionService.getQuestions(true);
      if (result.length > 0) {
        return response.status(200).json({ data: result, message: 'Listado de preguntas' });
      }
      return response.status(400).json({ message: 'No existen preguntas' });
    } catch (e) {
      return response.status(400).json({ message: e.message });
    }
  }
}

module.exports = QuestionController;
