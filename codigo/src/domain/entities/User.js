// Entidad Usuario
class User {
  constructor({ id, nombre, correo, rol }) {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.rol = rol;
  }
}
module.exports = User;
