const express = require('express');
const { body } = require('express-validator');
const { createReservation, getReservations, getAllReservations } = require('../controllers/reservationController');
const auth = require('../middleware/auth');
const router = express.Router();

/**
 * @swagger
 * /api/reservations:
 *   get:
 *     summary: List reservations for user
 */
router.get('/', auth, getReservations);

/**
 * @swagger
 * /api/reservations/all:
 *   get:
 *     summary: List all reservations
 */
router.get('/all', getAllReservations);

/**
 * @swagger
 * /api/reservations:
 *   post:
 *     summary: Create reservation
 */
router.post('/', auth, [body('flight').notEmpty()], createReservation);

module.exports = router;
