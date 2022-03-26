const AnswerService = require('../services/AnswerService');
const UserService = require('../services/UserService');

class AnswerController {
  async createAnswer(request, response) {
    const { answers } = request.body;
    const { userAuth } = request;
    try {
      if (answers && answers.length > 0) {
        const answerService = new AnswerService();
        const result = await answerService.createAnswer(answers, userAuth);
        return response.status(200).json(result);
      }
      return response.status(400).json({ message: 'No se ingresaron respuestas a las preguntas' });
    } catch (e) {
      return response.status(400).json({ message: e.message });
    }
  }

  async getAnswers(request, response) {
    try {
      const answerService = new AnswerService();
      const result = await answerService.getAnswers();
      if (result.length > 0) {
        return response.status(200).json({ data: result, message: 'Listado de respuestas' });
      }
      return response.status(400).json({ message: 'No existen respuestas' });
    } catch (e) {
      return response.status(400).json({ message: e.message });
    }
  }

  async getAnswersByUser(request, response) {
    try {
      const answerService = new AnswerService();
      const userService = new UserService();
      const user = await userService.getUserById(request.params.id);
      if (!user) {
        return response.status(400).json({ message: 'No existe usuario' });
      }
      const result = await answerService.getAnswersByUser(user.id);
      if (result.length > 0) {
        return response.status(200).json({ data: result, message: 'Listado de respuestas' });
      }
      return response.status(400).json({ message: 'No existen respuestas' });
    } catch (e) {
      return response.status(400).json({ message: e.message });
    }
  }
}

module.exports = AnswerController;
