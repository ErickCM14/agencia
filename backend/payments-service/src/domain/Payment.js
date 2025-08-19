class Payment {
  constructor({ id, reservation, amount, status }) {
    this.id = id;
    this.reservation = reservation;
    this.amount = amount;
    this.status = status;
  }
}

module.exports = Payment;
