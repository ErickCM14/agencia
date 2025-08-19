const reservationRepository = require('../domain/ReservationRepository');

module.exports = async function createReservation(data) {
  return await reservationRepository.create(data);
};
