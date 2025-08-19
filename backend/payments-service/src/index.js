require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const paymentRoutes = require('./routes/paymentRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Payments Service', version: '1.0.0' }
  },
  apis: ['./routes/*.js']
};
const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/payments', paymentRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Payments service running on port ${PORT}`));
