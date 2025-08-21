const FlightModel = require('./FlightModel');
const FlightRepository = require('../../domain/repositories/FlightRepository');

class MongoFlightRepository extends FlightRepository {
  async findById(id) {
    return await FlightModel.findById(id).lean();
  }
  async decrementSeats(id) {
    await FlightModel.updateOne({ _id: id, cupos: { $gt: 0 } }, { $inc: { cupos: -1 } });
  }
}
module.exports = MongoFlightRepository;
