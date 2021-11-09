const Router = require('express');
const controller = require('../controllers/CreatedUserController');

const router = new Router();

router.post('/users', controller.create);
router.get('/users', controller.getAll);
router.get('/users/:id', controller.getOne);
router.put('/users', controller.update);
router.delete('/users/:id', controller.delete);

module.exports = router;
