# Diagrama de Clases

```mermaid
classDiagram
    class Usuario {
        +ObjectId _id
        +string nombre
        +string correo
        +string contraseña
        +string rol
    }
    class Vuelo {
        +ObjectId _id
        +string origen
        +string destino
        +Date fecha
        +number cupos
        +number precio
    }
    class Reserva {
        +ObjectId _id
        +ObjectId usuarioId
        +ObjectId vueloId
        +Date fechaReserva
    }
    Usuario "1" -- "*" Reserva : realiza
    Vuelo "1" -- "*" Reserva : es reservado por
```

La lógica de negocio se implementa mediante casos de uso que interactúan con entidades y repositorios. Las capas de infraestructura proveen implementaciones concretas de persistencia, mientras que la capa de aplicación coordina servicios y controladores Express.
