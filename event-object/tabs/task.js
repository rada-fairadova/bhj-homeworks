document.addEventListener('DOMContentLoaded', function() {
    // Находим все контейнеры с вкладками на странице
    const tabsContainers = document.querySelectorAll('.tabs');
    
    // Для каждого контейнера создаем отдельный механизм переключения
    tabsContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab');
        const contents = container.querySelectorAll('.tab__content');
        
        // Добавляем обработчики клика для каждой вкладки
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Удаляем активные классы у всех вкладок и содержимого
                tabs.forEach(t => t.classList.remove('tab_active'));
                contents.forEach(c => c.classList.remove('tab__content_active'));
                
                // Добавляем активные классы текущей вкладке и соответствующему содержимому
                tab.classList.add('tab_active');
                contents[index].classList.add('tab__content_active');
            });
        });
    });
});