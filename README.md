# Movie Collection API

## About the Collection
This project contains a small, curated movie collection mixing classics and recent films. It includes dramas, action, sci‑fi, comedy, crime and more — chosen to demonstrate filtering, grouping, and a simple frontend display.

## Project Description
A Node.js + Express REST API that exposes movie data through three endpoints and serves a static frontend page to browse the collection. Technologies: Node.js, Express, HTML, CSS, JavaScript (fetch).

## Genres Available
- Drama
- Sci‑Fi
- Action
- Crime
- Comedy

## Project Structure
```
movie-collection-api/
├─ data/
│  └─ movies.js
├─ public/
│  ├─ index.html
│  ├─ style.css
│  └─ app.js
├─ .gitignore
├─ README.md
├─ package.json
└─ server.js
```

## API Documentation

### GET /movies
- **Method:** GET
- **Description:** Returns a JSON array with all movie objects.
- **Sample Response:**
```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  }
]
```

### GET /movies/classics
- **Method:** GET
- **Description:** Returns only movies where `isClassic` is `true` (movies released before 2000 in this collection).
- **Sample Response:**
```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  }
]
```

### GET /movies/genres
- **Method:** GET
- **Description:** Returns unique genres and how many movies belong to each.
- **Sample Response:**
```json
{
  "genres": [
    { "name": "Drama", "movieCount": 1 },
    { "name": "Sci-Fi", "movieCount": 2 }
  ]
}
```

## Installation & Setup Instructions
1. Clone the repository:
```bash
git clone <your-repo-url>
cd movie-collection-api
```
2. Install dependencies:
```bash
npm install
```
3. Start the server:
```bash
npm start
```
4. Open the frontend in your browser at: `http://localhost:3000/`
5. API endpoints:
- `http://localhost:3000/movies`
- `http://localhost:3000/movies/classics`
- `http://localhost:3000/movies/genres`

## Features
- Three GET endpoints (`/movies`, `/movies/classics`, `/movies/genres`)
- Simple static frontend with buttons to fetch and display data
- Classic movies visually labelled with a badge
- Error handling on the frontend for failed fetches

## Author
Your Name Here

## Notes before submission
- Make sure `node_modules/` is excluded (use the provided `.gitignore`).
- Make at least two meaningful commits when you push to GitHub (suggested commit messages in README).
- Zip the folder as `movieapi_<yourname>.zip` before submitting.