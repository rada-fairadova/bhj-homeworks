document.addEventListener('DOMContentLoaded', function() {
    // Находим все dropdown-элементы на странице
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Для каждого dropdown создаем обработчики событий
    dropdowns.forEach(dropdown => {
        const dropdownValue = dropdown.querySelector('.dropdown__value');
        const dropdownList = dropdown.querySelector('.dropdown__list');
        const dropdownItems = dropdown.querySelectorAll('.dropdown__item');
        
        // Обработчик клика по кнопке (значению)
        dropdownValue.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Закрываем все открытые dropdowns
            document.querySelectorAll('.dropdown__list_active').forEach(list => {
                if (list !== dropdownList) {
                    list.classList.remove('dropdown__list_active');
                }
            });
            
            // Открываем/закрываем текущий dropdown
            dropdownList.classList.toggle('dropdown__list_active');
        });
        
        // Обработчики кликов по пунктам меню
        dropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Устанавливаем новое значение
                const newValue = this.querySelector('.dropdown__link').textContent.trim();
                dropdownValue.textContent = newValue;
                
                // Закрываем список
                dropdownList.classList.remove('dropdown__list_active');
            });
        });
    });
    
    // Закрытие dropdown при клике вне его области
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown__list_active').forEach(list => {
                list.classList.remove('dropdown__list_active');
            });
        }
    });
});