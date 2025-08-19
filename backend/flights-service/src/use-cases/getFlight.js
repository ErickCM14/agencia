const flightRepository = require('../domain/FlightRepository');

module.exports = async function getFlight(id) {
  return await flightRepository.findById(id);
};
