const express = require('express');
const mongoose = require('mongoose');
const scheduleController = require('./src/interfaces/controllers/scheduleFlightController');

const app = express();
app.use(express.json());

// Middleware simulado de autenticación
app.use((req, res, next) => {
  // En producción, validar JWT y obtener id de usuario
  req.user = { id: '000000000000000000000001' };
  next();
});

app.use('/api', scheduleController);

async function start() {
  await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/agencia');
  app.listen(3000, () => console.log('Servidor iniciado en puerto 3000'));
}

if (require.main === module) {
  start();
}

module.exports = app;
