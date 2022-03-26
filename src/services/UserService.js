const bcrypt = require('bcryptjs');
const UserModel = require('../models/UserModel');

class UserService {
  async getAllUsers() {
    try {
      return await UserModel.find();
    } catch (e) {
      throw Error('Error al consultar usuarios');
    }
  }

  async createUser(params) {
    const {
      email, password, role, name, fatherLastname, motherLastname,
    } = params;
    const user = await UserModel.findOne({ email });
    if (user) {
      return ({ data: null, message: `Usuario ${email} ya existe` });
    }
    const response = await UserModel.create({
      email,
      role: role.toUpperCase(),
      password: bcrypt.hashSync(password, 10),
      fatherLastname,
      motherLastname,
      name,
    });
    return ({ data: response, message: 'Usuario agregado con éxito' });
  }

  async getUserById(id) {
    try {
      return await UserModel.findById(id);
    } catch (e) {
      return null;
    }
  }
}

module.exports = UserService;
