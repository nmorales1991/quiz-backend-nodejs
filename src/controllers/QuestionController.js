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
}

module.exports = QuestionController;
