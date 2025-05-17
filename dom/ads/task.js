document.addEventListener('DOMContentLoaded', function() {
    // Находим все ротаторы на странице
    const rotators = document.querySelectorAll('.rotator');
    
    // Для каждого ротатора создаем отдельный механизм смены
    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = 0;
        let timeoutId = null;
        
        // Функция для смены активного элемента
        function rotate() {
            // Удаляем активный класс у текущего элемента
            cases[currentIndex].classList.remove('rotator__case_active');
            
            // Переходим к следующему элементу (с зацикливанием)
            currentIndex = (currentIndex + 1) % cases.length;
            
            // Получаем настройки для нового элемента
            const nextCase = cases[currentIndex];
            const speed = parseInt(nextCase.dataset.speed) || 1000;
            const color = nextCase.dataset.color || '#000';
            
            // Применяем стиль и делаем элемент активным
            nextCase.style.color = color;
            nextCase.classList.add('rotator__case_active');
            
            // Запускаем следующую смену с учетом скорости текущего элемента
            timeoutId = setTimeout(rotate, speed);
        }
        
        // Начинаем ротацию
        const firstCase = cases[currentIndex];
        const initialSpeed = parseInt(firstCase.dataset.speed) || 1000;
        const initialColor = firstCase.dataset.color || '#000';
        
        firstCase.style.color = initialColor;
        timeoutId = setTimeout(rotate, initialSpeed);
        
        // Очистка таймера при удалении элемента (опционально)
        rotator.dataset.timeoutId = timeoutId;
    });
});