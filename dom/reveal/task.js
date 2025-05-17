// Получаем все элементы с классом reveal
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Проверяем, входит ли элемент в видимую область
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      el.classList.add('reveal_active');
    } else {
      el.classList.remove('reveal_active');
    }
  });
}

// Вешаем обработчик на событие scroll
window.addEventListener('scroll', revealOnScroll);

// Также вызываем функцию при загрузке страницы, чтобы активировать видимые элементы сразу
window.addEventListener('load', revealOnScroll);