# Documentación de la API

## Users Service
- `POST /api/users/register` - Registra un nuevo usuario.
- `POST /api/users/login` - Autentica y devuelve un JWT.

## Flights Service
- `GET /api/flights` - Lista todos los vuelos disponibles.
- `POST /api/flights` - Crea un vuelo (requiere JWT).

## Reservations Service
- `GET /api/reservations` - Lista las reservas del usuario autenticado.
- `POST /api/reservations` - Crea una reserva para un vuelo.

## Payments Service
- `POST /api/payments` - Procesa el pago de una reserva (simulado).

Todas las respuestas se entregan en formato JSON y los endpoints protegidos requieren el encabezado `Authorization: Bearer <token>`.
