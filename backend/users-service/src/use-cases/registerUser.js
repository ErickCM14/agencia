const userRepository = require('../domain/UserRepository');
const bcrypt = require('bcryptjs');

module.exports = async function registerUser({ name, email, password }) {
  const existing = await userRepository.findByEmail(email);
  if (existing) throw new Error('Email already used');
  const hashed = await bcrypt.hash(password, 10);
  const user = await userRepository.create({ name, email, password: hashed });
  return { id: user.id, email: user.email };
};
