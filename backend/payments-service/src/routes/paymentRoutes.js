const express = require('express');
const { body } = require('express-validator');
const { processPayment } = require('../controllers/paymentController');
const auth = require('../middleware/auth');
const router = express.Router();

/**
 * @swagger
 * /api/payments:
 *   post:
 *     summary: Process payment
 */
router.post('/', auth, [body('reservation').notEmpty(), body('amount').isNumeric()], processPayment);

module.exports = router;
