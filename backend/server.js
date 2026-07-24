require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/projects', (req, res) => {
  db.all('SELECT * FROM projects', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

app.post('/api/projects', (req, res) => {
  const { title, description, techStack, imageUrl, projectUrl, githubUrl } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const sql = 'INSERT INTO projects (title, description, techStack, imageUrl, projectUrl, githubUrl) VALUES (?, ?, ?, ?, ?, ?)';
  const params = [title, description, techStack, imageUrl, projectUrl, githubUrl];
  
  db.run(sql, params, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'Project created successfully',
      data: {
        id: this.lastID,
        title, description, techStack, imageUrl, projectUrl, githubUrl
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
