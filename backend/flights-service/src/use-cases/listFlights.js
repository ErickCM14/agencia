const flightRepository = require('../domain/FlightRepository');

module.exports = async function listFlights() {
  return await flightRepository.list();
};
