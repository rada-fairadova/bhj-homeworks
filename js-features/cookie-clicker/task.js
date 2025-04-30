const cookie = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');

cookie.onclick = function() {
    clickCounter.textContent++;

    cookie.classList.add('clicked');

    setTimeout(() => {
        cookie.classList.remove('clicked');
    }, 100);
};