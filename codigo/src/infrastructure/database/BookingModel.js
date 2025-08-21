const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  usuarioId: mongoose.Schema.Types.ObjectId,
  vueloId: mongoose.Schema.Types.ObjectId,
  fechaReserva: Date
});

module.exports = mongoose.model('Booking', BookingSchema);
