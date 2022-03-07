const mongoose = require('mongoose');

const { Schema } = mongoose;

const role = {
  values: ['ADMIN', 'USER'],
  message: '{VALUE} no es un rol válido',
};

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'El correo es necesario'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'La clave es necesaria'],
  },
  role: {
    type: String,
    required: true,
    enum: role,
  },
  name: {
    type: String,
    required: true,
  },
  fatherLastname: {
    type: String,
    required: true,
  },
  motherLastname: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.toJSON = function thisUser() {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

module.exports = mongoose.model('users', userSchema, 'users');
