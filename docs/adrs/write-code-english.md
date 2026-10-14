# ADR-003: Idioma del código

## Contexto

Los modelos, los campos y el diagrama de dominio estaban en español, mientras que las funciones y las variables ya estaban en inglés. Esta mezcla ya ha dado un problema real: el campo `descripción` (con tilde) del modelo de categorías no coincidía con `descripcion` del diagrama, y un documento creado con el nombre sin tilde fallaba la validación. Había además campos con ñ, como `contraseña` o `idReseña`.

El inglés permite nombres más cortos y comprensibles, no usa tildes ni la ñ, es el idioma del código en toda la teoría del curso y es el habitual en el sector. Por eso unifico el código en un solo idioma.

## Decisión

Todo lo que lee el programa va en inglés: nombres de archivos, modelos, campos, variables, funciones, rutas de la API (`/api/products`), colecciones de MongoDB, claves del JSON y valores técnicos como `'error'` en `status`.

Todo lo que lee una persona va en español: README, documentación, comentarios, mensajes de consola, el texto de los mensajes de error y el frontend.

Criterio: ¿quién lee este texto, el programa o una persona? Si lo lee el programa, inglés. Si lo lee una persona, español.

Ejemplo: en `{ status: 'error', message: 'El precio no puede ser negativo' }`, las claves `status` y `message` y el valor `'error'` van en inglés, y el texto del mensaje en español.

## Consecuencias

+ Tengo una regla clara para elegir el idioma: si lo lee una persona, español; si lo lee el programa, inglés.
+ Nombres más cortos en el código.
+ Evito los problemas con caracteres especiales (tildes y ñ).
+ Me acostumbro a trabajar en inglés, que es el idioma habitual del sector.
+ Es más fácil aplicar la teoría del curso a mi proyecto, porque su código está en inglés.

- Hay que traducir todo lo que ya estaba escrito en español.