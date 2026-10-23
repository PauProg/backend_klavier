# Klavier Backend

Klavier es la API REST del proyecto de comercio electrónico de instrumentos
musicales. Está construida con Node.js, Express y MongoDB mediante Mongoose, y
ofrece operaciones CRUD para productos, categorías y usuarios. Las contraseñas
de los usuarios se almacenan cifradas con `bcrypt` y los errores se gestionan
mediante un middleware global.

## Tecnologías

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- Docker y Docker Compose

## Instalación y puesta en marcha

### Requisitos

- Node.js y npm
- MongoDB local o Docker Desktop

### 1. Clonar el repositorio

```bash
git clone https://github.com/PauProg/backend_klavier.git
cd backend_klavier
```

### 2. Iniciar MongoDB con Docker (opcional)

Si vas a utilizar la configuración incluida en el proyecto:

```bash
cd docker
cp .env.example .env
docker compose up -d
cd ..
```

Completa `docker/.env` con las credenciales que quieras utilizar. Si usas una
instancia de MongoDB externa, puedes omitir este paso.

### 3. Configurar la API

Instala las dependencias dentro de `api/`:

```bash
cd api
npm install
```

Crea el archivo de variables de entorno a partir de la plantilla:

```bash
cp .env.example .env
```

Edita `api/.env` con la conexión a MongoDB y el puerto de la API:

```env
MONGO_URI=mongodb://<MONGO_ROOT_USER>:<MONGO_ROOT_PASSWORD>@localhost:27017/klavier?authSource=admin
PORT=3000
```

Si no utilizas autenticación en MongoDB, adapta `MONGO_URI` a la configuración
de tu instalación.

### 4. Arrancar el servidor

Desde el directorio `api/`, ejecuta:

```bash
npm run dev
```

La API quedará disponible en `http://localhost:3000`. La ruta raíz
`GET /` devuelve un mensaje para comprobar que el servidor está activo.

## Colección de peticiones

Las peticiones de prueba están organizadas en la carpeta [`postman/`](./postman/)
por recurso:

- `postman/collections/Product/`
- `postman/collections/Category/`
- `postman/collections/User/`
- `postman/environments/Ecommerce Local.environment.yaml`

Para utilizarlas:

1. Abre Postman y selecciona **Import**.
2. Importa la carpeta `postman/` o las peticiones de cada subcarpeta si tu
   versión de Postman solicita archivos individuales.
3. Importa o selecciona el entorno `Ecommerce Local`.
4. Configura la variable `baseUrl` con el valor `http://localhost:3000`.
5. Arranca la API y ejecuta primero las peticiones de creación si necesitas
   datos de prueba; después puedes consultar, actualizar o eliminar recursos.

Todas las URLs de la colección utilizan `{{baseUrl}}`, por ejemplo:
`{{baseUrl}}/api/products`.

## Endpoints principales

Todos los endpoints devuelven JSON, salvo las operaciones de borrado que
responden con `204 No Content` cuando terminan correctamente.

### Products

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `/api/products` | Crear un producto |
| `GET` | `/api/products` | Obtener productos |
| `GET` | `/api/products/:id` | Obtener un producto por ID |
| `PATCH` | `/api/products/:id` | Actualizar un producto |
| `DELETE` | `/api/products/:id` | Eliminar un producto |

### Categories

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `/api/categories` | Crear una categoría |
| `GET` | `/api/categories` | Obtener categorías |
| `GET` | `/api/categories/:id` | Obtener una categoría por ID |
| `PATCH` | `/api/categories/:id` | Actualizar una categoría |
| `DELETE` | `/api/categories/:id` | Eliminar una categoría |

### Users

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `/api/users` | Crear un usuario |
| `GET` | `/api/users` | Obtener usuarios |
| `GET` | `/api/users/:id` | Obtener un usuario por ID |
| `PATCH` | `/api/users/:id` | Actualizar un usuario |
| `DELETE` | `/api/users/:id` | Desactivar un usuario |

Las respuestas de usuarios no exponen el campo `passwordHash`.

## Filtros, ordenación y paginación

Los endpoints de listado aceptan los siguientes query parameters:

| Parámetro | Ejemplo | Descripción |
| --- | --- | --- |
| `active` | `active=true` | Filtra por estado activo (`true` o `false`) |
| `name` | `name=piano` | Busca por nombre sin distinguir mayúsculas y minúsculas |
| `sort` | `sort=-createdAt,name` | Ordena por uno o varios campos; usa `-` para orden descendente |
| `page` | `page=2` | Número de página; por defecto es `1` |
| `limit` | `limit=20` | Elementos por página; por defecto es `10` y el máximo es `50` |

Ejemplo:

```text
GET /api/categories?active=true&name=vertical&sort=-createdAt&page=1&limit=10
```

Las respuestas paginadas incluyen `data` y un objeto `pagination` con `page`,
`limit`, `total` y `totalPages`.

## Estructura del proyecto

```text
.
├── api/
│   ├── .env.example
│   └── src/
│       ├── config/         # Conexión con MongoDB
│       ├── controllers/    # Gestión de peticiones HTTP
│       ├── middlewares/    # Middleware global de errores
│       ├── models/         # Esquemas Mongoose
│       ├── routes/         # Rutas de la API
│       └── services/       # Lógica de negocio
├── docker/                 # MongoDB con Docker Compose
├── docs/                   # ADRs y diagramas del dominio
├── postman/                # Peticiones y entorno de prueba
└── README.md
```

## Documentación adicional

- Diagrama de dominio: [`docs/diagrams/`](./docs/diagrams/)
- Decisiones arquitectónicas: [`docs/adrs/`](./docs/adrs/)

## Autor

Pau Medina Vázquez
