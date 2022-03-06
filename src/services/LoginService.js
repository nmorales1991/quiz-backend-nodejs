const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserModel = require('../models/UserModel');
const config = require('../config/config');

class LoginService {
  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return { data: null, message: 'Correo no válido' };
    }

    if (!user.status) {
      return { data: null, message: 'Usuario inactivo' };
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return { data: null, message: 'Clave no válida' };
    }

    const token = jwt.sign(
      {
        user,
      },
      config.secret,
      { expiresIn: config.expires },
    );

    const response = {
      user,
      token,
    };
    return { data: response };
  }
}

module.exports = LoginService;
