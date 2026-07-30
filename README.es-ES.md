

# Plantilla Full-Stack con Node.js, React, TypeScript y Docker

Este repositorio es una plantilla para crear una aplicación full-stack utilizando Node.js, React, TypeScript y Docker. Está estructurada como un espacio de trabajo (workspace) de pnpm para gestionar las aplicaciones frontend y backend.

## Características

- **Monorepo**: Espacio de trabajo de pnpm para gestionar los paquetes de cliente y servidor.
- **Frontend**: Construido con Tanstack Router, React y TypeScript, empaquetado usando Vite para un desarrollo rápido.
- **Backend**: API RESTful construida con Node.js, TypeScript, Express y Mongoose.
- **Docker**: Configuración en contenedores para toda la aplicación.
- **Linting**: Configuración de ESLint para TypeScript y React para mantener la calidad del código.

## Requisitos previos

- Un editor de código y terminal de tu elección
- Node.js
- Docker
- pnpm

## Primeros pasos

1.  **Clona el repositorio**

    ```sh
    git clone https://github.com/Abdulkareemoj/node-react-ts-docker.git
    cd node-react-ts-docker
    ```

2.  **Instala las dependencias**

    Instala todas las dependencias para el cliente y el servidor utilizando pnpm desde la raíz del proyecto.

    ```sh
    pnpm install
    ```

## Ejecución de la aplicación

### Sin Docker

Para ejecutar los servidores de desarrollo de frontend y backend simultáneamente, usa el siguiente comando desde la raíz del proyecto:

```sh
pnpm dev
```

El frontend será accesible en `http://localhost:5173`, y el backend se ejecutará en el puerto especificado en la configuración de tu servidor.

### Con Docker

Para construir y ejecutar la aplicación usando Docker, ejecuta el siguiente comando desde la raíz del proyecto:

```sh
docker-compose up --build
```

La aplicación será accesible en `http://localhost:80`.

## Estructura del proyecto

```
node-react-ts-docker/
├── apps/
│   ├── client/   # Frontend application (React + TypeScript)
│   └── server/   # Backend application (Node.js + TypeScript)
├── package.json          # Root package.json for workspace scripts
├── pnpm-workspace.yaml   # pnpm workspace configuration
├── docker-compose.yml
├── Dockerfile
└── README.md
```

## Configuración

- **Variables de entorno**: Renombra el archivo `.env.template` a `.env` en el directorio raíz e ingresa tus datos. Estas variables son utilizadas por el backend.

- **Linting**: Para ejecutar el linter tanto del cliente como del servidor, ejecuta el siguiente comando desde la raíz del proyecto:

  ```sh
  pnpm --filter "./apps/*" lint
  ```

## Cómo contribuir

¡Las contribuciones son bienvenidas! Por favor, bifurca (fork) el repositorio y envía un pull request para cualquier cambio.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
