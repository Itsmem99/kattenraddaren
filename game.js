// Spelkonfiguration
const GRID_SIZE = 5;
const TOTAL_CATS = 3;
const TOTAL_ZOMBIES = 3;

// Platsbeskrivningar med bilder
const locations = [
    { 
        name: "Mörk skog", 
        description: "Täta träd omger dig. Det är svårt att se långt.",
        imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Öde strand", 
        description: "Sand sträcker sig åt alla håll. Havsvinden viskar.",
        imageUrl: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Övergivet hus", 
        description: "Fönstren är sönderslagna. Det knakar obehagligt.",
        imageUrl: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Grusväg", 
        description: "En smal väg som slingrar sig genom landskapet.",
        imageUrl: "https://images.unsplash.com/photo-1455757618770-0a58b0b28ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Liten damm", 
        description: "Stillastående vatten med frodigt växtliv runt.",
        imageUrl: "https://images.unsplash.com/photo-1566402797405-b9b0b43270c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Kulle med utsikt", 
        description: "Du kan se långt över omgivningarna härifrån.",
        imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Gammal bro", 
        description: "Träplankorna gnisslar under dina fötter.",
        imageUrl: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Åker", 
        description: "Öppen mark med spår av gamla odlingar.",
        imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Liten by", 
        description: "Ett par hus grupperade runt en brunn.",
        imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Kyrkogård", 
        description: "Gamla gravstenar står i skuggan av ett kapell.",
        imageUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Bilverkstad", 
        description: "Ett nedgånget garage med rostiga verktyg.",
        imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Park", 
        description: "Välskötta gräsytor och några bänkar.",
        imageUrl: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Tunnel", 
        description: "Mörk och fuktig. Ekon av dina steg följer dig.",
        imageUrl: "https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Klippa", 
        description: "Stenig mark med sprickor och mossor.",
        imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Flod", 
        description: "Vattnet rinner snabbt och är iskallt.",
        imageUrl: "https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Sjö", 
        description: "Stillastående vatten som speglar himlen.",
        imageUrl: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Skogsglänta", 
        description: "En solig öppning i den annars täta skogen.",
        imageUrl: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Gammal fabrik", 
        description: "Industribyggnad med trasiga fönster.",
        imageUrl: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Fotbollsplan", 
        description: "Nött gräs med bleknade linjemarkeringar.",
        imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Buskage", 
        description: "Tätt med buskar och små träd.",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Källare", 
        description: "Fuktig och instängd. Luktar mögel.",
        imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67b614?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Torg", 
        description: "Öppen plats med stentorg och en fontän.",
        imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Bibliotek", 
        description: "Fullt av bokhyllor och en dammig atmosfär.",
        imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Kafé", 
        description: "Tomma bord och stolar, en kaffelukt hänger kvar.",
        imageUrl: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    { 
        name: "Berg", 
        description: "Branta klippor och stenig mark.",
        imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
];

// Spelvariabler
let playerPosition = { x: 2, y: 2 };
let cats = [];
let zombies = [];
let rescuedCats = 0;
let gameOver = false;
let points = 0;
let level = 1;
let xp = 0;
let xpNeeded = 100;
let moves = 0;

// Initiera spelet
function initGame() {
    playerPosition = { x: 2, y: 2 };
    cats = [];
    zombies = [];
    rescuedCats = 0;
    gameOver = false;
    points = 0;
    level = 1;
    xp = 0;
    xpNeeded = 100;
    moves = 0;
    
    updateStatsDisplay();
    
    // Placera katter
    for (let i = 0; i < TOTAL_CATS; i++) {
        placeEntity(cats, '🐱');
    }
    
    // Placera zombier
    for (let i = 0; i < TOTAL_ZOMBIES; i++) {
        placeEntity(zombies, '🧟');
    }
    
    updateGame();
}

// Placera entiteter slumpmässigt
function placeEntity(entityArray, type) {
    let pos;
    do {
        pos = {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE),
            type: type
        };
    } while (
        (pos.x === playerPosition.x && pos.y === playerPosition.y) ||
        entityArray.some(e => e.x === pos.x && e.y === pos.y)
    );
    entityArray.push(pos);
}

// Uppdatera spelstatus
function updateGame() {
    // Uppdatera platsbeskrivning och bild
    const locationIndex = playerPosition.y * GRID_SIZE + playerPosition.x;
    const currentLocation = locations[locationIndex];
    
    document.getElementById('location-name').textContent = currentLocation.name;
    document.getElementById('location-description').textContent = currentLocation.description;
    document.getElementById('location-image').src = currentLocation.imageUrl;
    document.getElementById('location-image').alt = currentLocation.name;
    
    // Uppdatera entiteter på platsen
    updateEntities();
    
    // Uppdatera minimap
    updateMiniMap();
    
    // Kolla kollisioner
    checkCollisions();
    
    // Uppdatera status
    updateStatus();
}

// Uppdatera entiteter som visas
function updateEntities() {
    const entitiesDiv = document.getElementById('entities');
    entitiesDiv.innerHTML = '';
    
    // Visa katter på denna plats
    cats.filter(c => c.x === playerPosition.x && c.y === playerPosition.y)
        .forEach(cat => {
            const catElement = document.createElement('div');
            catElement.className = 'entity cat-icon';
            catElement.textContent = cat.type;
            entitiesDiv.appendChild(catElement);
        });
    
    // Visa zombier på denna plats
    zombies.filter(z => z.x === playerPosition.x && z.y === playerPosition.y)
        .forEach(zombie => {
            const zombieElement = document.createElement('div');
            zombieElement.className = 'entity zombie-icon';
            zombieElement.textContent = zombie.type;
            entitiesDiv.appendChild(zombieElement);
        });
}

// Uppdatera minimap
function updateMiniMap() {
    const miniMap = document.getElementById('mini-map');
    miniMap.innerHTML = '';
    
    for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
            const cell = document.createElement('div');
            cell.className = 'map-cell';
            
            // Visa spelaren
            if (x === playerPosition.x && y === playerPosition.y) {
                const player = document.createElement('div');
                player.className = 'player';
                player.textContent = 'P';
                cell.appendChild(player);
            }
            
            // Visa katter
            cats.filter(c => c.x === x && c.y === y).forEach(cat => {
                const catElement = document.createElement('div');
                catElement.className = 'cat-icon';
                catElement.textContent = cat.type;
                cell.appendChild(catElement);
                
                // Visa avstånd
                const distance = Math.abs(cat.x - playerPosition.x) + Math.abs(cat.y - playerPosition.y);
                const distanceMarker = document.createElement('div');
                distanceMarker.className = 'distance-marker';
                distanceMarker.textContent = distance > 0 ? `${distance} steg` : '';
                distanceMarker.style.top = '2px';
                distanceMarker.style.left = '2px';
                cell.appendChild(distanceMarker);
            });
            
            // Visa zombier
            zombies.filter(z => z.x === x && z.y === y).forEach(zombie => {
                const zombieElement = document.createElement('div');
                zombieElement.className = 'zombie-icon';
                zombieElement.textContent = zombie.type;
                cell.appendChild(zombieElement);
                
                // Visa avstånd
                const distance = Math.abs(zombie.x - playerPosition.x) + Math.abs(zombie.y - playerPosition.y);
                const distanceMarker = document.createElement('div');
                distanceMarker.className = 'distance-marker';
                distanceMarker.textContent = distance > 0 ? `${distance} steg` : '';
                distanceMarker.style.bottom = '2px';
                distanceMarker.style.right = '2px';
                cell.appendChild(distanceMarker);
            });
            
            miniMap.appendChild(cell);
        }
    }
}

// Kolla kollisioner
function checkCollisions() {
    // Kolla om spelaren har hittat en katt
    const catIndex = cats.findIndex(c => c.x === playerPosition.x && c.y === playerPosition.y);
    if (catIndex !== -1) {
        rescuedCats++;
        cats.splice(catIndex, 1);
        
        // Ge poäng och XP för att rädda en katt
        addPoints(50);
        addXP(30);
        
        document.getElementById('status').innerHTML += 
            `<p class="cat-icon">Du räddade en katt! +50 poäng och +30 XP 🎉</p>`;
    }
    
    // Kolla om en zombie har tagit spelaren
    const zombieHere = zombies.some(z => z.x === playerPosition.x && z.y === playerPosition.y);
    if (zombieHere) {
        gameOver = true;
        // Straffpoäng när zombien tar dig
        addPoints(-20);
        document.getElementById('status').innerHTML += 
            `<p class="zombie-icon">En zombie tog dig! -20 poäng. Spelet är över. 😵</p>`;
        disableControls();
    }
    
    // Flytta zombier
    if (!gameOver) {
        moveZombies();
    }
    
    // Kolla om spelaren vunnit
    if (cats.length === 0) {
        gameOver = true;
        // Bonuspoäng för att rädda alla katter
        addPoints(100);
        addXP(50);
        document.getElementById('status').innerHTML += 
            `<p class="cat-icon">Grattis! Du räddade alla katter! +100 poäng och +50 XP 🎊</p>`;
        disableControls();
    }
}

// Flytta zombier
function moveZombies() {
    zombies.forEach(zombie => {
        // 70% chans att zombien rör sig
        if (Math.random() < 0.7) {
            if (zombie.x < playerPosition.x) zombie.x++;
            else if (zombie.x > playerPosition.x) zombie.x--;
            
            if (zombie.y < playerPosition.y) zombie.y++;
            else if (zombie.y > playerPosition.y) zombie.y--;
            
            // Håll inom gränserna
            zombie.x = Math.max(0, Math.min(GRID_SIZE - 1, zombie.x));
            zombie.y = Math.max(0, Math.min(GRID_SIZE - 1, zombie.y));
        }
    });
}

// Uppdatera status
function updateStatus() {
    document.getElementById('cats-left').textContent = TOTAL_CATS - rescuedCats;
    provideClues();
}

// Ge ledtrådar
function provideClues() {
    let cluesHTML = '';
    
    // Ledtrådar om katter
    cats.forEach(cat => {
        if (cat.y < playerPosition.y) {
            cluesHTML += `<p class="cat-icon">Jamande från norr (${Math.abs(cat.y - playerPosition.y)} steg)</p>`;
        } else if (cat.y > playerPosition.y) {
            cluesHTML += `<p class="cat-icon">Jamande från söder (${Math.abs(cat.y - playerPosition.y)} steg)</p>`;
        }
        
        if (cat.x < playerPosition.x) {
            cluesHTML += `<p class="cat-icon">Jamande från väst (${Math.abs(cat.x - playerPosition.x)} steg)</p>`;
        } else if (cat.x > playerPosition.x) {
            cluesHTML += `<p class="cat-icon">Jamande från öst (${Math.abs(cat.x - playerPosition.x)} steg)</p>`;
        }
    });
    
    // Ledtrådar om zombier inom 2 steg
    zombies.forEach(zombie => {
        const distance = Math.abs(zombie.x - playerPosition.x) + Math.abs(zombie.y - playerPosition.y);
        if (distance <= 2) {
            if (zombie.y < playerPosition.y) {
                cluesHTML += `<p class="zombie-icon">Zombiestön från norr (${distance} steg)</p>`;
            } else if (zombie.y > playerPosition.y) {
                cluesHTML += `<p class="zombie-icon">Zombiestön från söder (${distance} steg)</p>`;
            }
            
            if (zombie.x < playerPosition.x) {
                cluesHTML += `<p class="zombie-icon">Zombiestön från väst (${distance} steg)</p>`;
            } else if (zombie.x > playerPosition.x) {
                cluesHTML += `<p class="zombie-icon">Zombiestön från öst (${distance} steg)</p>`;
            }
        }
    });
    
    document.getElementById('clues').innerHTML = cluesHTML || '<p>Inga speciella ljud hörs...</p>';
}

// Hantera spelarens rörelser
function movePlayer(dx, dy) {
    if (gameOver) return;
    
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;
    
    if (newX >= 0 && newX < GRID_SIZE && newY >= 0 && newY < GRID_SIZE) {
        playerPosition.x = newX;
        playerPosition.y = newY;
        moves++;
        
        // Ge poäng för varje steg (men mindre än för att rädda katter)
        addPoints(5);
        // Ge lite XP för att utforska
        addXP(5);
        
        updateGame();
    }
}

// Lägg till poäng
function addPoints(amount) {
    points += amount;
    updateStatsDisplay();
}

// Lägg till XP
function addXP(amount) {
    xp += amount;
    
    // Kolla om spelaren har nått tillräckligt med XP för att gå upp i nivå
    while (xp >= xpNeeded) {
        xp -= xpNeeded;
        levelUp();
    }
    
    updateStatsDisplay();
}

// Gå upp i nivå
function levelUp() {
    level++;
    xpNeeded = Math.floor(xpNeeded * 1.5); // Öka XP som krävs för nästa nivå
    
    // Visa meddelande om level up
    const levelDisplay = document.getElementById('level');
    levelDisplay.textContent = level;
    levelDisplay.classList.add('level-up');
    
    // Ta bort animationen efter den är klar
    setTimeout(() => {
        levelDisplay.classList.remove('level-up');
    }, 1000);
    
    // Bonuspoäng för att gå upp i nivå
    addPoints(25);
    
    document.getElementById('status').innerHTML += 
        `<p class="cat-icon">Grattis! Du gick upp till nivå ${level}! +25 poäng</p>`;
}

// Uppdatera statistikdisplayen
function updateStatsDisplay() {
    document.getElementById('points').textContent = points;
    document.getElementById('level').textContent = level;
    document.getElementById('xp').textContent = xp;
    document.getElementById('xp-needed').textContent = xpNeeded;
    
    // Uppdatera XP-baren
    const xpPercent = Math.min(100, (xp / xpNeeded) * 100);
    const xpBar = document.getElementById('xp-bar');
    xpBar.style.width = `${xpPercent}%`;
    xpBar.textContent = `${Math.round(xpPercent)}%`;
}

// Inaktivera kontroller när spelet är över
function disableControls() {
    document.querySelectorAll('.direction-buttons button').forEach(btn => {
        btn.disabled = true;
    });
}

// Aktivera kontroller
function enableControls() {
    document.querySelectorAll('.direction-buttons button').forEach(btn => {
        btn.disabled = false;
    });
}

// Event listeners för knappar
document.getElementById('north').addEventListener('click', () => movePlayer(0, -1));
document.getElementById('south').addEventListener('click', () => movePlayer(0, 1));
document.getElementById('west').addEventListener('click', () => movePlayer(-1, 0));
document.getElementById('east').addEventListener('click', () => movePlayer(1, 0));
document.getElementById('restart-btn').addEventListener('click', initGame);

// Tangentbordsstyrning
document.addEventListener('keydown', (e) => {
    switch(e.key.toLowerCase()) {
        case 'arrowup': case 'n': movePlayer(0, -1); break;
        case 'arrowdown': case 's': movePlayer(0, 1); break;
        case 'arrowleft': case 'v': movePlayer(-1, 0); break;
        case 'arrowright': case 'ö': movePlayer(1, 0); break;
    }
});
const time = new Date(apiResponse.time);
document.getElementById("game-time").textContent = "Tid: " + time.toLocaleTimeString();

// Start time updates
startTimeUpdates();
// Starta spelet
initGame();