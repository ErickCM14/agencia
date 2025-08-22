// Contrato de repositorio de reservas
class BookingRepository {
  async create(data) {
    throw new Error('Método no implementado');
  }
  async findByUserAndFlight(usuarioId, vueloId) {
    throw new Error('Método no implementado');
  }
}
module.exports = BookingRepository;
