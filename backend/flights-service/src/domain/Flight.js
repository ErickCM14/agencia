class Flight {
  constructor({ id, origin, destination, date, price }) {
    this.id = id;
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.price = price;
  }
}

module.exports = Flight;
