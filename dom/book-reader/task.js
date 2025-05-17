document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');
    
    // Обработчики для изменения размера шрифта
    const fontSizeControls = document.querySelectorAll('.book__control_font-size .font-size');
    fontSizeControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Удаляем активный класс у всех элементов управления размером
            fontSizeControls.forEach(c => c.classList.remove('font-size_active'));
            
            // Добавляем активный класс текущему элементу
            this.classList.add('font-size_active');
            
            // Удаляем все классы размера шрифта
            book.classList.remove('book_fs-small', 'book_fs-big');
            
            // Добавляем нужный класс в зависимости от data-атрибута
            const size = this.dataset.size;
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });
    
    // Обработчики для изменения цвета текста 
    const textColorControls = document.querySelectorAll('.book__control_color .color');
    textColorControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Удаляем активный класс у всех элементов управления цветом текста
            textColorControls.forEach(c => c.classList.remove('color_active'));
            
            // Добавляем активный класс текущему элементу
            this.classList.add('color_active');
            
            // Удаляем все классы цвета текста
            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
            
            // Добавляем нужный класс из data-атрибута
            const color = this.dataset.textColor;
            book.classList.add(`book_color-${color}`);
        });
    });
    
    // Обработчики для изменения цвета фона 
    const bgColorControls = document.querySelectorAll('.book__control_background .color');
    bgColorControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Удаляем активный класс у всех элементов управления цветом фона
            bgColorControls.forEach(c => c.classList.remove('color_active'));
            
            // Добавляем активный класс текущему элементу
            this.classList.add('color_active');
            
            // Удаляем все классы цвета фона
            book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
            
            // Добавляем нужный класс из data-атрибута
            const bgColor = this.dataset.bgColor;
            book.classList.add(`book_bg-${bgColor}`);
        });
    });
});