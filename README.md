# Backend BTG

Este proyecto es el backend de la aplicación de gestión de fondos de inversión para BTG. Utiliza Node.js, Express y MongoDB para proporcionar una API RESTful que interactúa con el frontend.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [API Endpoints](#api-endpoints)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Gatroxm/backend-btg.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd backend-btg
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

Para iniciar la aplicación, ejecuta:

```bash
    node server.js
```

La API se ejecutará en http://localhost:5000.

## Estructura del Proyecto

```bash
/backend
├── /controllers
├── /models
├── /routes
├── server.js
└── package.json
```

## API Endpoints

### Fondos

| Método | Endpoint         | Descripción              |
| ------ | ---------------- | ------------------------ |
| GET    | `/api/funds`     | Obtener todos los fondos |
| POST   | `/api/funds`     | Crear un nuevo fondo     |
| PUT    | `/api/funds/:id` | Actualizar un fondo      |
| DELETE | `/api/funds/:id` | Eliminar un fondo        |

### Transacciones

| Método | Endpoint                     | Descripción                     |
| ------ | ---------------------------- | ------------------------------- |
| GET    | `/api/transactions`          | Obtener todas las transacciones |
| POST   | `/api/transactions/apertura` | Crear una nueva transacción     |
| PUT    | `/api/transactions/:id`      | Actualizar una transacción      |
| DELETE | `/api/transactions/:id`      | Eliminar una transacción        |

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un "issue" o un "pull request" para discutir cambios.

## Licencia

Este proyecto está bajo la licencia MIT.

### Personalización

Asegúrate de:

- Ajustar la sección de **API Endpoints** para reflejar todas las rutas disponibles en tu backend.
- Agregar detalles específicos sobre cualquier funcionalidad importante que quieras destacar.

Si necesitas más información o ajustes específicos, ¡déjamelo saber!

## Anexo

En la carpate sql se encuentra el archivo con la solución del punto 2 de el archivo.
