const Router = require('express');
const { check } = require('express-validator');
const controller = require('../controllers/AuthController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post('/registration', [
  check('username', 'Username can\'t be empty').notEmpty(),
  check('password', 'Password length should be from 4 to 10 symbols').isLength({ min: 4, max: 10 }),
], controller.registration);
router.post('/login', controller.login);
router.get('/users', authMiddleware, controller.getUsers);

module.exports = router;
