const mongoose = require('mongoose');

const { Schema } = mongoose;

const answerSchema = new Schema({
  user: {
    type: Schema.Types.Mixed,
  },
  userAnswers: [{
    questionId: { type: Schema.Types.ObjectId },
    answerId: { type: Schema.Types.ObjectId },
    correct: { type: Boolean },
  }],
  average: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('answers', answerSchema, 'answers');
