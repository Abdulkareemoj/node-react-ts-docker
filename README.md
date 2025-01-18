# README

This repository is a template for creating a full-stack application using Node.js, React, TypeScript, and Docker. It provides a minimal setup for both the frontend and backend, containerized using Docker, to help you get started quickly.

## Features

- **Frontend**: Built with Tanstack Router, React and TypeScript, bundled using Vite for fast development.
- **Backend**: RESTful API built with Node.js, TypeScript, Express, and Mongoose.
- **Docker**: Containerized setup for both frontend and backend to ensure consistent environments across different setups.
- **Linting**: ESLint configuration for TypeScript and React to maintain code quality.

## Prerequisites

- A Code Editor and Terminal of your choice
- Node.js
- Docker
- npm, pnpm or yarn

## Getting Started

- Clone the Repository

```sh
 git clone https://github.com/Abdulkareemoj/node-react-ts-docker.git
cd node-react-ts-docker
```

- Install Dependencies
  For the Frontend

```sh
cd client
npm install
or
pnpm install
or
yarn install
```

For the Backend

```sh
cd server
npm install
or
pnpm install
or
yarn install
```

# Running the Application

- Using Docker
  Build and run the Docker containers:

```sh
docker-compose up --build
```

Access the frontend at http://localhost:3000.

- Without Docker

Start the backend server:

```sh
cd server
npm run dev
or
pnpm run dev
or
yarn dev
```

Start the frontend development server:

```sh
cd client
npm run dev
or
pnpm run dev
or
yarn dev
```

Access the frontend at http://localhost:3000.

## Project Structure

```sh
node-react-ts-docker/
├── client/ # Frontend application (React + TypeScript)
│ ├── public/ # Public assets
│ ├── src/ # Source code
│ ├── package.json
│ └── ... # Other configuration files
├── server/ # Backend application (Node.js + TypeScript)
│ ├── src/ # Source code
│ ├── package.json
│ └── ... # Other configuration files
├── .gitignore
├── docker-compose.yml
└── README.md
```

## Configuration

- **Frontend**: Configuration files are located in the client/ directory.
- **Backend**: Configuration files are located in the server/ directory.
- **Environment Variables**:
  Rename the .env.template to .env in the root directory and enter your details

- Linting
  To run the linter for both frontend and backend:

```sh
cd client
npm run lint
or
pnpm run lint
or
yarn lint
```

```sh
cd server
npm run lint
or
npm run lint
or
yarn lint
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes.

## License

This project is licensed under the MIT License.
