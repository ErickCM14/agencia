const { validationResult } = require('express-validator');
const registerUserUseCase = require('../use-cases/registerUser');
const loginUserUseCase = require('../use-cases/loginUser');

exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const { name, email, password } = req.body;
    const user = await registerUserUseCase({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await loginUserUseCase({ email, password });
    res.json(token);
  } catch (err) {
    next(err);
  }
};
