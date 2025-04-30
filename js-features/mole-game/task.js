function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let dead = 0;
let lost = 0;

function updateCounters() {
    document.getElementById('dead').textContent = dead;
    document.getElementById('lost').textContent = lost;
}

function handleHoleClick(event) {
    const hole = event.target;
    
    if (hole.classList.contains('hole_has-mole')) {
        dead++;
    } else {
        lost++;
    }
    
    updateCounters();

    if (dead >= 10) {
        alert('Победа! Вы убили 10 кротов!');
        resetGame();
    } else if (lost >= 5) {
        alert('Поражение! Слишком много промахов!');
        resetGame();
    }
}

function resetGame() {
    dead = 0;
    lost = 0;
    updateCounters();
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', handleHoleClick);
}