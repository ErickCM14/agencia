# Casos de Prueba

| ID | Caso | Entrada | Salida esperada |
|----|------|---------|-----------------|
| CP-01 | Registro exitoso | Datos válidos | Usuario creado |
| CP-02 | Registro con correo existente | Correo ya registrado | Mensaje de error |
| CP-03 | Inicio de sesión válido | Credenciales correctas | Token JWT |
| CP-04 | Agendar vuelo sin cupos | Vuelo sin disponibilidad | Error de cupos |
| CP-05 | Agregar vuelo con fecha pasada | Fecha < hoy | Rechazo de creación |
