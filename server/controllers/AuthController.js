const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { secret } = require('../config/config');

const generateAccessToken = (id) => {
  const payload = {
    id,
  };
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

class AuthController {
  // eslint-disable-next-line consistent-return,class-methods-use-this
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Error', errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res.status(400).json({ message: 'This username exists' });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({ username, password: hashPassword });
      await user.save();
      return res.json({ message: 'Registration was successfully completed' });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Registration error' });
    }
  }

  // eslint-disable-next-line consistent-return,class-methods-use-this
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      console.log(user);
      if (!user) {
        return res.status(400).json({ message: 'User is not found' });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: 'Password isn\'t correct' });
      }
      // eslint-disable-next-line no-underscore-dangle
      const token = generateAccessToken(user._id);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'LogIn error' });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new AuthController();
