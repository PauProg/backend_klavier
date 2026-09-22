# E-commerce Full Stack - Klavier (Backend)

## Tecnologías
- Node.js/Express
- MongoDB
- Docker

## Autor
Pau Medina Vázquez

## Como ejecutar el proyecto

### 1. Clonar el repositorio
``` bash
git clone git@github.com:PauProg/backend_klavier.git
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

### 6. (Opcional) Acceder a MongoDB Compass
Puedes crear una conexión a MongoDB Compass con esta dirección:
```
mongodb://<MONGO_ROOT_USER>:<MONGO_ROOT_PASSWORD>@localhost:27017
```