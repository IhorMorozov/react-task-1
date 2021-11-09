const { Schema, model } = require('mongoose');

const CreatedUser = new Schema({
  email: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  city: { type: String, required: true },
});

module.exports = model('CreatedUser', CreatedUser);
