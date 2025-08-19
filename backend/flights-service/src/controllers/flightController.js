const { validationResult } = require('express-validator');
const listFlights = require('../use-cases/listFlights');
const createFlightUseCase = require('../use-cases/createFlight');

exports.getFlights = async (req, res, next) => {
  try {
    const flights = await listFlights();
    res.json(flights);
  } catch (err) {
    next(err);
  }
};

exports.createFlight = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const flight = await createFlightUseCase(req.body);
    res.status(201).json(flight);
  } catch (err) {
    next(err);
  }
};
