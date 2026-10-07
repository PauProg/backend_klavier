# E-commerce Full Stack - Klavier (Backend)

## Tecnologías

- Node.js
- Express
- MongoDB
- Mongoose
- Docker
- Docker Compose

## Autor

Pau Medina Vázquez

## Estructura del proyecto

```text
.
├── api/
│   ├── .env.example
│   ├── package.json
│   └── src/
│       ├── config/
│       │   └── db.js
│       ├── index.js
│       └── models/
│           ├── Carrito.js
│           ├── Categoria.js
│           ├── CategoriaProducto.js
│           ├── CuponDescuento.js
│           ├── Descuento.js
│           ├── Direccion.js
│           ├── HistorialEstadoPedido.js
│           ├── LineaCarrito.js
│           ├── LineaPedido.js
│           ├── MovimientoStock.js
│           ├── Pago.js
│           ├── Pedido.js
│           ├── Producto.js
│           ├── Resenia.js
│           └── Usuario.js
├── docker/
│   ├── .env.example
│   ├── .env
│   └── docker-compose.yml
├── docs/
│   ├── adrs/
│   │   ├── elige-base-de-datos.md
│   │   └── separa-repositorios.md
│   └── diagrams/
│       └── diagramaDomini.drawio
├── .gitignore
├── package.json
└── README.md
```

### Descripción de las carpetas

- `api/src/config/`: configuración de la conexión con MongoDB.
- `api/src/models/`: esquemas Mongoose de las entidades de la aplicación.
- `api/src/index.js`: punto de entrada del servidor Express.
- `docker/`: configuración de MongoDB mediante Docker Compose.
- `docs/adrs/`: decisiones técnicas y arquitectónicas del proyecto.
- `docs/diagrams/`: diagramas del dominio.

## Documentación

- Diagrama de dominio: `docs/diagrams/`
- Architecture Decision Records (ADRs): `docs/adrs/`

## Como ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/PauProg/backend_klavier.git
cd backend_klavier
```

### 2. Ver versión de docker y docker compose

```bash
docker --version
```

```bash
docker compose version
```

### 3. Entrar al directorio de docker

```bash
cd ./docker
```

### 4. Crear el .env con las credenciales

```bash
cp .env.example .env
```

Una vez tengas el .env, introduce las variables de entorno que hay en el archivo.

### 5. Ejecutar el contenedor

```bash
docker compose up -d
```

### 6. Configurar y ejecutar la API

Desde el directorio `docker/`, entra en la API e instala sus dependencias:

```bash
cd ../api
npm install
```

Crea el archivo de entorno de la API a partir de su plantilla:

```bash
cp .env.example .env
```

Edita `api/.env` y configura la conexión a MongoDB:

```env
MONGO_URI=mongodb://<MONGO_ROOT_USER>:<MONGO_ROOT_PASSWORD>@localhost:27017/klavier?authSource=admin
PORT=3000
```

Inicia el servidor en modo desarrollo:

```bash
npm run dev
```

La API estará disponible en `http://localhost:3000`.

### 7. (Opcional) Acceder a MongoDB Compass

Puedes crear una conexión a MongoDB Compass con esta dirección:

```
mongodb://<MONGO_ROOT_USER>:<MONGO_ROOT_PASSWORD>@localhost:27017/?authSource=admin
```
