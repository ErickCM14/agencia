const FlightModel = require('../models/Flight');
const Flight = require('./Flight');

class FlightRepository {
  async list() {
    const flights = await FlightModel.find();
    return flights.map((f) =>
      new Flight({
        id: f._id.toString(),
        origin: f.origin,
        destination: f.destination,
        date: f.date,
        price: f.price,
      })
    );
  }

  async create(data) {
    const flight = await FlightModel.create(data);
    return new Flight({
      id: flight._id.toString(),
      origin: flight.origin,
      destination: flight.destination,
      date: flight.date,
      price: flight.price,
    });
  }
}

module.exports = new FlightRepository();
