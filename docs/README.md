# Sistema de Reservas de Vuelos

Proyecto de ejemplo para una agencia de vuelos basado en microservicios con Node.js, Express y MongoDB. Incluye autenticación con JWT, documentación con Swagger y un frontend simple en HTML, CSS y JavaScript.

## Ejecución local

1. Copiar los archivos `.env.example` de cada microservicio a `.env` y ajustar los valores.
2. Ejecutar `docker-compose up --build` para levantar MongoDB y todos los microservicios.
3. Abrir `frontend/index.html` en el navegador.

## Despliegue en AWS

- Construir las imágenes Docker de cada microservicio y subirlas a ECR.
- Crear un clúster ECS o instancias EC2 y configurar las tareas con las variables de entorno adecuadas.
- Para Lambda, empaquetar cada servicio con Serverless Framework o AWS SAM.
- Configurar MongoDB Atlas o un contenedor de MongoDB gestionado.
