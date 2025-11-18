// public/app.js
const output = document.getElementById('output');
const btnAll = document.getElementById('btn-all');
const btnClassics = document.getElementById('btn-classics');
const btnGenres = document.getElementById('btn-genres');

btnAll.addEventListener('click', () => fetchAndRender('/movies', renderMovies));
btnClassics.addEventListener('click', () => fetchAndRender('/movies/classics', renderMovies));
btnGenres.addEventListener('click', () => fetchAndRender('/movies/genres', renderGenres));

// Generic fetch with error handling
async function fetchAndRender(path, renderer) {
  output.innerHTML = '<p class="small">Loading...</p>';
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Server returned ${res.status}`);
    const data = await res.json();
    renderer(data);
  } catch (err) {
    output.innerHTML = `<p class="alert">Error: ${err.message}</p>`;
    console.error(err);
  }
}

function renderMovies(movies) {
  if (!Array.isArray(movies) || movies.length === 0) {
    output.innerHTML = '<p class="small">No movies found.</p>';
    return;
  }
  output.innerHTML = '';
  movies.forEach(m => {
    const div = document.createElement('div');
    div.className = 'movie';
    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerHTML = `<div class="row"><strong>${escapeHtml(m.title)}</strong>${m.isClassic ? '<span class="badge">Classic</span>' : ''}</div>
      <div class="small">${escapeHtml(m.genre)} • ${m.releaseYear} • Director: ${escapeHtml(m.director)}</div>`;
    const right = document.createElement('div');
    right.className = 'small';
    right.textContent = m.isClassic ? '✔️ Classic' : 'Recent';
    div.appendChild(meta);
    div.appendChild(right);
    output.appendChild(div);
  });
}

function renderGenres(data) {
  if (!data || !Array.isArray(data.genres)) {
    output.innerHTML = '<p class="small">No genres found.</p>';
    return;
  }
  output.innerHTML = '<div class="genres-list"></div>';
  const list = output.querySelector('.genres-list');
  data.genres.forEach(g => {
    const el = document.createElement('div');
    el.className = 'genre-pill';
    el.textContent = `${g.name} — ${g.movieCount} movie${g.movieCount>1?'s':''}`;
    list.appendChild(el);
  });
}

// Basic HTML-escape to avoid injection
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]); }