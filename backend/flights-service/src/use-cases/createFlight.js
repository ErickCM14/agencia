const flightRepository = require('../domain/FlightRepository');

module.exports = async function createFlight(data) {
  return await flightRepository.create(data);
};
