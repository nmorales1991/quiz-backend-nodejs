const QuestionService = require('../services/QuestionService');

class QuestionController {
  async createQuestion(request, response) {
    const { question, alternatives } = request.body;
    try {
      if (question && alternatives && alternatives.length > 0) {
        const questionService = new QuestionService();
        const result = await questionService.createQuestion(
          question,
          alternatives
        );
        return response.status(200).json(result);
      }
      return response
        .status(400)
        .json({ message: 'Ingrese los campos obligatorios' });
    } catch (e) {
      return response.status(400).json({ message: e.message });
    }
  }

  async getQuestions(request, response) {
    try {
      const questionService = new QuestionService();
      const result = await questionService.getQuestions();
      if (result.length > 0) {
        return response
          .status(200)
          .json({ data: result, message: 'Listado de preguntas' });
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
        return response
          .status(200)
          .json({ data: result, message: 'Listado de preguntas' });
      }
      return response.status(400).json({ message: 'No existen preguntas' });
    } catch (e) {
      return response.status(400).json({ message: e.message });
    }
  }

  async updateQuestions(request, response) {
    try {
      const { question, alternatives } = request.body;
      const { id } = request.params;
      // llamar al servicio para buscar pregunta por id

      const questionService = new QuestionService();

      const result = await questionService.updateQuestions(
        question,
        alternatives,
        id
      );
      if (!result.data) {
        return response.status(400).json({ message: result.message });
      }
      return response
        .status(200)
        .json({ data: result.data, message: result.message });
    } catch (e) {
      return response.status(400).json({ message: e.message });
    }
  }

  async deleteQuestion(request, response) {
    const { id } = request.params;
    try {
      const questionService = new QuestionService();
      const result = await questionService.deleteQuestion(id);
      if (!result.data) {
        return response.status(400).json({ message: result.message });
      }
      return response.status(200).json({ message: result.message });
    } catch (e) {
      return response.status(400).json({ message: e.message });
    }
  }
  async getQuestionById(request, response) {
    const { id } = request.params;
    try {
      const questionService = new QuestionService();
      const result = await questionService.getQuestionById(id);
      if (!result.data) {
        return response.status(400).json({ message: result.message });
      }
      return response
        .status(200)
        .json({ data: result.data, message: result.message });
    } catch (e) {
      return response.status(400).json({ message: e.message });
    }
  }
}

module.exports = QuestionController;
