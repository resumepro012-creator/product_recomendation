const API_BASE = 'http://127.0.0.1:5000';

const SESSION_KEY = 'myshop-ai-session-id';
const STATE_KEY = 'myshop-ai-discovery-state';

/* ---------------- STATE ---------------- */

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STATE_KEY));
    if (saved) return saved;
  } catch {}

  return {
    searches: { food: 0, drink: 0, snack: 0, pet: 0 },
    visits: { food: 0, drink: 0, snack: 0, pet: 0 },
    history: [],
    query: ''
  };
}

function saveState(state) {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

/* ---------------- SESSION ---------------- */

function getSessionId() {
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = 'guest-' + Math.random().toString(36).slice(2, 10);
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

/* ---------------- UI ELEMENTS ---------------- */

const els = {
  forYouGrid: document.getElementById('forYouGrid'),
  forYouMeta: document.getElementById('forYouMeta'),
  forYouCount: document.getElementById('forYouCount')
};

/* ---------------- CATEGORY MODEL ---------------- */

const categories = [
  { key: 'food', label: 'Food' },
  { key: 'drink', label: 'Drinks' },
  { key: 'snack', label: 'Snacks' },
  { key: 'pet', label: 'Pet' }
];

/* ---------------- SCORE ---------------- */

function score(state, key) {
  return (state.searches[key] || 0) * 2 + (state.visits[key] || 0);
}

/* ---------------- BACKEND ---------------- */

async function fetchRecommendations() {
  try {
    const res = await fetch(
      `${API_BASE}/recommend?user_id=${getSessionId()}`
    );

    const data = await res.json();

    if (!data.recommendations) return [];

    return data.recommendations;
  } catch (e) {
    return null; // backend down
  }
}

/* ---------------- RENDER ---------------- */

async function renderForYou() {
  const state = loadState();

  const backend = await fetchRecommendations();

  const meta = els.forYouMeta;
  const grid = els.forYouGrid;

  grid.innerHTML = '';

  // ❌ backend OFFLINE → fallback clean message
  if (!backend) {
    meta.innerText = 'Backend offline. Showing local recommendations.';
    return;
  }

  // backend OK
  meta.innerText = 'Based on your browsing behavior';

  backend.slice(0, 6).forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <h3>${item.product_name}</h3>
      <p>${item.category}</p>
      <small>Score: ${item.score}</small>
    `;

    grid.appendChild(card);
  });
}

/* ---------------- INIT ---------------- */

document.addEventListener('DOMContentLoaded', () => {
  renderForYou();
});