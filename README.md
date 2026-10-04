# MyShop AI — Recommendation Frontend

A cinematic, dark-themed product discovery UI with AI-powered "For You" recommendations, category browsing, and ML model comparison.

## ✨ Features

- **6 Product Categories** — Food, Dresses, Cosmetics, Bakery, Shoes, and Crackers (10 curated items each)
- **Product Detail Modal** — Click any item to see price, tags, summary, and a full-sized photo
- **In-category Search** — Filter items by name, tag, price, or description on any category page
- **Personalized "For You"** — Ranks and surfaces categories based on your search + visit history (stored locally)
- **Guest Session Tracking** — Auto-assigns a browser-based guest ID and stores activity in `localStorage`
- **Model Comparison Page** — Visual bar comparison of Decision Tree vs KNN across Accuracy / Precision / Recall / F1
- **Runtime Activity Logs** — Filterable activity table with CSV export, PDF download, and raw JSON view
- **Fully Responsive** — Mobile, tablet, and desktop layouts with CSS-only animations

## 🧱 Pages

| File | Purpose |
|---|---|
| `frontend/index.html` | Category landing page with For-You section |
| `frontend/category.html` | Category chooser + items grid + detail modal (uses `category-script.js`) |
| `frontend/comparison.html` | Decision Tree vs KNN model metrics dashboard |
| `frontend/runtime.html` | Activity logs viewer with filters, CSV & PDF export |
| `frontend/style.css` | Shared cinematic dark theme |
| `frontend/script.js` | Home-page "For You" recommender (calls backend `/recommend`) |
| `frontend/category-script.js` | Category + product logic, search, detail modal, tracking |

## ▶️ Running the Frontend (No Backend)

Just open any HTML file in your browser — no build step or package manager required:

```
frontend/index.html
```

Category browsing, search, product details, and the localStorage-based For-You all work fully offline.

## 🔌 Expected Backend API (Not Included)

The frontend expects a Flask API at `http://127.0.0.1:5000` exposing these endpoints:

| Method | Endpoint | Used By | Purpose |
|---|---|---|---|
| `GET` | `/recommend?user_id=...` | `script.js` | Return ranked product recommendations |
| `GET` | `/model-comparison` | `comparison.html` | Return per-model accuracy / precision / recall / F1 |
| `POST` | `/runtime-event` | `category-script.js` | Persist search/view events to SQLite |
| `GET` | `/runtime-data?limit=&event_type=` | `runtime.html` | Fetch activity log rows |
| `DELETE` | `/runtime-data` | `runtime.html` | Clear all runtime logs |

If the backend is offline, the UI degrades gracefully (shows local fallback messages, empty states).

## 🎨 Design System

- **Type**: Space Grotesk (headings) + DM Sans (body) via Google Fonts
- **Palette**: Deep navy base with mint-green (`#7df9c1`) and honey-gold (`#f8c94a`) accents
- **Motion**: 180–200ms hover lifts; smooth scroll; 60ms focus outlines
- **Cards**: 22–24px radii, layered glass panels, backdrop-blurred top navigation

## 📁 Project Structure

```
project_ML/
├── .gitignore
├── README.md
└── frontend/
    ├── index.html            # Home / category landing
    ├── category.html         # Category browser + product grid + modal
    ├── comparison.html       # ML model comparison dashboard
    ├── runtime.html          # Activity log viewer
    ├── style.css             # Shared stylesheet
    ├── script.js             # Home For-You logic (backend client)
    └── category-script.js    # Category/product logic + tracking
```

## 🚧 Incomplete / TODO

- [ ] Flask backend (`app.py`) implementing the 5 endpoints above
- [ ] SQLite schema for runtime event logging
- [ ] Scikit-learn training notebooks / scripts (Decision Tree, KNN)
- [ ] Fix: duplicate & malformed `@media` blocks at bottom of `style.css`
- [ ] Fix: align `index.html` structure with elements `script.js` expects
