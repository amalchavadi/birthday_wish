function showMessage() {
    const message = document.getElementById('message');
    message.style.display = 'block';
    startHearts();
    playMusic();
}

function startHearts() {
    const hearts = document.getElementById('hearts');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        hearts.appendChild(heart);
    }
}

function playMusic() {
    const music = document.getElementById('music');
    music.play();
}
