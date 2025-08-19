# Frontend

El frontend está desarrollado únicamente con **HTML**, **CSS** y **JavaScript** nativo.

- `register.html` y `login.html` permiten registrar e iniciar sesión, comunicándose con el microservicio de usuarios.
- `flights.html` muestra los vuelos disponibles y permite reservar uno mediante peticiones al microservicio de reservas.
- `reservations.html` lista las reservas del usuario autenticado.

El token JWT se almacena en `localStorage` y se envía en el encabezado `Authorization` para las operaciones protegidas.
