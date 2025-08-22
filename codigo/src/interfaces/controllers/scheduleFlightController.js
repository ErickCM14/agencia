const express = require('express');
const MongoFlightRepository = require('../../infrastructure/database/MongoFlightRepository');
const MongoBookingRepository = require('../../infrastructure/database/MongoBookingRepository');
const BookingService = require('../../application/services/BookingService');

const router = express.Router();
const service = new BookingService({
  flightRepository: new MongoFlightRepository(),
  bookingRepository: new MongoBookingRepository()
});

// POST /flights/:id/schedule
router.post('/flights/:id/schedule', async (req, res) => {
  try {
    const usuarioId = req.user.id; // asumimos usuario autenticado
    const vueloId = req.params.id;
    const result = await service.scheduleFlight({ vueloId, usuarioId });
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
