document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.getElementById('items');
    const loader = document.getElementById('loader');

    // Функция для отображения данных о валютах
    function displayCurrencies(data) {
        const valutes = data.response.Valute;
        
        // Очищаем контейнер перед добавлением новых данных
        itemsContainer.innerHTML = '';
        
        // Создаем элементы для каждой валюты
        for (const key in valutes) {
            const currency = valutes[key];
            
            const item = document.createElement('div');
            item.className = 'item';
            
            const code = document.createElement('div');
            code.className = 'item__code';
            code.textContent = currency.CharCode;
            
            const value = document.createElement('div');
            value.className = 'item__value';
            value.textContent = currency.Value.toFixed(2);
            
            const currencyText = document.createElement('div');
            currencyText.className = 'item__currency';
            currencyText.textContent = 'руб.';
            
            item.appendChild(code);
            item.appendChild(value);
            item.appendChild(currencyText);
            
            itemsContainer.appendChild(item);
        }
    }

    // Функция загрузки данных
    function loadCurrencies() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
        xhr.responseType = 'json';
        
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Скрываем анимацию загрузки
                loader.classList.remove('loader_active');
                
                // Отображаем данные
                displayCurrencies(xhr.response);
            } else {
                console.error('Ошибка загрузки данных');
                loader.classList.remove('loader_active');
            }
        };
        
        xhr.onerror = function() {
            console.error('Ошибка сети');
            loader.classList.remove('loader_active');
        };
        
        xhr.send();
    }

    // Запускаем загрузку данных
    loadCurrencies();
});