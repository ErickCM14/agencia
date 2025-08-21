# Arquitectura

El proyecto adopta **Clean Architecture** para separar las responsabilidades en capas independientes:

- **Dominio:** contiene entidades y contratos de repositorios.
- **Aplicación:** orquesta casos de uso y servicios.
- **Infraestructura:** provee implementaciones técnicas (Mongoose, Express, etc.).
- **Interfaces:** expone los controladores y rutas HTTP.

Esta separación favorece la mantenibilidad y la posibilidad de cambiar tecnologías sin afectar la lógica de negocio. Dentro del ciclo de vida **RUP**, cada iteración desarrolla de manera incremental los componentes de estas capas, permitiendo validar requisitos tempranamente y ajustarse a cambios.

Se utiliza una API REST con Express y MongoDB mediante Mongoose. La autenticación se basa en JWT y la infraestructura está preparada para despliegue en contenedores.
