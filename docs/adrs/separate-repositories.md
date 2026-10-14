# ADR-002: Estructura inicial del proyecto

## Contexto

Necesito decidir si voy a alojar el proyecto en dos monorepos separados o en uno.

## Decisión

He creado dos monorepos distintos, uno para frontend (frontend_klavier) y otro para backend (backend_klavier).

## Consecuencias

+ Proyecto más organizado al tener separados el frontend del backend.
+ Libertad de alojar cada uno de los repositorios en un servidor distinto más adecuado a cada uno.

- En caso de cambios, hay que modificar dos repositorios y hacer dos commits, con el riesgo de que estos queden desincronizados.
- Nunca había trabajado con dos monorepos y hay decisiones que me cuesta tomar.