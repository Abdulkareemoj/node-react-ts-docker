# Full-Stack Node.js, React, TypeScript, and Docker Template

This repository is a template for creating a full-stack application using Node.js, React, TypeScript, and Docker. It's structured as a pnpm workspace to manage the frontend and backend applications.

## Features

- **Monorepo**: pnpm workspace for managing the client and server packages.
- **Frontend**: Built with Tanstack Router, React and TypeScript, bundled using Vite for fast development.
- **Backend**: RESTful API built with Node.js, TypeScript, Express, and Mongoose.
- **Docker**: Containerized setup for the entire application.
- **Linting**: ESLint configuration for TypeScript and React to maintain code quality.

## Prerequisites

- A Code Editor and Terminal of your choice
- Node.js
- Docker
- pnpm

## Getting Started

1.  **Clone the Repository**

    ```sh
    git clone https://github.com/Abdulkareemoj/node-react-ts-docker.git
    cd node-react-ts-docker
    ```

2.  **Install Dependencies**

    Install all dependencies for both the client and server using pnpm from the root of the project.

    ```sh
    pnpm install
    ```

## Running the Application

### Without Docker

To run both the frontend and backend development servers concurrently, use the following command from the root of the project:

```sh
pnpm dev
```

The frontend will be accessible at `http://localhost:5173`, and the backend will be running on the port specified in your server's configuration.

### With Docker

To build and run the application using Docker, run the following command from the root of the project:

```sh
docker-compose up --build
```

The application will be accessible at `http://localhost:80`.

## Project Structure

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

## Configuration

- **Environment Variables**: Rename the `.env.template` to `.env` in the root directory and enter your details. These variables are used by the backend.

- **Linting**: To run the linter for both the client and server, run the following command from the root of the project:

  ```sh
  pnpm --filter "./apps/*" lint
  ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes.

## License

This project is licensed under the MIT License.