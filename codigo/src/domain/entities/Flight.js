// Entidad Vuelo
class Flight {
  constructor({ id, origen, destino, fecha, cupos, precio }) {
    this.id = id;
    this.origen = origen;
    this.destino = destino;
    this.fecha = fecha;
    this.cupos = cupos;
    this.precio = precio;
  }
}
module.exports = Flight;
