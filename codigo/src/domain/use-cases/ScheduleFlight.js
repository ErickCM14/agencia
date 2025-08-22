// Caso de uso: Agendar Vuelo
class ScheduleFlight {
  constructor({ flightRepository, bookingRepository }) {
    this.flightRepository = flightRepository;
    this.bookingRepository = bookingRepository;
  }

  async execute({ vueloId, usuarioId }) {
    const flight = await this.flightRepository.findById(vueloId);
    if (!flight || flight.cupos <= 0) {
      throw new Error('Vuelo sin disponibilidad');
    }
    const existing = await this.bookingRepository.findByUserAndFlight(usuarioId, vueloId);
    if (existing) {
      throw new Error('Vuelo ya reservado');
    }
    await this.bookingRepository.create({ usuarioId, vueloId, fechaReserva: new Date() });
    await this.flightRepository.decrementSeats(vueloId);
    return { mensaje: 'Reserva confirmada' };
  }
}
module.exports = ScheduleFlight;
