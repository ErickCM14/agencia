const { validationResult } = require('express-validator');

exports.processPayment = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    res.json({ status: 'paid' });
  } catch (err) {
    next(err);
  }
};
