const Router = require('express');
const { check } = require('express-validator');
const controller = require('../controllers/AuthController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post('/registration', [
  check('username', 'Uncorrect username').notEmpty(),
  check('password', 'Password length should be from 4 to 10 symbols').isLength({ min: 4, max: 10 }),
], controller.registration);
router.post('/login', controller.login);
router.get('/auth', authMiddleware, controller.getUser);

module.exports = router;
