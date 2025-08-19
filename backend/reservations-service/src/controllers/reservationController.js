const { validationResult } = require('express-validator');
const createReservationUseCase = require('../use-cases/createReservation');
const listReservationsUseCase = require('../use-cases/listReservations');

exports.createReservation = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const { flight } = req.body;
    const reservation = await createReservationUseCase({
      user: req.user.id,
      flight,
    });
    res.status(201).json(reservation);
  } catch (err) {
    next(err);
  }
};

exports.getReservations = async (req, res, next) => {
  try {
    const reservations = await listReservationsUseCase(req.user.id);
    res.json(reservations);
  } catch (err) {
    next(err);
  }
};

exports.getAllReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find().populate('flight');
    res.json(reservations);
  } catch (err) {
    next(err);
  }
};
