const userRepository = require('../domain/UserRepository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = async function loginUser({ email, password }) {
  const user = await userRepository.findByEmail(email);
  if (!user) throw new Error('Invalid credentials');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { token };
};
