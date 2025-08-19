# Arquitectura

El sistema sigue los principios de **Clean Architecture** separando responsabilidades en capas:

- **Presentación**: controladores y rutas de Express que reciben las peticiones HTTP.
- **Aplicación**: servicios y validaciones donde reside la lógica de negocio.
- **Dominio**: modelos de Mongoose que representan las entidades.
- **Infraestructura**: conexión a MongoDB, middleware de autenticación y manejo de errores.

Cada microservicio es independiente, expone una API REST y puede desplegarse de forma aislada. Se utilizan patrones como **Repository** (a través de los modelos de Mongoose) y **Middleware** para mantener el código modular y fácil de mantener.
