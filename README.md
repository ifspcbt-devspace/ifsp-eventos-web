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
   git clone https://github.com/ifspcbt-devspace/ifsp-eventos-web.git
   cd ifsp-eventos-web
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

```plaintext
NEXT_PUBLIC_API_BASE_URL=http://localhost:8091/v1
IRON_SESSION_PASSWORD=YOUR_SECRET
NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY=YOUR_PUBLIC_KEY
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
