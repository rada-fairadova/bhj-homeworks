document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы с подсказками
    const tooltipElements = document.querySelectorAll('.has-tooltip');
    
    // Создаем элемент для подсказки
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);
    
    // Обработчик клика для элементов с подсказками
    function handleTooltipClick(event) {
        event.preventDefault();
        
        // Получаем текст подсказки из атрибута title
        const tooltipText = this.getAttribute('title');
        
        // Если кликнули на тот же элемент, скрываем подсказку
        if (tooltip.classList.contains('tooltip_active') && 
            tooltip.textContent === tooltipText) {
            tooltip.classList.remove('tooltip_active');
            return;
        }
        
        // Устанавливаем текст подсказки
        tooltip.textContent = tooltipText;
        
        // Получаем позицию элемента
        const elementRect = this.getBoundingClientRect();
        
        // Позиционируем подсказку
        tooltip.style.left = `${elementRect.left}px`;
        tooltip.style.top = `${elementRect.bottom}px`;
        
        // Проверяем наличие атрибута data-position
        const position = this.getAttribute('data-position') || 'bottom';
        
        // Позиционируем подсказку в зависимости от data-position
        switch(position) {
            case 'top':
                tooltip.style.top = `${elementRect.top - tooltip.offsetHeight}px`;
                break;
            case 'left':
                tooltip.style.left = `${elementRect.left - tooltip.offsetWidth}px`;
                tooltip.style.top = `${elementRect.top}px`;
                break;
            case 'right':
                tooltip.style.left = `${elementRect.right}px`;
                tooltip.style.top = `${elementRect.top}px`;
                break;
            case 'bottom':
            default:
                tooltip.style.top = `${elementRect.bottom}px`;
        }
        
        // Показываем подсказку
        tooltip.classList.add('tooltip_active');
    }
    
    // Добавляем обработчики клика для всех элементов
    tooltipElements.forEach(element => {
        element.addEventListener('click', handleTooltipClick);
    });
    
    // Закрываем подсказку при клике вне элемента
    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('has-tooltip')) {
            tooltip.classList.remove('tooltip_active');
        }
    });
});