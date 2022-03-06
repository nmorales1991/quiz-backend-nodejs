const UserService = require('../services/UserService');

class UserController {
  async getAllUsers(request, response) {
    try {
      const userService = new UserService();
      const result = await userService.getAllUsers();
      if (result.length === 0) {
        return response.status(500).send({ data: result, message: 'No existen usuarios registrados' });
      }
      return response.status(200).json({ data: result, message: 'Usuarios obtenidos con éxito' });
    } catch (e) {
      return response.status(400).json({ message: e.message });
    }
  }

  async createUser(request, response) {
    const {
      email, password, role, name, fatherLastname,
    } = request.body;
    try {
      if (email && password && role && name && fatherLastname) {
        const userService = new UserService();
        const result = await userService.createUser(request.body);
        if (result.data) {
          return response.status(200).json(result);
        }
        return response.status(400).json(result);
      }
      return response.status(400).json({ message: 'Ingrese los campos obligatorios' });
    } catch (e) {
      return response.status(400).json({ message: e.message });
    }
  }
}

module.exports = UserController;
