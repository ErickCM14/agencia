require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const flightRoutes = require('./routes/flightRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Flights Service', version: '1.0.0' }
  },
  apis: ['./routes/*.js']
};
const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/flights', flightRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3002;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Flights service running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
