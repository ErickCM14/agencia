const flightRepository = require('../domain/FlightRepository');

const mockFlights = [
  { origin: 'NYC', destination: 'LAX', date: new Date('2024-01-01'), price: 199 },
  { origin: 'LAX', destination: 'SFO', date: new Date('2024-02-15'), price: 99 },
];

module.exports = async function seedFlights() {
  await flightRepository.seed(mockFlights);
  return await flightRepository.list();
};
