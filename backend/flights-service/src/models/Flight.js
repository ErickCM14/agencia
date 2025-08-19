const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Flight', flightSchema);
