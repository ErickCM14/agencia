# Diagrama de Flujo - Agendar Vuelo

```mermaid
flowchart TD
    A[Seleccionar vuelo] --> B{Cupos disponibles?}
    B -- No --> C[Mostrar sin cupos]
    B -- Sí --> D[Registrar reserva]
    D --> E[Confirmar al usuario]
```
