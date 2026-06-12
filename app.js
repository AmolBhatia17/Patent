// Patents Portal Controller

// App State
let activeFilter = 'All';
let searchQuery = '';

// Dom Elements
const patentsGrid = document.getElementById('patents-grid');
const searchInput = document.getElementById('search-input');
const filterContainer = document.getElementById('filter-container');
const themeLightBtn = document.getElementById('theme-light-btn');
const themeDarkBtn = document.getElementById('theme-dark-btn');



// Modal Elements
const modalOverlay = document.getElementById('video-modal');
const modalCloseBtn = document.getElementById('modal-close');
const videoIframe = document.getElementById('video-player-iframe');
const modalTitle = document.getElementById('modal-title');

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeLightBtn.classList.add('active');
    themeDarkBtn.classList.remove('active');
  } else {
    document.body.classList.remove('light-theme');
    themeDarkBtn.classList.add('active');
    themeLightBtn.classList.remove('active');
  }
}

themeLightBtn.addEventListener('click', () => {
  document.body.classList.add('light-theme');
  localStorage.setItem('theme', 'light');
  themeLightBtn.classList.add('active');
  themeDarkBtn.classList.remove('active');
});

themeDarkBtn.addEventListener('click', () => {
  document.body.classList.remove('light-theme');
  localStorage.setItem('theme', 'dark');
  themeDarkBtn.classList.add('active');
  themeLightBtn.classList.remove('active');
});

// Parse Google Drive Links to Embed Formats
function getEmbedUrl(url) {
  if (!url) return '';
  
  // If it's already an embed link, return it
  if (url.includes('/preview')) return url;
  
  // Match standard /file/d/FILE_ID/view format
  const fileDMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileDMatch && fileDMatch[1]) {
    return `https://drive.google.com/file/d/${fileDMatch[1]}/preview`;
  }
  
  // Match query param format like ?id=FILE_ID
  const idParamMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idParamMatch && idParamMatch[1]) {
    return `https://drive.google.com/file/d/${idParamMatch[1]}/preview`;
  }
  
  return url;
}



// Render dynamic filter buttons
function renderFilters() {
  // Extract unique high-level category families
  const categories = ['All', ...new Set(patentsData.map(p => p.category))];
  
  filterContainer.innerHTML = '';
  
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${cat === activeFilter ? 'active' : ''}`;
    btn.textContent = cat;
    btn.setAttribute('data-category', cat);
    btn.addEventListener('click', () => {
      activeFilter = cat;
      // Update UI active states
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPatents();
    });
    filterContainer.appendChild(btn);
  });
}

// Render patent cards matching filters and search query
function renderPatents() {
  patentsGrid.innerHTML = '';
  
  const filtered = patentsData.filter(patent => {
    // Category check
    const matchesCategory = activeFilter === 'All' || patent.category === activeFilter;
    
    // Search query check
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      patent.title.toLowerCase().includes(query) ||
      patent.abstract.toLowerCase().includes(query) ||
      patent.category.toLowerCase().includes(query) ||
      patent.features.some(f => f.toLowerCase().includes(query)) ||
      patent.inventors.some(inv => inv.toLowerCase().includes(query));
      
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    patentsGrid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3>No patents found</h3>
        <p>Try adjusting your keywords or selecting another category.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(patent => {
    const card = document.createElement('div');
    card.className = 'patent-card';
    card.setAttribute('data-id', patent.id);
    
    card.innerHTML = `
      <h3 class="patent-title" title="${patent.title}">${patent.title}</h3>
      <button class="card-action-btn" onclick="openVideoModal('${patent.id}')">
        <svg class="play-icon-svg" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
        Watch Video
      </button>
    `;
    
    patentsGrid.appendChild(card);
  });
}

// Modal Interaction

window.openVideoModal = function(id) {
  const patent = patentsData.find(p => p.id === id);
  if (!patent) return;

  modalTitle.textContent = patent.title;

  // Standardize Google Drive Url
  const embedUrl = getEmbedUrl(patent.videoUrl);
  videoIframe.src = embedUrl;

  // Show Modal
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Lock background scrolling
};

function closeVideoModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = ''; // Unlock scrolling
  // Clear source to stop video playback immediately
  videoIframe.src = '';
}

modalCloseBtn.addEventListener('click', closeVideoModal);

// Close modal on backdrop click
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeVideoModal();
  }
});

// Close modal on Escape Key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeVideoModal();
  }
});



// Search input handler with debounce representation
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderPatents();
});

// App Initialization
function init() {
  initTheme();
  renderFilters();
  renderPatents();
}

// Fire Init
init();
