// Entidad Reserva
class Booking {
  constructor({ id, usuarioId, vueloId, fechaReserva }) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.vueloId = vueloId;
    this.fechaReserva = fechaReserva;
  }
}
module.exports = Booking;
