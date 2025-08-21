# Diagrama de Flujo - Registrarse

```mermaid
flowchart TD
    A[Ingresar datos] --> B{Correo disponible?}
    B -- No --> C[Mostrar error]
    B -- Sí --> D[Guardar usuario]
    D --> E[Confirmar registro]
```
