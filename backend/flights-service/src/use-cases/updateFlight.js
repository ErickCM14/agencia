const flightRepository = require('../domain/FlightRepository');

module.exports = async function updateFlight(id, data) {
  return await flightRepository.update(id, data);
};
