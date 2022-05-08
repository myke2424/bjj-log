const express = require('express');
const auth = require('../routes/auth');
const users = require('../routes/users');
const workouts = require('../routes/workouts');
const cors = require('../middleware/cors');

module.exports = function (app) {
  app.use(express.json());
  app.use(cors);
  app.use('/api/users', users);
  app.use('/api/workouts', workouts);
  app.use('/api/auth', auth);
};
