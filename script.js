
// Create scattered background
window.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.background');
    const animalEmojis = ['🐘', '🦒', '🐧', '🦘', '🦩', '🐬', '🐙', '🦚', '🐨', '🐼', 
                          '🐯', '🦁', '🦓', '🦏', '🦛', '🐊', '🐢', '🦅', '🦉', '🦜', 
                          '🦈', '🐋', '🐠', '🦋', '🐝', '🐞', '🐍', '🦎', '🐸', '🦥', 
                          '🐻', '🐵', '🦍', '🐪', '🦙', '🐴', '🐔', '🦆', '🦢', '🐕', 
                          '🐈', '🐹', '🐭', '🦔', '🦇', '🦌', '🦊', '🐺', '🦝', '🦨'];
    
    // Create 40 scattered animals
    for (let i = 0; i < 40; i++) {
        const animal = document.createElement('div');
        animal.className = 'background-animal';
        animal.textContent = animalEmojis[Math.floor(Math.random() * animalEmojis.length)];
        
        // Random position across the entire screen
        animal.style.left = `${Math.random() * 95}%`;
        animal.style.top = `${Math.random() * 95}%`;
        
        // Random size
        animal.style.fontSize = `${1.5 + Math.random() * 2}rem`;
        
        // Random rotation
        animal.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        background.appendChild(animal);
    }
});

const animals = [
    'elefant', 'giraffe', 'pinguin', 'känguru', 'flamingo',
    'delfin', 'oktopus', 'pfau', 'koala', 'panda',
    'tiger', 'löwe', 'zebra', 'nashorn', 'nilpferd',
    'krokodil', 'schildkröte', 'adler', 'eule', 'papagei',
    'hai', 'wal', 'qualle', 'seestern', 'seepferdchen',
    'schmetterling', 'libelle', 'biene', 'marienkäfer', 'spinne',
    'schlange', 'eidechse', 'frosch', 'chamäleon', 'leguan',
    'hase', 'eichhörnchen', 'waschbär', 'fuchs', 'wolf',
    'bär', 'affe', 'gorilla', 'schimpanse', 'lemur',
    'kamel', 'lama', 'alpaka', 'pferd', 'esel',
    'huhn', 'ente', 'gans', 'truthahn', 'pfau',
    'katze', 'hund', 'hamster', 'meerschweinchen', 'maus',
    'fledermaus', 'igel', 'stachelschwein', 'gürteltier', 'faultier',
    'antilope', 'gazelle', 'büffel', 'elch', 'reh',
    'robbe', 'walross', 'otter', 'biber', 'schnabeltier',
    'pelikan', 'tukan', 'specht', 'kolibri', 'schwan',
    'gepard', 'jaguar', 'luchs', 'puma', 'leopard',
    'storch', 'kranich', 'reiher', 'kormoran', 'albatros',
    'möwe', 'pinguin', 'papageitaucher', 'eisvogel', 'falke',
    'habicht', 'bussard', 'milan', 'geier', 'kondor',
    'taube', 'krähe', 'rabe', 'elster', 'häher',
    'spatz', 'rotkehlchen', 'amsel', 'drossel', 'nachtigall',
    'kuckuck', 'wiedehopf', 'buntspecht', 'grünspecht', 'pirol',
    'schwein', 'wildschwein', 'tapir', 'warzenschwein', 'flusspferd',
    'kuh', 'stier', 'ochse', 'ziege', 'schaf',
    'steinbock', 'gemse', 'mufflon', 'widder', 'lamm',
    'hirsch', 'rentier', 'damhirsch', 'rothirsch', 'rehbock',
    'dachs', 'marder', 'wiesel', 'hermelin', 'iltis',
    'luchs', 'wildkatze', 'ozelot', 'serval', 'karakal',
    'hyäne', 'schakal', 'kojote', 'dingo', 'fennek',
    'murmeltier', 'ziesel', 'präriehund', 'chinchilla', 'degu',
    'ratte', 'wühlmaus', 'haselmaus', 'siebenschläfer', 'bilch',
    'kängururatte', 'springmaus', 'stachelmaus', 'rötelmaus', 'feldmaus',
    'lemming', 'bisamratte', 'nutria', 'bisam', 'wanderratte',
    'kobra', 'python', 'boa', 'natter', 'viper',
    'klapperschlange', 'anakonda', 'schwarze mamba', 'königskobra', 'seeschlange',
    'gecko', 'waran', 'skink', 'blindschleiche', 'krustenechse',
    'kröte', 'unke', 'laubfrosch', 'grasfrosch', 'teichfrosch',
    'molch', 'salamander', 'axolotl', 'feuersalamander', 'kammmolch',
    'skorpion', 'vogelspinne', 'kreuzspinne', 'wolfsspinne', 'springspinne',
    'wespe', 'hornisse', 'hummel', 'ameise', 'termite',
    'grille', 'heuschrecke', 'gottesanbeterin', 'stabheuschrecke', 'wandelndes blatt',
    'käfer', 'hirschkäfer', 'maikäfer', 'glühwürmchen', 'mistkäfer',
    'krebs', 'hummer', 'garnele', 'krabbe', 'languste',
    'tintenfisch', 'kalmar', 'nautilus', 'sepie', 'krake',
    'muschel', 'schnecke', 'weinbergschnecke', 'nacktschnecke', 'meeresschnecke',
    'igelfisch', 'kugelfisch', 'rochen', 'muräne', 'barrakuda',
    'thunfisch', 'lachs', 'forelle', 'karpfen', 'hecht',
    'barsch', 'zander', 'wels', 'aal', 'stör',
    'goldfisch', 'guppy', 'kampffisch', 'diskusfisch', 'skalar',
    'clownfisch', 'doktorfisch', 'kaiserfisch', 'falterfisch', 'drückerfisch',
    'seepferd', 'seelöwe', 'seekuh', 'delfin', 'orca',
    'blauwal', 'buckelwal', 'pottwal', 'beluga', 'narwal'
];

let gameState = {
    players: {
        player1: { name: '', score: 0 },
        player2: { name: '', score: 0 }
    },
    currentRound: 1,
    totalRounds: 6,
    currentDrawer: 'player1',
    currentGuesser: 'player2',
    currentAnimal: '',
    timer: null,
    timeLeft: 60,
    startTime: 0,
    roundScore: 0,
    guessedCorrectly: false
};

const screens = {
    playerSetup: document.getElementById('playerSetupScreen'),
    roundInfo: document.getElementById('roundInfoScreen'),
    draw: document.getElementById('drawScreen'),
    countdown: document.getElementById('countdownScreen'),
    guess: document.getElementById('guessScreen'),
    result: document.getElementById('resultScreen'),
    gameOver: document.getElementById('gameOverScreen')
};

const elements = {
    player1Input: document.getElementById('player1Input'),
    player2Input: document.getElementById('player2Input'),
    startGameBtn: document.getElementById('startGameBtn'),
    currentRound: document.getElementById('currentRound'),
    drawerName: document.getElementById('drawerName'),
    guesserName: document.getElementById('guesserName'),
    continueBtn: document.getElementById('continueBtn'),
    drawerDisplay: document.getElementById('drawerDisplay'),
    guesserDisplay: document.getElementById('guesserDisplay'),
    roundNum: document.getElementById('roundNum'),
    roundNum2: document.getElementById('roundNum2'),
    animalDisplay: document.getElementById('animalDisplay'),
    startTimerBtn: document.getElementById('startTimerBtn'),
    timerDisplay: document.getElementById('timerDisplay'),
    guessInput: document.getElementById('guessInput'),
    submitGuessBtn: document.getElementById('submitGuessBtn'),
    feedback: document.getElementById('feedback'),
    resultTitle: document.getElementById('resultTitle'),
    resultDetails: document.getElementById('resultDetails'),
    guesserPoints: document.getElementById('guesserPoints'),
    guesserScore: document.getElementById('guesserScore'),
    drawerPoints: document.getElementById('drawerPoints'),
    drawerScore: document.getElementById('drawerScore'),
    player1Name: document.getElementById('player1Name'),
    player1Score: document.getElementById('player1Score'),
    player2Name: document.getElementById('player2Name'),
    player2Score: document.getElementById('player2Score'),
    nextRoundBtn: document.getElementById('nextRoundBtn'),
    winnerText: document.getElementById('winnerText'),
    finalPlayer1Name: document.getElementById('finalPlayer1Name'),
    finalPlayer1Score: document.getElementById('finalPlayer1Score'),
    finalPlayer2Name: document.getElementById('finalPlayer2Name'),
    finalPlayer2Score: document.getElementById('finalPlayer2Score'),
    newGameBtn: document.getElementById('newGameBtn'),
    skipAnimalBtn: document.getElementById('skipAnimalBtn'),
    countdownNumber: document.getElementById('countdownNumber'),
    nextGuesser: document.getElementById('nextGuesser')
};

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
    screens[screenName].classList.remove('hidden');
}

function getRandomAnimal() {
    return animals[Math.floor(Math.random() * animals.length)];
}

function calculateScore(seconds) {
    // Rater bekommt basierend auf Zeit
    let guesserPoints;
    if (seconds <= 10) guesserPoints = 100;
    else if (seconds <= 20) guesserPoints = 80;
    else if (seconds <= 30) guesserPoints = 60;
    else if (seconds <= 40) guesserPoints = 40;
    else if (seconds <= 50) guesserPoints = 20;
    else guesserPoints = 10;
    
    // Zeichner bekommt die restlichen Punkte (von 100)
    const drawerPoints = 100 - guesserPoints;
    
    return { guesser: guesserPoints, drawer: drawerPoints };
}

function startGame() {
    const player1Name = elements.player1Input.value.trim();
    const player2Name = elements.player2Input.value.trim();
    
    if (!player1Name || !player2Name) {
        alert('Bitte beide Spielernamen eingeben!');
        return;
    }
    
    gameState.players.player1.name = player1Name;
    gameState.players.player2.name = player2Name;
    gameState.players.player1.score = 0;
    gameState.players.player2.score = 0;
    gameState.currentRound = 1;
    gameState.currentDrawer = 'player1';
    gameState.currentGuesser = 'player2';
    
    showRoundInfo();
}

function showRoundInfo() {
    elements.currentRound.textContent = gameState.currentRound;
    elements.drawerName.textContent = gameState.players[gameState.currentDrawer].name;
    elements.guesserName.textContent = gameState.players[gameState.currentGuesser].name;
    showScreen('roundInfo');
}

function startRound() {
    gameState.currentAnimal = getRandomAnimal();
    gameState.timeLeft = 60;
    gameState.guessedCorrectly = false;
    gameState.roundScore = 0;
    
    elements.roundNum.textContent = gameState.currentRound;
    elements.roundNum2.textContent = gameState.currentRound;
    elements.drawerDisplay.textContent = gameState.players[gameState.currentDrawer].name;
    elements.guesserDisplay.textContent = gameState.players[gameState.currentGuesser].name;
    elements.animalDisplay.textContent = gameState.currentAnimal;
    elements.feedback.textContent = '';
    elements.feedback.className = 'feedback';
    elements.guessInput.value = '';
    elements.timerDisplay.textContent = gameState.timeLeft;
    elements.timerDisplay.classList.remove('warning');
    
    showScreen('draw');
}

function skipAnimal() {
    gameState.currentAnimal = getRandomAnimal();
    elements.animalDisplay.textContent = gameState.currentAnimal;
}

function startCountdown() {
    // Show countdown screen
    elements.nextGuesser.textContent = gameState.players[gameState.currentGuesser].name;
    showScreen('countdown');
    
    let countdown = 5;
    elements.countdownNumber.textContent = countdown;
    
    const countdownInterval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            elements.countdownNumber.textContent = countdown;
        } else {
            clearInterval(countdownInterval);
            startTimer();
        }
    }, 1000);
}

function startTimer() {
    gameState.startTime = Date.now();
    showScreen('guess');
    elements.guessInput.focus();
    
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        elements.timerDisplay.textContent = gameState.timeLeft;
        
        if (gameState.timeLeft <= 10) {
            elements.timerDisplay.classList.add('warning');
        }
        
        if (gameState.timeLeft <= 0) {
            endRound(false);
        }
    }, 1000);
}

function checkGuess() {
    const guess = elements.guessInput.value.trim().toLowerCase();
    
    if (!guess) {
        elements.feedback.textContent = 'Bitte ein Tier eingeben!';
        elements.feedback.className = 'feedback incorrect';
        return;
    }
    
    if (guess === gameState.currentAnimal.toLowerCase()) {
        gameState.guessedCorrectly = true;
        const timeTaken = 60 - gameState.timeLeft;
        const scores = calculateScore(timeTaken);
        gameState.roundScore = scores;
        gameState.players[gameState.currentGuesser].score += scores.guesser;
        gameState.players[gameState.currentDrawer].score += scores.drawer;
        endRound(true);
    } else {
        elements.feedback.textContent = 'Nicht ganz! Nochmal versuchen!';
        elements.feedback.className = 'feedback incorrect';
        elements.guessInput.value = '';
        elements.guessInput.focus();
    }
}

function endRound(success) {
    clearInterval(gameState.timer);
    
    if (success) {
        elements.resultTitle.textContent = '🎉 Richtig!';
        elements.resultTitle.className = 'success';
        elements.resultDetails.innerHTML = `Das Tier war <strong>${gameState.currentAnimal}</strong>. Erraten in ${60 - gameState.timeLeft} Sekunden!`;
        elements.guesserPoints.textContent = gameState.players[gameState.currentGuesser].name;
        elements.guesserScore.textContent = gameState.roundScore.guesser;
        elements.drawerPoints.textContent = gameState.players[gameState.currentDrawer].name;
        elements.drawerScore.textContent = gameState.roundScore.drawer;
    } else {
        elements.resultTitle.textContent = '⏰ Zeit abgelaufen!';
        elements.resultTitle.className = 'fail';
        elements.resultDetails.innerHTML = `Das Tier war <strong>${gameState.currentAnimal}</strong>. Keine Punkte in dieser Runde!`;
        elements.guesserPoints.textContent = gameState.players[gameState.currentGuesser].name;
        elements.guesserScore.textContent = 0;
        elements.drawerPoints.textContent = gameState.players[gameState.currentDrawer].name;
        elements.drawerScore.textContent = 0;
    }
    
    elements.player1Name.textContent = gameState.players.player1.name;
    elements.player1Score.textContent = gameState.players.player1.score;
    elements.player2Name.textContent = gameState.players.player2.name;
    elements.player2Score.textContent = gameState.players.player2.score;
    
    showScreen('result');
}

function nextRound() {
    gameState.currentRound++;
    
    if (gameState.currentRound > gameState.totalRounds) {
        showGameOver();
    } else {
        // Switch roles
        const temp = gameState.currentDrawer;
        gameState.currentDrawer = gameState.currentGuesser;
        gameState.currentGuesser = temp;
        
        showRoundInfo();
    }
}

function showGameOver() {
    const p1Score = gameState.players.player1.score;
    const p2Score = gameState.players.player2.score;
    const p1Name = gameState.players.player1.name;
    const p2Name = gameState.players.player2.name;
    
    if (p1Score > p2Score) {
        elements.winnerText.textContent = `🏆 ${p1Name} gewinnt! 🏆`;
    } else if (p2Score > p1Score) {
        elements.winnerText.textContent = `🏆 ${p2Name} gewinnt! 🏆`;
    } else {
        elements.winnerText.textContent = `🤝 Unentschieden! 🤝`;
    }
    
    elements.finalPlayer1Name.textContent = p1Name;
    elements.finalPlayer1Score.textContent = p1Score;
    elements.finalPlayer2Name.textContent = p2Name;
    elements.finalPlayer2Score.textContent = p2Score;
    
    showScreen('gameOver');
}

function resetGame() {
    elements.player1Input.value = '';
    elements.player2Input.value = '';
    gameState = {
        players: {
            player1: { name: '', score: 0 },
            player2: { name: '', score: 0 }
        },
        currentRound: 1,
        totalRounds: 6,
        currentDrawer: 'player1',
        currentGuesser: 'player2',
        currentAnimal: '',
        timer: null,
        timeLeft: 60,
        startTime: 0,
        roundScore: 0,
        guessedCorrectly: false
    };
    showScreen('playerSetup');
}

// Event listeners
elements.startGameBtn.addEventListener('click', startGame);
elements.continueBtn.addEventListener('click', startRound);
elements.startTimerBtn.addEventListener('click', startCountdown);
elements.skipAnimalBtn.addEventListener('click', skipAnimal);
elements.submitGuessBtn.addEventListener('click', checkGuess);
elements.nextRoundBtn.addEventListener('click', nextRound);
elements.newGameBtn.addEventListener('click', resetGame);

elements.guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

elements.player1Input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        elements.player2Input.focus();
    }
});

elements.player2Input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        startGame();
    }
});

// Initialize
showScreen('playerSetup');