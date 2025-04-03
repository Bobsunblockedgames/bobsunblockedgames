// Game data
const games = {
    action: [
        {
            title: 'Boxing',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23ff4444"/><text x="50" y="50" font-size="40" text-anchor="middle" fill="white">Boxing</text></svg>',
            url: 'bob-boxing.html'
        },
        {
            title: 'Stickman',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%234444ff"/><text x="50" y="50" font-size="40" text-anchor="middle" fill="white">Stickman</text></svg>',
            url: 'bob-stickman.html'
        },
        {
            title: 'Tetris',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%2344ff44"/><text x="50" y="50" font-size="40" text-anchor="middle" fill="white">Tetris</text></svg>',
            url: 'bob-tetris.html'
        },
        {
            title: 'Snake',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23ff44ff"/><text x="50" y="50" font-size="40" text-anchor="middle" fill="white">Snake</text></svg>',
            url: 'bob-snake.html'
        },
        {
            title: '1v1',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%2344ffff"/><text x="50" y="50" font-size="40" text-anchor="middle" fill="white">1v1</text></svg>',
            url: 'bob-1v1.html'
        },
        {
            title: 'Clicker',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23ffff44"/><text x="50" y="50" font-size="40" text-anchor="middle" fill="white">Clicker</text></svg>',
            url: 'bob-clicker.html'
        }
    ],
    racing: [
        {
            title: 'Racing',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23ff8844"/><text x="50" y="50" font-size="40" text-anchor="middle" fill="white">Racing</text></svg>',
            url: 'bob-racing.html'
        },
        {
            title: 'Car',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%234488ff"/><text x="50" y="50" font-size="40" text-anchor="middle" fill="white">Car</text></svg>',
            url: 'bob-car.html'
        },
        {
            title: 'Duck Life',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23ffcc44"/><text x="50" y="50" font-size="40" text-anchor="middle" fill="white">Duck Life</text></svg>',
            url: 'play/ducklife1/index.html'
        },
        {
            title: 'Duck Life 2',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23ffcc44"/><text x="50" y="50" font-size="35" text-anchor="middle" fill="white">Duck Life 2</text></svg>',
            url: 'play/ducklife2/index.html'
        },
        {
            title: 'Duck Life 3',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23ffcc44"/><text x="50" y="50" font-size="35" text-anchor="middle" fill="white">Duck Life 3</text></svg>',
            url: 'play/ducklife3/index.html'
        },
        {
            title: 'Duck Life 4',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23ffcc44"/><text x="50" y="50" font-size="35" text-anchor="middle" fill="white">Duck Life 4</text></svg>',
            url: 'play/ducklife4/index.html'
        }
    ],
    puzzle: [
        {
            title: 'Puzzle',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%2344ff88"/><text x="50" y="50" font-size="40" text-anchor="middle" fill="white">Puzzle</text></svg>',
            url: 'bob-puzzle.html'
        },
        {
            title: 'Memory',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23ff4488"/><text x="50" y="50" font-size="40" text-anchor="middle" fill="white">Memory</text></svg>',
            url: 'bob-memory.html'
        },
        {
            title: 'BitLife',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23448888"/><text x="50" y="50" font-size="40" text-anchor="middle" fill="white">BitLife</text></svg>',
            url: 'play/bitlife/index.html'
        }
    ],
    arcade: [
        {
            title: 'Arcade',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%238844ff"/><text x="50" y="50" font-size="40" text-anchor="middle" fill="white">Arcade</text></svg>',
            url: 'bob-arcade.html'
        },
        {
            title: 'Platform',
            image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23ff8844"/><text x="50" y="50" font-size="40" text-anchor="middle" fill="white">Platform</text></svg>',
            url: 'bob-platform.html'
        }
    ]
};

// Get random games for featured section
const featuredGames = [];
Object.values(games).forEach(category => {
    const randomGame = category[Math.floor(Math.random() * category.length)];
    featuredGames.push(randomGame);
});

// Populate game grid
function populateGameGrid(container, games) {
    container.innerHTML = '';
    games.forEach(game => {
        const card = createGameCard(game);
        container.appendChild(card);
    });
}

// Create game card
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    const img = document.createElement('img');
    img.src = game.image;
    img.alt = game.title;
    
    const title = document.createElement('h3');
    title.textContent = game.title;
    
    const playButton = document.createElement('a');
    playButton.href = game.url;
    playButton.className = 'play-button';
    playButton.textContent = 'Play Now';
    
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(playButton);
    
    return card;
}

// Handle category selection
function handleCategorySelect(category) {
    const gameGrid = document.querySelector('.game-grid');
    const games = games[category];
    populateGameGrid(gameGrid, games);
    
    // Update active category link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.textContent.toLowerCase() === category) {
            link.classList.add('active');
        }
    });
}

// Handle search
function handleSearch(query) {
    const allGames = Object.values(games).flat();
    const filteredGames = allGames.filter(game => 
        game.title.toLowerCase().includes(query.toLowerCase())
    );
    
    const gameGrid = document.querySelector('.game-grid');
    populateGameGrid(gameGrid, filteredGames);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Populate featured games
    const featuredGrid = document.querySelector('.featured-grid');
    populateGameGrid(featuredGrid, featuredGames);
    
    // Populate all games
    const gameGrid = document.querySelector('.game-grid');
    const allGames = Object.values(games).flat();
    populateGameGrid(gameGrid, allGames);
    
    // Add event listeners
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.querySelector('h3').textContent.toLowerCase();
            handleCategorySelect(category);
        });
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.textContent.toLowerCase();
            handleCategorySelect(category);
        });
    });
    
    const searchInput = document.querySelector('#searchInput');
    searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });
    
    // Handle hash changes for direct category links
    window.addEventListener('hashchange', () => {
        const category = window.location.hash.slice(1) || 'all';
        if (category === 'all') {
            const allGames = Object.values(games).flat();
            populateGameGrid(document.querySelector('.game-grid'), allGames);
        } else {
            handleCategorySelect(category);
        }
    });
}); 