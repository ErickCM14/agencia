const express = require('express');
const { body } = require('express-validator');
const { register, login } = require('../controllers/userController');
const router = express.Router();

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 */
router.post(
  '/register',
  [body('name').notEmpty(), body('email').isEmail(), body('password').isLength({ min: 6 })],
  register
);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login user
 */
router.post('/login', login);

module.exports = router;
