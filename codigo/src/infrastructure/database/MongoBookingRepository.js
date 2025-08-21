const BookingModel = require('./BookingModel');
const BookingRepository = require('../../domain/repositories/BookingRepository');

class MongoBookingRepository extends BookingRepository {
  async create(data) {
    return await BookingModel.create(data);
  }
  async findByUserAndFlight(usuarioId, vueloId) {
    return await BookingModel.findOne({ usuarioId, vueloId }).lean();
  }
}
module.exports = MongoBookingRepository;
