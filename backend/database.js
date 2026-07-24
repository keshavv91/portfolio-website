const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'portfolio.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    
    // Create the projects table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      techStack TEXT,
      imageUrl TEXT,
      projectUrl TEXT,
      githubUrl TEXT
    )`, (err) => {
      if (err) {
        console.error('Error creating projects table:', err.message);
      } else {
        // Seed some initial data if the table is empty
        db.get("SELECT COUNT(*) AS count FROM projects", (err, row) => {
          if (row.count === 0) {
            console.log('Seeding initial projects data...');
            const insert = db.prepare('INSERT INTO projects (title, description, techStack, imageUrl, projectUrl, githubUrl) VALUES (?, ?, ?, ?, ?, ?)');
            insert.run(
              'E-Commerce Platform',
              'A full-stack e-commerce solution with payment processing and user authentication.',
              'React, Node.js, Express, MongoDB, Stripe',
              'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
              '#',
              '#'
            );
            insert.run(
              'Task Management Dashboard',
              'A beautifully designed dashboard for managing team projects and personal tasks with drag-and-drop features.',
              'Vue.js, Firebase, Tailwind CSS',
              'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
              '#',
              '#'
            );
            insert.run(
              'Weather App',
              'Real-time weather tracking application using third-party APIs with location services.',
              'React Native, OpenWeather API',
              'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
              '#',
              '#'
            );
            insert.finalize();
          }
        });
      }
    });
  }
});

module.exports = db;
