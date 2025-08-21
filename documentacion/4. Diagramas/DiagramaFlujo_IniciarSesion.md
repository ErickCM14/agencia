# Diagrama de Flujo - Iniciar Sesión

```mermaid
flowchart TD
    A[Ingresar credenciales] --> B{Credenciales válidas?}
    B -- No --> C[Mostrar error]
    B -- Sí --> D[Generar JWT]
    D --> E[Responder con éxito]
```
