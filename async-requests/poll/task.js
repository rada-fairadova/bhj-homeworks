document.addEventListener('DOMContentLoaded', function() {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');
    let pollId;

    // Загрузка опроса
    function loadPoll() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr.responseType = 'json';
        
        xhr.onload = function() {
            if (xhr.status === 200) {
                const data = xhr.response;
                pollId = data.id;
                renderPoll(data.data);
            } else {
                console.error('Ошибка загрузки опроса');
            }
        };
        
        xhr.onerror = function() {
            console.error('Ошибка сети');
        };
        
        xhr.send();
    }

    // Отображение опроса
    function renderPoll(pollData) {
        pollTitle.textContent = pollData.title;
        pollAnswers.innerHTML = '';
        
        pollData.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = answer;
            
            button.addEventListener('click', function() {
                vote(index);
            });
            
            pollAnswers.appendChild(button);
        });
    }

    // Отправка голоса
    function vote(answerIndex) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        
        xhr.onload = function() {
            if (xhr.status === 201) {
                alert('Спасибо, ваш голос засчитан!');
                // Для расширенной версии с отображением результатов:
                // showResults(xhr.response.stat);
            } else {
                alert('Ошибка при отправке голоса');
            }
        };
        
        xhr.onerror = function() {
            alert('Ошибка сети');
        };
        
        xhr.send(`vote=${pollId}&answer=${answerIndex}`);
    }

    // Функция для отображения результатов (расширенная версия)
    function showResults(statistics) {
        pollAnswers.innerHTML = '';
        
        statistics.forEach(item => {
            const result = document.createElement('div');
            result.textContent = `${item.answer}: ${item.votes} голосов`;
            pollAnswers.appendChild(result);
        });
    }

    // Загружаем опрос при старте
    loadPoll();
});