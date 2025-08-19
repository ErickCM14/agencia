const ReservationModel = require('../models/Reservation');
const Reservation = require('./Reservation');

class ReservationRepository {
  async create(data) {
    const reservation = await ReservationModel.create(data);
    return new Reservation({
      id: reservation._id.toString(),
      user: reservation.user,
      flight: reservation.flight,
      status: reservation.status,
    });
  }

  async listByUser(userId) {
    const reservations = await ReservationModel.find({ user: userId }).populate('flight');
    return reservations.map(
      (r) =>
        new Reservation({
          id: r._id.toString(),
          user: r.user,
          flight: r.flight,
          status: r.status,
        })
    );
  }
}

module.exports = new ReservationRepository();
