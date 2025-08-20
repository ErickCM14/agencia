const express = require('express');
const { body } = require('express-validator');
const {
  getFlights,
  getFlight,
  createFlight,
  updateFlight,
  deleteFlight,
  seedFlights,
} = require('../controllers/flightController');
const auth = require('../middleware/auth');
const router = express.Router();

/**
 * @swagger
 * /api/flights:
 *   get:
 *     summary: List flights
 */
router.get('/', getFlights);

router.post('/seed', auth, seedFlights);

router.get('/:id', getFlight);

/**
 * @swagger
 * /api/flights:
 *   post:
 *     summary: Create flight
 */
router.post(
  '/',
  auth,
  [
    body('origin').notEmpty(),
    body('destination').notEmpty(),
    body('date').isISO8601(),
    body('price').isNumeric(),
  ],
  createFlight
);

router.put(
  '/:id',
  auth,
  [
    body('origin').optional().notEmpty(),
    body('destination').optional().notEmpty(),
    body('date').optional().isISO8601(),
    body('price').optional().isNumeric(),
  ],
  updateFlight
);

router.delete('/:id', auth, deleteFlight);

module.exports = router;
