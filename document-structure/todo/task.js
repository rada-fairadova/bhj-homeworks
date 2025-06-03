document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tasks__form');
    const input = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');

    // Функция создания новой задачи
    function createTask(text) {
        const task = document.createElement('div');
        task.className = 'task';
        
        const title = document.createElement('div');
        title.className = 'task__title';
        title.textContent = text;
        
        const removeBtn = document.createElement('a');
        removeBtn.className = 'task__remove';
        removeBtn.href = '#';
        removeBtn.innerHTML = '&times;';
        
        // Добавляем обработчик удаления
        removeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            task.remove();
        });
        
        task.appendChild(title);
        task.appendChild(removeBtn);
        
        return task;
    }

    // Обработчик отправки формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const taskText = input.value.trim();
        if (taskText) {
            const task = createTask(taskText);
            tasksList.appendChild(task);
            input.value = '';
        }
    });

    // Обработчик нажатия Enter в поле ввода
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    });
});