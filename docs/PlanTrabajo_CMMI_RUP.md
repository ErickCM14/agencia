# Plan de Trabajo CMMI con Enfoque RUP

## 1. Contexto del Proyecto
El sistema de **Agencia de Viajes** implementa una API REST en Node.js/Express con una base de datos MongoDB y se estructura bajo **Clean Architecture**. Entre sus funcionalidades principales se encuentran:
- Registro e inicio de sesión de usuarios.
- Gestión de vuelos por parte de administradores.
- Visualización y reserva de vuelos por parte de los clientes.
Los artefactos actuales incluyen casos de uso, diagramas de flujo, diagrama de clases y un código base para la reserva de vuelos.

## 2. Objetivo
Definir un plan de trabajo alineado al **modelo CMMI** (Nivel 2-3) aplicando el marco metodológico **RUP** para guiar el desarrollo iterativo e incremental del proyecto.

## 3. Mapeo de Fases RUP con Áreas de Proceso CMMI
| Fase RUP        | Áreas de Proceso CMMI Relevantes |
|-----------------|----------------------------------|
| Inicio          | REQM (Gestión de Requisitos), PP (Planificación de Proyecto), PMC (Monitoreo y Control del Proyecto) |
| Elaboración     | RD (Desarrollo de Requisitos), TS (Solución Técnica), RSKM (Gestión de Riesgos) |
| Construcción    | PI (Integración del Producto), VER (Verificación), VAL (Validación), CM (Gestión de Configuración) |
| Transición      | PPQA (Aseguramiento de Calidad de Proceso y Producto), MA (Medición y Análisis), DAR (Análisis y Resolución de Decisiones) |

## 4. Plan Detallado por Fase
### 4.1 Fase de Inicio
**Objetivo:** Definir alcance, estimaciones iniciales y riesgos.
- Actividades
  - Identificar actores y objetivos del sistema.
  - Priorizar los casos de uso _Iniciar Sesión_, _Registrarse_ y _Visualizar Vuelos_.
  - Crear el documento de **Visión General** y el repositorio de requisitos.
- Artefactos
  - `documentacion/1. VisionGeneral.md`
  - `documentacion/2. Requisitos/RequisitosFuncionales.md`
  - Diagramas de caso de uso iniciales.
- Salidas CMMI
  - Requisitos trazables y aprobados.
  - Plan de proyecto preliminar.

### 4.2 Fase de Elaboración
**Objetivo:** Refinar la arquitectura y los requisitos.
- Actividades
  - Detallar casos de uso críticos: _Agregar Vuelo_, _Agendar Vuelo_.
  - Diseñar el **Diagrama de Clases** y definir interfaces de repositorio.
  - Elaborar prototipos técnicos de la API y modelos de datos.
  - Gestionar riesgos técnicos (p. ej., concurrencia de reservas) bajo RSKM.
- Artefactos
  - `documentacion/3. CasosDeUso/*`
  - `documentacion/4. Diagramas/DiagramaClases.md`
  - Código de dominio y repositorios en `/codigo/src`.
- Salidas CMMI
  - Arquitectura base validada.
  - Plan actualizado y mitigación de riesgos.

### 4.3 Fase de Construcción
**Objetivo:** Implementar funcionalidad completa y pruebas.
- Actividades
  - Implementar iterativamente los casos de uso restantes y sus controladores.
  - Desarrollar pruebas unitarias y de integración (`npm test`).
  - Realizar revisiones de código y asegurar estándares de calidad (PPQA).
  - Integrar servicios y manejar versiones mediante `git` (CM).
- Artefactos
  - Código fuente en `/codigo`.
  - Pruebas automatizadas y scripts de despliegue.
- Salidas CMMI
  - Producto incrementado con funcionalidades completas.
  - Registros de verificación y validación.

### 4.4 Fase de Transición
**Objetivo:** Entregar el sistema a producción y capacitar usuarios.
- Actividades
  - Preparar entorno de despliegue (`documentacion/8. Despliegue/*`).
  - Ejecutar pruebas de aceptación con usuarios clave.
  - Documentar lecciones aprendidas y métricas (MA).
  - Tomar decisiones de mejora utilizando DAR.
- Artefactos
  - Manuales de usuario y administrador.
  - Registro de métricas y reportes finales.
- Salidas CMMI
  - Sistema liberado y evaluado.
  - Retroalimentación para iteraciones futuras.

## 5. Gestión y Monitoreo Continuo
- Revisiones periódicas de avance frente al plan.
- Control de cambios y trazabilidad de requisitos.
- Actualización de riesgos y métricas de calidad.

## 6. Conclusión
Este plan integra las mejores prácticas de CMMI con la naturaleza iterativa de RUP, asegurando que cada artefacto —desde los casos de uso hasta los diagramas y la implementación— sea desarrollado y controlado de forma sistemática para lograr un producto de alta calidad y mantenible.

