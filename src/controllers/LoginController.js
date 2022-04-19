const LoginService = require('../services/LoginService');

class LoginController {
  async login(request, response) {
    const { email, password } = request.body;
    console.log(email, password);
    try {
      if (email && password) {
        const loginService = new LoginService();
        const result = await loginService.login(email, password);
        if (!result.data) {
          return response.status(200).json({ data: null, message: result.message });
        }
        return response.status(200).json({ data: result.data, message: 'Usuario bien logueado' });
      }
      return response.status(400).json({ message: 'Ingrese los campos obligatorios' });
    } catch (e) {
      return response.status(400).json({ message: e.message });
    }
  }
}

module.exports = LoginController;
