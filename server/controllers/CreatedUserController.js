const CreatedUserService = require('../services/CreatedUserService');

class CreatedUserController {
  async create(req, res) {
    try {
      const user = await CreatedUserService.create(req.body);
      res.json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const users = await CreatedUserService.getAll();
      return res.json(users);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try {
      const updatedUser = await CreatedUserService.update(req.body);
      return res.json(updatedUser);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const user = await CreatedUserService.delete(req.params.id);
      return res.json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

module.exports = new CreatedUserController();
