const { validationResult } = require('express-validator');
const processPaymentUseCase = require('../use-cases/processPayment');

exports.processPayment = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const payment = await processPaymentUseCase(req.body);
    res.json(payment);
  } catch (err) {
    next(err);
  }
};
