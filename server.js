// server.js - Movie Collection Display API
// Run: node server.js
const express = require('express');
const path = require('path');
const movies = require('./data/movies');

const app = express();
const PORT = 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// GET /movies - return all movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

// GET /movies/classics - return movies with isClassic === true
app.get('/movies/classics', (req, res) => {
  const classics = movies.filter(m => m.isClassic === true);
  res.json(classics);
});

// GET /movies/genres - return unique genres with counts
app.get('/movies/genres', (req, res) => {
  const map = movies.reduce((acc, m) => {
    acc[m.genre] = (acc[m.genre] || 0) + 1;
    return acc;
  }, {});
  const genres = Object.keys(map).map(name => ({ name, movieCount: map[name] }));
  res.json({ genres });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});