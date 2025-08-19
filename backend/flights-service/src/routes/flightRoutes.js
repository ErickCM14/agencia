const express = require('express');
const { body } = require('express-validator');
const { getFlights, createFlight, getUserFlights } = require('../controllers/flightController');
const auth = require('../middleware/auth');
const router = express.Router();

/**
 * @swagger
 * /api/flights:
 *   get:
 *     summary: List flights
 */
router.get('/', getFlights);

/**
 * @swagger
 * /api/flights/mine:
 *   get:
 *     summary: List flights for user
 */
router.get('/mine', auth, getUserFlights);

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
    body('price').isNumeric()
  ],
  createFlight
);

module.exports = router;
