const mongoose = require('mongoose');

const { Schema } = mongoose;

const questionSchema = new Schema({
  question: {
    type: String,
    required: [true, 'La pregunta es necesaria'],
    unique: true,
  },
  alternatives: {
    type: Array,
    required: [true, 'Las alternativas son necesarias'],
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

module.exports = mongoose.model('questions', questionSchema, 'questions');
