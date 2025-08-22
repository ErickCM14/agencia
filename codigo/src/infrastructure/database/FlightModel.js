const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  origen: String,
  destino: String,
  fecha: Date,
  cupos: Number,
  precio: Number
});

module.exports = mongoose.model('Flight', FlightSchema);
