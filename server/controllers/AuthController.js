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
      console.log(req.body);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Error', errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res.status(400).json({ message: `User with ${username} already exist` });
      }
      const hashPassword = await bcrypt.hash(password, 7);
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
      const isPassValid = await bcrypt.compare(password, user.password);
      if (!isPassValid) {
        return res.status(400).json({ message: 'Password isn\'t correct' });
      }
      // eslint-disable-next-line no-underscore-dangle
      const token = await generateAccessToken(user._id);
      return res.json({
        token,
        user: {
          // eslint-disable-next-line no-underscore-dangle
          id: user._id,
          email: user.email,
        },
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Login error' });
    }
  }

  // eslint-disable-next-line class-methods-use-this,consistent-return
  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.user.id });
      // eslint-disable-next-line no-underscore-dangle
      const token = await generateAccessToken(user._id);
      return res.json({
        token,
        user: {
          // eslint-disable-next-line no-underscore-dangle
          id: user._id,
          email: user.email,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new AuthController();
