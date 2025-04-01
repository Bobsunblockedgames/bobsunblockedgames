// Game data
const games = {
    action: [
        {
            title: "BOB 1v1",
            image: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%230a0a1f'/%3E%3Cg%3E%3Ccircle cx='200' cy='150' r='80' fill='%2300f2ff' opacity='0.2'/%3E%3Ccircle cx='200' cy='150' r='60' fill='%2300f2ff' opacity='0.3'/%3E%3Ccircle cx='200' cy='150' r='40' fill='%2300f2ff' opacity='0.4'/%3E%3C/g%3E%3Ctext x='200' y='160' font-family='Arial' font-size='48' fill='%23ffffff' text-anchor='middle'%3E1v1%3C/text%3E%3C/svg%3E",
            url: "bob-1v1.html"
        },
        {
            title: "BOB Stickman Hook",
            image: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%230a0a1f'/%3E%3Cg%3E%3Cline x1='100' y1='150' x2='300' y2='150' stroke='%23ff00ff' stroke-width='4'/%3E%3Ccircle cx='100' cy='150' r='20' fill='%23ff00ff'/%3E%3Ccircle cx='300' cy='150' r='20' fill='%23ff00ff'/%3E%3C/g%3E%3Ctext x='200' y='160' font-family='Arial' font-size='48' fill='%23ffffff' text-anchor='middle'%3EStickman Hook%3C/text%3E%3C/svg%3E",
            url: "bob-stickman.html"
        },
        {
            title: "BOB Boxing Random",
            image: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%230a0a1f'/%3E%3Cg%3E%3Ccircle cx='150' cy='150' r='40' fill='%231F51FF'/%3E%3Ccircle cx='250' cy='150' r='40' fill='%231F51FF'/%3E%3Cline x1='150' y1='150' x2='250' y2='150' stroke='%231F51FF' stroke-width='4'/%3E%3C/g%3E%3Ctext x='200' y='160' font-family='Arial' font-size='48' fill='%23ffffff' text-anchor='middle'%3EBoxing%3C/text%3E%3C/svg%3E",
            url: "bob-boxing.html"
        }
    ],
    racing: [
        {
            title: "BOB Racing",
            image: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%230a0a1f'/%3E%3Cg%3E%3Cpath d='M100,200 L300,200 L250,150 L150,150 Z' fill='%2300f2ff'/%3E%3Ccircle cx='150' cy='200' r='20' fill='%2300f2ff'/%3E%3Ccircle cx='250' cy='200' r='20' fill='%2300f2ff'/%3E%3C/g%3E%3Ctext x='200' y='160' font-family='Arial' font-size='48' fill='%23ffffff' text-anchor='middle'%3ERacing%3C/text%3E%3C/svg%3E",
            url: "bob-racing.html"
        },
        {
            title: "BOB Drift",
            image: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%230a0a1f'/%3E%3Cg%3E%3Cpath d='M100,200 Q200,100 300,200' stroke='%23ff00ff' stroke-width='4' fill='none'/%3E%3Ccircle cx='100' cy='200' r='20' fill='%23ff00ff'/%3E%3Ccircle cx='300' cy='200' r='20' fill='%23ff00ff'/%3E%3C/g%3E%3Ctext x='200' y='160' font-family='Arial' font-size='48' fill='%23ffffff' text-anchor='middle'%3EDrift%3C/text%3E%3C/svg%3E",
            url: "bob-drift.html"
        }
    ],
    puzzle: [
        {
            title: "BOB Puzzle",
            image: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%230a0a1f'/%3E%3Cg%3E%3Crect x='150' y='100' width='100' height='100' fill='%2300f2ff'/%3E%3Crect x='150' y='200' width='100' height='100' fill='%231F51FF'/%3E%3Crect x='250' y='100' width='100' height='100' fill='%23ff00ff'/%3E%3Crect x='250' y='200' width='100' height='100' fill='%2300f2ff'/%3E%3C/g%3E%3Ctext x='200' y='160' font-family='Arial' font-size='48' fill='%23ffffff' text-anchor='middle'%3EPuzzle%3C/text%3E%3C/svg%3E",
            url: "bob-puzzle.html"
        },
        {
            title: "BOB Tetris",
            image: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%230a0a1f'/%3E%3Cg%3E%3Crect x='150' y='100' width='40' height='40' fill='%2300f2ff'/%3E%3Crect x='190' y='100' width='40' height='40' fill='%231F51FF'/%3E%3Crect x='230' y='100' width='40' height='40' fill='%23ff00ff'/%3E%3Crect x='150' y='140' width='40' height='40' fill='%23ff00ff'/%3E%3Crect x='190' y='140' width='40' height='40' fill='%2300f2ff'/%3E%3Crect x='230' y='140' width='40' height='40' fill='%231F51FF'/%3E%3C/g%3E%3Ctext x='200' y='160' font-family='Arial' font-size='48' fill='%23ffffff' text-anchor='middle'%3ETetris%3C/text%3E%3C/svg%3E",
            url: "bob-tetris.html"
        }
    ],
    arcade: [
        {
            title: "BOB Snake",
            image: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%230a0a1f'/%3E%3Cg%3E%3Ccircle cx='200' cy='150' r='20' fill='%2300f2ff'/%3E%3Ccircle cx='180' cy='150' r='20' fill='%2300f2ff'/%3E%3Ccircle cx='160' cy='150' r='20' fill='%2300f2ff'/%3E%3Ccircle cx='140' cy='150' r='20' fill='%2300f2ff'/%3E%3C/g%3E%3Ctext x='200' y='160' font-family='Arial' font-size='48' fill='%23ffffff' text-anchor='middle'%3ESnake%3C/text%3E%3C/svg%3E",
            url: "bob-snake.html"
        },
        {
            title: "BOB Pacman",
            image: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%230a0a1f'/%3E%3Cg%3E%3Cpath d='M200,150 L250,100 A50,50 0 1,1 250,200 Z' fill='%23ff00ff'/%3E%3Ccircle cx='300' cy='150' r='10' fill='%23ffffff'/%3E%3C/g%3E%3Ctext x='200' y='160' font-family='Arial' font-size='48' fill='%23ffffff' text-anchor='middle'%3EPacman%3C/text%3E%3C/svg%3E",
            url: "bob-pacman.html"
        }
    ]
};

// Featured games (random selection from all games)
const featuredGames = Object.values(games)
    .flat()
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

// DOM Elements
const gameGrid = document.querySelector('.game-grid');
const categoryCards = document.querySelectorAll('.category-card');
const searchInput = document.getElementById('searchInput');
const navLinks = document.querySelectorAll('.nav-links a');

// Populate game grid
function populateGameGrid(gamesToShow) {
    console.log('Populating game grid with:', gamesToShow);
    if (!gameGrid) {
        console.error('Game grid element not found');
        return;
    }
    gameGrid.innerHTML = '';
    gamesToShow.forEach(game => {
        const gameCard = createGameCard(game);
        gameGrid.appendChild(gameCard);
    });
}

// Create game card
function createGameCard(game) {
    console.log('Creating game card for:', game);
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <h3>${game.title}</h3>
        <a href="${game.url}" class="play-button">Play Now</a>
    `;
    return card;
}

// Handle category selection
function handleCategorySelect(category) {
    console.log('Category selected:', category);
    // Update active state in navigation
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${category}`) {
            link.classList.add('active');
        }
    });

    // Show games for selected category
    if (games[category]) {
        populateGameGrid(games[category]);
    }
}

// Handle search
function handleSearch(query) {
    console.log('Searching for:', query);
    const searchResults = Object.values(games)
        .flat()
        .filter(game => 
            game.title.toLowerCase().includes(query.toLowerCase())
        );
    populateGameGrid(searchResults);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded');
    // Show featured games initially
    populateGameGrid(featuredGames);

    // Category card clicks
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            handleCategorySelect(category);
        });
    });

    // Navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('href').substring(1);
            if (category === 'all') {
                populateGameGrid(Object.values(games).flat());
            } else {
                handleCategorySelect(category);
            }
        });
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });

    // Handle hash change for direct category links
    window.addEventListener('hashchange', () => {
        const category = window.location.hash.substring(1);
        if (category && category !== 'all') {
            handleCategorySelect(category);
        } else {
            populateGameGrid(featuredGames);
        }
    });
}); 