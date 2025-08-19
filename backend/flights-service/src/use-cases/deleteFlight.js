const flightRepository = require('../domain/FlightRepository');

module.exports = async function deleteFlight(id) {
  await flightRepository.delete(id);
};
