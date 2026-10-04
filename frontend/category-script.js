const API_BASE = 'http://127.0.0.1:5000';
const SESSION_KEY = 'myshop-ai-session-id';
const STATE_KEY = 'myshop-ai-discovery-state';

const categoryColors = {
  food: '#ff8a5b',
  dresses: '#c9a0ff',
  cosmetics: '#f8b8d8',
  bakery: '#ffb347',
  shoes: '#ffa66d',
  snack: '#f8c94a',
  other: '#aeb8d6'
};

const categoryLabels = {
  food: 'Food',
  dresses: 'Dresses',
  cosmetics: 'Cosmetics',
  bakery: 'Bakery',
  shoes: 'Shoes',
  snack: 'Snacks & Crackers',
  other: 'Other'
};

const categoryLinks = [
  {
    key: 'food',
    label: 'Food',
    description: 'Fresh snack and grocery style items with quick previews.'
  },
  {
    key: 'dresses',
    label: 'Dresses',
    description: 'Simple, elegant dress picks for everyday and event wear.'
  },
  {
    key: 'cosmetics',
    label: 'Cosmetics',
    description: 'Skincare and beauty picks with clean, simple detail cards.'
  },
  {
    key: 'bakery',
    label: 'Bakery',
    description: 'Sweet and baked treats with warm, cozy product photos.'
  },
  {
    key: 'shoes',
    label: 'Shoes',
    description: 'Sneakers, flats, and boots with a simple detail view.'
  },
  {
    key: 'snack',
    label: 'Snacks & Crackers',
    description: 'Crunchy and savory snack items with fast browsing.'
  }
];

const categoryImages = {
  food: [
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1515543904379-3d757afe72f3?auto=format&fit=crop&w=1200&q=80'
  ],
  dresses: [
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80'
  ],
  cosmetics: [
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1523293836415-7a5b0e7c4d0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1556228578-8d6e0f16e2e1?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80'
  ],
  bakery: [
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80'
  ],
  shoes: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80'
  ],
  snack: [
    'https://images.unsplash.com/photo-1621939514649-280e2ca2e3c0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80'
  ],
  other: [
    'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&fit=crop&w=1200&q=80'
  ]
};

const categoryCatalog = {
  food: makeItems('food', [
    { name: 'Citrus Breakfast Bowl', price: '$8.40', summary: 'Fresh fruit, oats, and a bright morning start.', tags: ['Breakfast', 'Fresh', 'Light'] },
    { name: 'Honey Oat Bites', price: '$5.80', summary: 'Sweet, chewy bites with a soft crunch.', tags: ['Snack', 'Oats', 'Chewy'] },
    { name: 'Roasted Nut Mix', price: '$6.10', summary: 'A balanced mix for quick energy on the go.', tags: ['Protein', 'Crunchy', 'Travel'] },
    { name: 'Tomato Basil Crackers', price: '$4.95', summary: 'Savory crackers with a clean herby finish.', tags: ['Savory', 'Crackers', 'Herb'] },
    { name: 'Coconut Protein Bars', price: '$7.25', summary: 'A sweet bar with a light tropical taste.', tags: ['Protein', 'Bar', 'Coconut'] },
    { name: 'Apple Grain Clusters', price: '$5.35', summary: 'Crispy clusters with a gentle apple note.', tags: ['Grain', 'Apple', 'Crunch'] },
    { name: 'Spiced Trail Snack', price: '$6.70', summary: 'Small bites with a warm and lively flavor.', tags: ['Trail', 'Spiced', 'Snack'] },
    { name: 'Berry Seed Crunch', price: '$5.95', summary: 'A fruit-forward mix with a seeded finish.', tags: ['Berry', 'Seed', 'Crunch'] },
    { name: 'Herb Crisp Rounds', price: '$4.50', summary: 'Thin crisp rounds that feel light and snackable.', tags: ['Herb', 'Crisp', 'Light'] },
    { name: 'Maple Grain Squares', price: '$6.35', summary: 'Soft squares with a subtle maple sweetness.', tags: ['Maple', 'Grain', 'Sweet'] }
  ]),
  dresses: makeItems('dresses', [
    { name: 'Sunset Midi Dress', price: '$34.00', summary: 'An easy midi with a clean, everyday shape.', tags: ['Midi', 'Everyday', 'Flowy'] },
    { name: 'Soft Linen Wrap Dress', price: '$39.50', summary: 'A wrap style with a relaxed, airy fit.', tags: ['Linen', 'Wrap', 'Breathable'] },
    { name: 'Classic Shirt Dress', price: '$42.00', summary: 'Sharp lines with a polished casual look.', tags: ['Shirt dress', 'Classic', 'Smart'] },
    { name: 'Garden Pleat Dress', price: '$45.20', summary: 'Soft pleats that move nicely with each step.', tags: ['Pleated', 'Garden', 'Light'] },
    { name: 'Evening Satin Dress', price: '$58.90', summary: 'Smooth satin styling for a dressed-up moment.', tags: ['Satin', 'Evening', 'Elegant'] },
    { name: 'Everyday Cotton Dress', price: '$31.75', summary: 'Comfort-first cotton with a simple silhouette.', tags: ['Cotton', 'Casual', 'Soft'] },
    { name: 'Tiered Summer Dress', price: '$37.40', summary: 'Layered tiers with a playful summer shape.', tags: ['Tiered', 'Summer', 'Easy'] },
    { name: 'Minimal Black Dress', price: '$48.00', summary: 'A clean, minimal black dress that works anywhere.', tags: ['Minimal', 'Black', 'Versatile'] },
    { name: 'Floral Tea Dress', price: '$36.90', summary: 'A floral print with a light, classic feel.', tags: ['Floral', 'Tea dress', 'Feminine'] },
    { name: 'Belted Maxi Dress', price: '$52.25', summary: 'A long flowy cut with a waist-defining belt.', tags: ['Maxi', 'Belted', 'Flow'] }
  ]),
  cosmetics: makeItems('cosmetics', [
    { name: 'Dew Glow Moisturizer', price: '$22.40', summary: 'A light cream that keeps skin looking fresh.', tags: ['Skincare', 'Glow', 'Daily'] },
    { name: 'Velvet Matte Lip Tint', price: '$18.95', summary: 'Soft color with a smooth matte finish.', tags: ['Lip tint', 'Matte', 'Color'] },
    { name: 'Calm Skin Serum', price: '$25.00', summary: 'A simple serum for a balanced routine.', tags: ['Serum', 'Calm', 'Hydrating'] },
    { name: 'Rose Blush Palette', price: '$21.60', summary: 'Warm pink shades with an easy blend.', tags: ['Blush', 'Rose', 'Blendable'] },
    { name: 'Soft Brow Pencil', price: '$14.20', summary: 'A precise pencil for natural-looking brows.', tags: ['Brows', 'Precision', 'Natural'] },
    { name: 'Radiance Face Mist', price: '$17.80', summary: 'A quick mist for a fresh finish anytime.', tags: ['Mist', 'Radiance', 'Refresh'] },
    { name: 'Hydro Cleanser', price: '$19.45', summary: 'A gentle cleanser that feels clean but not harsh.', tags: ['Cleanser', 'Hydro', 'Gentle'] },
    { name: 'Silk Primer Base', price: '$23.10', summary: 'A smooth primer that helps makeup sit neatly.', tags: ['Primer', 'Silk', 'Base'] },
    { name: 'Volume Mascara', price: '$16.75', summary: 'A lifted mascara for a fuller eye look.', tags: ['Mascara', 'Volume', 'Lift'] },
    { name: 'Nourish Lip Balm', price: '$11.90', summary: 'A small balm for everyday comfort and shine.', tags: ['Lip balm', 'Nourish', 'Everyday'] }
  ]),
  bakery: makeItems('bakery', [
    { name: 'Butter Croissant Pack', price: '$9.25', summary: 'Flaky layers with a warm buttery finish.', tags: ['Croissant', 'Flaky', 'Fresh'] },
    { name: 'Almond Biscotti', price: '$8.10', summary: 'Crunchy biscotti with a simple nutty taste.', tags: ['Biscotti', 'Almond', 'Crunch'] },
    { name: 'Cinnamon Swirl Roll', price: '$7.85', summary: 'Soft roll with a sweet cinnamon spiral.', tags: ['Cinnamon', 'Roll', 'Sweet'] },
    { name: 'Seeded Cracker Box', price: '$6.30', summary: 'A crisp box of seeded savory bites.', tags: ['Crackers', 'Seeded', 'Savory'] },
    { name: 'Berry Danish', price: '$8.75', summary: 'A fruit-filled pastry with a glossy top.', tags: ['Danish', 'Berry', 'Pastry'] },
    { name: 'Chocolate Chip Cookie Box', price: '$9.40', summary: 'Classic cookies with a rich sweet crumb.', tags: ['Cookie', 'Chocolate', 'Classic'] },
    { name: 'Oatmeal Raisin Bites', price: '$7.20', summary: 'Soft chewy bites with a warm home-baked feel.', tags: ['Oatmeal', 'Raisin', 'Chewy'] },
    { name: 'Sourdough Loaf', price: '$10.50', summary: 'A rustic loaf with a crisp outer shell.', tags: ['Bread', 'Loaf', 'Rustic'] },
    { name: 'Jam Tart Trio', price: '$8.95', summary: 'Three small tarts with a sweet jam center.', tags: ['Tart', 'Jam', 'Trio'] },
    { name: 'Maple Scone', price: '$6.85', summary: 'A soft scone with a subtle maple glaze.', tags: ['Scone', 'Maple', 'Soft'] }
  ]),
  shoes: makeItems('shoes', [
    { name: 'Everyday Runner', price: '$54.00', summary: 'Lightweight comfort for walking through the day.', tags: ['Runner', 'Comfort', 'Light'] },
    { name: 'Cloud Walk Sneaker', price: '$59.50', summary: 'A cushioned sneaker with a soft landing feel.', tags: ['Sneaker', 'Cushion', 'Walk'] },
    { name: 'City Loafer', price: '$48.25', summary: 'A polished loafer for clean, simple outfits.', tags: ['Loafer', 'City', 'Smart'] },
    { name: 'Weekend Slip-On', price: '$42.80', summary: 'Easy slip-on style for relaxed days.', tags: ['Slip-on', 'Weekend', 'Easy'] },
    { name: 'Desert Boot', price: '$67.40', summary: 'A sturdy boot with a clean modern shape.', tags: ['Boot', 'Durable', 'Classic'] },
    { name: 'Studio Flat', price: '$39.95', summary: 'A neat flat shoe with a clean profile.', tags: ['Flat', 'Studio', 'Simple'] },
    { name: 'Trail Grip Trainer', price: '$62.10', summary: 'A trainer made for traction and steady steps.', tags: ['Trainer', 'Grip', 'Active'] },
    { name: 'Court Classic Shoe', price: '$58.30', summary: 'A retro-inspired low profile court shoe.', tags: ['Court', 'Retro', 'Classic'] },
    { name: 'Woven Sandal', price: '$44.15', summary: 'Breathable straps with a soft summer feel.', tags: ['Sandal', 'Woven', 'Summer'] },
    { name: 'Heel Edge Pump', price: '$71.00', summary: 'A sharp pump that adds a polished finish.', tags: ['Pump', 'Heel', 'Dressy'] }
  ]),
  snack: makeItems('snack', [
    { name: 'Sea Salt Crackers', price: '$4.20', summary: 'Simple crisp crackers with a clean salty edge.', tags: ['Crackers', 'Sea salt', 'Crisp'] },
    { name: 'Cheese Crisps', price: '$4.60', summary: 'Light cheese bites with a strong savory hit.', tags: ['Cheese', 'Crisps', 'Savory'] },
    { name: 'Chili Rice Crackers', price: '$4.80', summary: 'Crunchy crackers with a spicy finish.', tags: ['Chili', 'Rice', 'Crunch'] },
    { name: 'Multigrain Crisps', price: '$5.10', summary: 'A grain-heavy snack with a firm bite.', tags: ['Multigrain', 'Healthy', 'Crisp'] },
    { name: 'Nut & Fruit Munch', price: '$5.45', summary: 'Sweet and salty pieces for easy snacking.', tags: ['Nut', 'Fruit', 'Munch'] },
    { name: 'Spicy Corn Puffs', price: '$4.55', summary: 'Light puffs with a warm spicy finish.', tags: ['Corn', 'Spicy', 'Puffs'] },
    { name: 'Sesame Sticks', price: '$4.15', summary: 'Thin sesame sticks with a toasted flavor.', tags: ['Sesame', 'Sticks', 'Toasted'] },
    { name: 'Wholegrain Twists', price: '$4.95', summary: 'Twisted bites with a hearty wholegrain feel.', tags: ['Wholegrain', 'Twists', 'Hearty'] },
    { name: 'Popcorn Mix', price: '$4.75', summary: 'A light snack mix with a playful crunch.', tags: ['Popcorn', 'Mix', 'Crunch'] },
    { name: 'Crunch Bites', price: '$5.25', summary: 'Small crunchy pieces for a quick nibble.', tags: ['Bites', 'Crunch', 'Quick'] }
  ])
};

let els = {};
let currentCategory = '';
let allProducts = [];
let filteredProducts = [];
let activeProduct = null;

function loadDiscoveryState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STATE_KEY));
    if (parsed && typeof parsed === 'object') {
      return {
        searches: parsed.searches || { food: 0, dresses: 0, cosmetics: 0, bakery: 0, shoes: 0, snack: 0 },
        visits: parsed.visits || { food: 0, dresses: 0, cosmetics: 0, bakery: 0, shoes: 0, snack: 0 },
        recentCategories: Array.isArray(parsed.recentCategories) ? parsed.recentCategories : [],
        recentQueries: Array.isArray(parsed.recentQueries) ? parsed.recentQueries : [],
        lastViewedItems: Array.isArray(parsed.lastViewedItems) ? parsed.lastViewedItems : []
      };
    }
  } catch (_) {
    // ignore storage parse issues
  }

  return {
    searches: { food: 0, dresses: 0, cosmetics: 0, bakery: 0, shoes: 0, snack: 0 },
    visits: { food: 0, dresses: 0, cosmetics: 0, bakery: 0, shoes: 0, snack: 0 },
    recentCategories: [],
    recentQueries: [],
    lastViewedItems: []
  };
}

function saveDiscoveryState(state) {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

function ensureSessionId() {
  let sessionId = localStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = `guest-${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

async function postRuntimeEvent(eventType, payload = {}) {
  try {
    await fetch(`${API_BASE}/runtime-event`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: ensureSessionId(),
        event_type: eventType,
        ...payload
      })
    });
  } catch (_) {
    // best effort only
  }
}

function recordDiscoveryEvent(eventType, payload = {}) {
  const state = loadDiscoveryState();
  const categoryKey = payload.category || currentCategory || '';

  if (categoryKey && state.searches[categoryKey] !== undefined) {
    if (eventType === 'search_commit') {
      state.searches[categoryKey] += 1;
    }

    if (eventType === 'category_view' || eventType === 'item_view') {
      state.visits[categoryKey] += 1;
    }

    if (!state.recentCategories.includes(categoryKey) || eventType !== 'search_commit') {
      state.recentCategories = [categoryKey, ...state.recentCategories.filter((entry) => entry !== categoryKey)].slice(0, 8);
    }
  }

  if (payload.query && eventType === 'search_commit') {
    state.recentQueries = [
      { query: payload.query, category: categoryKey, time: Date.now() },
      ...state.recentQueries
    ].slice(0, 8);
  }

  if (eventType === 'item_view' && payload.product_id) {
    state.lastViewedItems = [
      { product_id: payload.product_id, category: categoryKey, name: payload.query || payload.product_name || '', time: Date.now() },
      ...state.lastViewedItems.filter((item) => item.product_id !== payload.product_id)
    ].slice(0, 8);
  }

  saveDiscoveryState(state);
  postRuntimeEvent(eventType, payload);
}

function init() {
  els = {
    pageSubtitle: document.getElementById('pageSubtitle'),
    searchShell: document.getElementById('searchShell'),
    categoryTitle: document.getElementById('categoryTitle'),
    categoryDescription: document.getElementById('categoryDescription'),
    categoryNote: document.getElementById('categoryNote'),
    itemCount: document.getElementById('itemCount'),
    browserTitle: document.getElementById('browserTitle'),
    browserDescription: document.getElementById('browserDescription'),
    browserCount: document.getElementById('browserCount'),
    categoryLinkGrid: document.getElementById('categoryLinkGrid'),
    categoryBrowser: document.getElementById('categoryBrowser'),
    categoryGrid: document.getElementById('categoryGrid'),
    categoryEmpty: document.getElementById('categoryEmpty'),
    searchInput: document.getElementById('searchInput'),
    searchButton: document.getElementById('searchButton'),
    clearButton: document.getElementById('clearButton'),
    backButton: document.getElementById('backButton'),
    productModal: document.getElementById('productModal'),
    closeDetailButton: document.getElementById('closeDetailButton'),
    detailImage: document.getElementById('detailImage'),
    detailCategoryBadge: document.getElementById('detailCategoryBadge'),
    detailTitle: document.getElementById('detailTitle'),
    detailSummary: document.getElementById('detailSummary'),
    detailPrice: document.getElementById('detailPrice'),
    detailTags: document.getElementById('detailTags'),
    detailFeatures: document.getElementById('detailFeatures')
  };

  const params = new URLSearchParams(window.location.search);
  currentCategory = (params.get('category') || '').toLowerCase().trim();

  renderCategoryLinks();
  bindEvents();
  syncView();

  if (currentCategory) {
    recordDiscoveryEvent('category_view', {
      category: currentCategory,
      category_label: getCategoryInfo(currentCategory).label
    });
  }
}

function bindEvents() {
  els.searchButton.addEventListener('click', handleSearch);
  els.clearButton.addEventListener('click', clearSearch);
  els.searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  });

  els.backButton.addEventListener('click', () => {
    if (currentCategory) {
      // navigate back to the category chooser using a relative path
      window.location.href = 'category.html';
      return;
    }

    // navigate back to the main index using a relative path
    window.location.href = 'index.html';
  });

  els.closeDetailButton.addEventListener('click', closeModal);
  els.productModal.addEventListener('click', (event) => {
    if (event.target && event.target.matches('[data-close-modal]')) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

function syncView() {
  const categoryInfo = getCategoryInfo(currentCategory);
  const isCategoryView = Boolean(currentCategory);
  const hasKnownCategory = Boolean(categoryCatalog[currentCategory]);

  els.searchShell.hidden = !isCategoryView;
  els.categoryBrowser.hidden = !isCategoryView;

  if (!isCategoryView) {
    document.title = 'Category - MyShop AI';
    els.pageSubtitle.textContent = 'Choose a category to browse';
    els.categoryTitle.textContent = 'Category';
    els.categoryDescription.textContent = 'Pick a category below to open its items page.';
    els.categoryNote.textContent = 'Select food, dresses, cosmetics, bakery, shoes, or snacks to open a page with 10 curated items and a quick detail view.';
    els.itemCount.textContent = `${categoryLinks.length} categories`;
    els.categoryBrowser.hidden = true;
    els.categoryGrid.innerHTML = '';
    els.categoryEmpty.hidden = true;
    allProducts = [];
    filteredProducts = [];
    return;
  }

  document.title = `${categoryInfo.label} - MyShop AI`;
  els.pageSubtitle.textContent = `Browsing ${categoryInfo.label}`;
  els.categoryTitle.textContent = categoryInfo.label;
  els.categoryDescription.textContent = categoryInfo.description;
  els.categoryNote.textContent = `Open any ${categoryInfo.label.toLowerCase()} item to see a short detail card.`;
  els.browserTitle.textContent = `${categoryInfo.label} items`;
  els.browserDescription.textContent = 'Tap any item to see a short detail panel.';
  els.searchInput.placeholder = `Search ${categoryInfo.label.toLowerCase()} items...`;

  allProducts = loadProductsForCategory(currentCategory, hasKnownCategory);
  filteredProducts = [...allProducts];
  els.itemCount.textContent = `${allProducts.length} items`;
  renderProducts();
}

function renderCategoryLinks() {
  els.categoryLinkGrid.innerHTML = '';

  categoryLinks.forEach((category) => {
    const accent = categoryColors[category.key] || categoryColors.other;
    const card = document.createElement('a');
    card.className = 'category-link-card';
    card.href = `category.html?category=${encodeURIComponent(category.key)}`;
    if (currentCategory === category.key) {
      card.classList.add('active');
    }

    card.innerHTML = `
      <span class="category-link-label" style="color:${accent}; border-color:${accent};">${category.label}</span>
      <strong>${category.label}</strong>
      <p>${category.description}</p>
      <span class="category-link-action">Open page →</span>
    `;

    els.categoryLinkGrid.appendChild(card);
  });
}

function getSessionId() {
  let sessionId = localStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = `guest-${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

function getCategoryInfo(categoryKey) {
  if (!categoryKey) {
    return {
      label: 'Category',
      description: 'Pick a category below to open its items page.',
      color: categoryColors.other
    };
  }

  const label = categoryLabels[categoryKey] || titleCase(categoryKey);
  const descriptionMap = {
    food: 'Fresh snack and grocery style items with quick previews.',
    dresses: 'Simple, elegant dress picks for everyday and event wear.',
    cosmetics: 'Skincare and beauty picks with clean, simple detail cards.',
    bakery: 'Sweet and baked treats with warm, cozy product photos.',
    shoes: 'Sneakers, flats, and boots with a simple detail view.',
    snack: 'Crunchy and savory snack items with fast browsing.'
  };

  return {
    label,
    description: descriptionMap[categoryKey] || `Browse curated items for ${label.toLowerCase()}.`,
    color: categoryColors[categoryKey] || categoryColors.other
  };
}

function titleCase(value) {
  return String(value)
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function makeItems(categoryKey, items) {
  return items.map((item, index) => ({
    id: `${categoryKey}-${index + 1}`,
    category: categoryKey,
    categoryLabel: categoryLabels[categoryKey] || titleCase(categoryKey),
    image: categoryImages[categoryKey][index % categoryImages[categoryKey].length],
    ...item
  }));
}

function loadProductsForCategory(categoryKey, hasKnownCategory) {
  if (hasKnownCategory) {
    return [...categoryCatalog[categoryKey]];
  }

  return Array.from({ length: 10 }, (_, index) => ({
    id: `${categoryKey}-${index + 1}`,
    category: categoryKey,
    categoryLabel: titleCase(categoryKey),
    name: `${titleCase(categoryKey)} Item ${index + 1}`,
    summary: 'A simple preview card with a short detail summary.',
    price: `$${(8 + index).toFixed(2)}`,
    image: categoryImages.other[0],
    tags: [categoryKey, 'curated', 'preview']
  }));
}

function handleSearch() {
  const query = normalize(els.searchInput.value);
  if (!query) {
    filteredProducts = [...allProducts];
    renderProducts();
    return;
  }

  filteredProducts = allProducts.filter((product) => {
    const blob = [product.name, product.summary, product.price, ...(product.tags || []), product.categoryLabel]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return blob.includes(query);
  });

  recordDiscoveryEvent('search_commit', {
    category: currentCategory,
    query,
    result_count: filteredProducts.length
  });

  renderProducts();
}

function clearSearch() {
  els.searchInput.value = '';
  filteredProducts = [...allProducts];
  renderProducts();
}

function normalize(value) {
  return String(value || '').toLowerCase().trim();
}

function renderProducts() {
  els.categoryGrid.innerHTML = '';

  if (!filteredProducts.length) {
    els.categoryEmpty.hidden = false;
    els.browserCount.textContent = '0 items';
    return;
  }

  els.categoryEmpty.hidden = true;
  els.browserCount.textContent = `${filteredProducts.length} item${filteredProducts.length === 1 ? '' : 's'}`;

  filteredProducts.forEach((product) => {
    els.categoryGrid.appendChild(createProductCard(product));
  });
}

function createProductCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card category-product-card';

  const accent = categoryColors[product.category] || categoryColors.other;
  const categoryLabel = product.categoryLabel || titleCase(product.category);

  card.innerHTML = `
    <div class="card-media">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <span class="card-badge" style="background-color:${accent}; color:#fff;">${categoryLabel}</span>
    </div>
    <div class="card-body">
      <div class="card-topline">
        <h3>${product.name}</h3>
        <span class="score-pill" style="background-color:${accent}; color:#fff;">${product.price}</span>
      </div>
      <p class="card-meta">${product.summary}</p>
      <button class="card-action" type="button" style="border-color:${accent}; color:${accent};">View Details</button>
    </div>
  `;

  const openDetail = () => openModal(product);
  card.addEventListener('click', openDetail);
  card.querySelector('.card-action').addEventListener('click', (event) => {
    event.stopPropagation();
    openDetail();
  });

  return card;
}

function openModal(product) {
  activeProduct = product;
  const accent = categoryColors[product.category] || categoryColors.other;
  const categoryLabel = product.categoryLabel || titleCase(product.category);

  recordDiscoveryEvent('item_view', {
    category: product.category,
    query: product.name,
    product_id: product.id,
    product_name: product.name
  });

  els.detailImage.src = product.image;
  els.detailImage.alt = product.name;
  els.detailCategoryBadge.textContent = categoryLabel;
  els.detailCategoryBadge.style.borderColor = accent;
  els.detailCategoryBadge.style.color = accent;
  els.detailTitle.textContent = product.name;
  els.detailSummary.textContent = product.summary;
  els.detailPrice.textContent = product.price;

  els.detailTags.innerHTML = '';
  (product.tags || []).forEach((tag) => {
    const tagChip = document.createElement('span');
    tagChip.textContent = tag;
    els.detailTags.appendChild(tagChip);
  });

  els.detailFeatures.innerHTML = '';
  const detailLines = [
    `${categoryLabel} collection`,
    product.summary,
    `Price: ${product.price}`
  ];

  detailLines.forEach((line) => {
    const li = document.createElement('li');
    li.textContent = line;
    els.detailFeatures.appendChild(li);
  });

  els.productModal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (els.productModal.hidden) {
    return;
  }

  els.productModal.hidden = true;
  document.body.style.overflow = '';
  activeProduct = null;
}

function renderProductDetailPlaceholder() {
  if (activeProduct) {
    openModal(activeProduct);
  }
}

document.addEventListener('DOMContentLoaded', init);
