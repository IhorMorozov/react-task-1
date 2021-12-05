const CreatedUser = require('../models/CreatedUser');

class CreatedUserService {
  async create(user) {
    const createdUser = await CreatedUser.create(user);
    return createdUser;
  }

  async getAll() {
    const users = await CreatedUser.find();
    return users;
  }

  async update(user) {
    if (!user._id) {
      throw new Error('Id is not available');
    }
    const updatedUser = await CreatedUser.findByIdAndUpdate(user._id, user, { new: true });
    return updatedUser;
  }

  async delete(id) {
    if (!id) {
      throw new Error('Id is not available');
    }
    const user = await CreatedUser.findByIdAndDelete(id);
    return user;
  }
}

module.exports = new CreatedUserService();
