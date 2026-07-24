# Personal Portfolio Website

A beautiful, responsive, and full-stack personal portfolio website built with React, Node.js, Express, and SQLite.

## Features

- **Modern UI:** Built with glassmorphism effects, a sleek dark mode, and smooth scrolling.
- **Dynamic Content:** Projects are fetched automatically from a backend database.
- **Micro-Animations:** Utilizes Framer Motion for elegant reveal animations as you scroll.
- **Zero Setup Database:** Uses SQLite so you don't need a separate database server running locally.

## Tech Stack

- **Frontend:** React, Vite, Framer Motion, Axios, Lucide React
- **Backend:** Node.js, Express, SQLite3, CORS
- **CSS:** Custom vanilla CSS with modern utility classes

## Running Locally

1. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
   ```
2. **Start Backend Server:**
   ```bash
   npm start
   # or
   node server.js
   ```
   *(The backend runs on http://localhost:5000 and automatically creates and seeds the SQLite database on first run)*

3. **Install Frontend Dependencies:**
   ```bash
   cd frontend
   npm install
   ```
4. **Start Frontend Server:**
   ```bash
   npm run dev
   ```
   *(The frontend runs on http://localhost:5173)*

## License

This project is open-sourced under the MIT License.
