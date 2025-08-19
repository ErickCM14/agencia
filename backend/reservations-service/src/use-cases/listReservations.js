const reservationRepository = require('../domain/ReservationRepository');

module.exports = async function listReservations(userId) {
  return await reservationRepository.listByUser(userId);
};
