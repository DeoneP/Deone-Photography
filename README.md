# Deone Photography Website

A premium photography portfolio website built with React, Vite, and Framer Motion. This application features a fluid, high-end design, password-protected client galleries, and a comprehensive portfolio showcase.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- `npm` (usually comes with Node.js)

### Installation

1.  **Install Dependencies:**
    Open your terminal in the project folder and run:
    ```bash
    npm install
    ```
    This will install React, Framer Motion, React Router, and other necessary packages listed in `package.json`.

2.  **Start Local Server:**
    Run the development server:
    ```bash
    npm run dev
    ```

3.  **View in Browser:**
    Open the link shown in the terminal (usually `http://localhost:3000`) to view the site.

---

## Features

- **Portfolio**: Categorized gallery (Family, Portrait, Wedding, etc.) with album organization.
- **Client Access**: Private, password-protected galleries for clients.
    - **Demo Login**: Gallery ID: `demo` | PIN: `1234`
- **Investment**: Pricing packages and "How it works" guide.
- **About & Contact**: Information about the photographer and inquiry form.

## Project Structure

- `src/pages`: Individual page components (Home, Portfolio, etc.).
- `src/components`: Reusable UI components.
- `src/data`: Content configuration (`content.ts`) and portfolio data (`portfolioData.ts`, `clientGalleries.ts`).

## Customization

- **Content**: Edit `src/data/content.ts` to change text on the Home, About, and Contact pages.
- **Portfolio**: Add or remove images in `src/data/portfolioData.ts`.
- **Client Galleries**: Manage private galleries in `src/data/clientGalleries.ts`.
