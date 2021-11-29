const jwt = require('jsonwebtoken');
const { secret } = require('../config/config');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(403).json({ message: 'User isn\'t auth' });
    }
    const decodedData = jwt.verify(token, secret);
    req.user = decodedData;
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({ message: 'User isn\'t auth' });
  }
};
