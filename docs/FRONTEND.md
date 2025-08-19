# Frontend

El frontend está desarrollado únicamente con **HTML**, **CSS** y **JavaScript** nativo.

- `register.html` y `login.html` permiten registrar e iniciar sesión, comunicándose con el microservicio de usuarios.
- `flights.html` permite crear nuevos vuelos y listar los existentes, además de reservar uno mediante peticiones a los microservicios correspondientes.
- `reservations.html` lista las reservas del usuario autenticado.

El token JWT se almacena en `localStorage` y se envía en el encabezado `Authorization` para las operaciones protegidas.
