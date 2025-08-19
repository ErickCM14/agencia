const { validationResult } = require('express-validator');
const listFlights = require('../use-cases/listFlights');
const createFlightUseCase = require('../use-cases/createFlight');
const getFlightUseCase = require('../use-cases/getFlight');
const updateFlightUseCase = require('../use-cases/updateFlight');
const deleteFlightUseCase = require('../use-cases/deleteFlight');
const seedFlightsUseCase = require('../use-cases/seedFlights');

exports.getFlights = async (req, res, next) => {
  try {
    const flights = await listFlights();
    res.json(flights);
  } catch (err) {
    next(err);
  }
};

exports.getUserFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find({ user: req.user.id });
    res.json(flights);
  } catch (err) {
    next(err);
  }
};

exports.getUserFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find({ user: req.user.id });
    res.json(flights);
  } catch (err) {
    next(err);
  }
};

exports.createFlight = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const flight = await Flight.create({ ...req.body, user: req.user.id });
    res.status(201).json(flight);
  } catch (err) {
    next(err);
  }
};

exports.updateFlight = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const flight = await updateFlightUseCase(req.params.id, req.body);
    if (!flight) return res.sendStatus(404);
    res.json(flight);
  } catch (err) {
    next(err);
  }
};

exports.deleteFlight = async (req, res, next) => {
  try {
    await deleteFlightUseCase(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

exports.seedFlights = async (req, res, next) => {
  try {
    const flights = await seedFlightsUseCase();
    res.status(201).json(flights);
  } catch (err) {
    next(err);
  }
};
