document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('subscribe-modal');
    const closeBtn = document.querySelector('.modal__close');

    // Проверяем, есть ли cookie о закрытии окна
    function getCookie(name) {
        const matches = document.cookie.match(new RegExp(
            `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    // Если cookie 'modalClosed' нет - показываем окно
    if (!getCookie('modalClosed')) {
        modal.classList.add('modal_active');
    }

    // Обработчик закрытия окна
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        // Устанавливаем cookie на 1 год о том, что окно было закрыто
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        document.cookie = `modalClosed=true; expires=${date.toUTCString()}; path=/`;
    });
});