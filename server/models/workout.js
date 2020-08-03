const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const workoutSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 50,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: String,
    required: true,
  },
  sessionLength: {
    type: String,
    required: true,
  },
  techniques: {
    type: [String],
  },
  notes: {
    type: String,
  },
});

const Workout = mongoose.model('Workout', workoutSchema);

const validate = function validateWorkout(workout) {
  const schema = new Joi.object({
    type: Joi.string().min(4).max(50).required(),
    date: Joi.date().required(),
    sessionLength: Joi.number().required(),
  });

  return schema.validate(workout);
};

exports.Workout = Workout;
exports.validate = validate;
