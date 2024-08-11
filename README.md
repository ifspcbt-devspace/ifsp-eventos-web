# Ticketing System Frontend

This is the frontend for a ticketing system used for events at the Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Campus Cubatão. Built with Next.js, this application provides a seamless experience for managing and purchasing event tickets.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Docker Deployment](#docker-deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Event Listing:** View a list of all available events at the Instituto Federal de São Paulo, Campus Cubatão.
- **Ticket Purchase:** Secure and simple process for purchasing tickets.
- **User Authentication:** Users can sign up and log in to manage their ticket purchases.
- **Responsive Design:** Optimized for all devices, including desktops, tablets, and mobile phones.

## Getting Started

To get started with the project, clone the repository and follow the installation instructions below.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/MateusCorrea7/IFSP-EVENTOS-WEB.git
    cd IFSP-EVENTOS-WEB
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

## Running the Application

To run the application in development mode:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

## Environment Variables

Make sure to configure the following environment variables before running the application:

- `IRON_SESSION_PASSWORD=123456789`
- `API_BASE_URL=http://example.com:8092/v1`
- `PRODUCTION_DOMAIN=.example.com`

You can create a `.env.local` file in the root of the project to store these variables:

```plaintext
IRON_SESSION_PASSWORD=123456789
API_BASE_URL=http://example.com:8092/v1
PRODUCTION_DOMAIN=.example.com
```

## Docker Deployment

This project includes a `Dockerfile` for easy deployment. To build and run the Docker container:

1. **Build the Docker image:**
    ```bash
    docker build -t ifsp-eventos-frontend .
    ```

2. **Run the Docker container:**
    ```bash
    docker run -p 3000:3000 --env-file .env.local ifsp-eventos-frontend
    ```

The application will be accessible at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please make sure to base your pull requests on the `develop` branch.

## License

This project is licensed under the MIT License.
