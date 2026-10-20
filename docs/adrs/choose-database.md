# ADR-001: Base de datos del proyecto

## Contexto

Necesito una base de datos flexible que me permita tener distintos atributos para distintos tipos de producto (ej. Piano acústico y piano digital). En una base de datos relacional, todas las filas de la tabla tienen los mismos atributos y sería incómodo tener columnas vacías.

## Decisión

Voy a usar MongoDB como base de datos principal, gestionada vía Docker. Uso la versión 7 de MongoDB ya que la más reciente daba problemas de compatibilidad con el kernel de Linux de Docker.

## Consecuencias

+ Flexibilidad para distintos campos y entidades según el tipo de producto.
+ Buena integración con Node/Express al guardar los datos de manera muy parecida a objetos de JavaScript.

- Mi modelo tiene muchas relaciones entre entidades y MongoDB no tiene JOIN: hay que elegir entre incrustar datos (se duplican y pueden quedar desactualizados) o referenciarlos (cada lectura necesita un $lookup extra, más lento y más complejo).