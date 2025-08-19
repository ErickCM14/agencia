class Reservation {
  constructor({ id, user, flight, status }) {
    this.id = id;
    this.user = user;
    this.flight = flight;
    this.status = status;
  }
}

module.exports = Reservation;
