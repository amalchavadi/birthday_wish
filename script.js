document.getElementById('surpriseButton').addEventListener('click', function () {
    const message = document.getElementById('message');
    message.style.display = 'block';
    startHearts();
    playMusic();
});

function startHearts() {
    const heartContainer = document.querySelector('.hearts');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        heartContainer.appendChild(heart);

        // Remove heart after animation ends
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

function playMusic() {
    const music = document.getElementById('music');
    music.play();
}

