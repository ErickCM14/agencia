const Flight = require('../models/Flight');
const { validationResult } = require('express-validator');

exports.getFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    next(err);
  }
};

exports.createFlight = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const flight = await Flight.create(req.body);
    res.status(201).json(flight);
  } catch (err) {
    next(err);
  }
};
