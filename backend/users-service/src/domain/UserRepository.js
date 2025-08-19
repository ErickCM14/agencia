const UserModel = require('../models/User');
const User = require('./User');

class UserRepository {
  async findByEmail(email) {
    const user = await UserModel.findOne({ email });
    if (!user) return null;
    return new User({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }

  async create(data) {
    const user = await UserModel.create(data);
    return new User({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }
}

module.exports = new UserRepository();
