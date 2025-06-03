document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const fileInput = document.getElementById('file');
    const progressBar = document.getElementById('progress');
    const fileNameDisplay = document.querySelector('.input__wrapper-desc');

    // Отображение имени выбранного файла
    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            fileNameDisplay.textContent = this.files[0].name;
        } else {
            fileNameDisplay.textContent = 'Имя файла...';
        }
    });

    // Обработка отправки формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!fileInput.files.length) {
            alert('Пожалуйста, выберите файл');
            return;
        }

        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();

        // Настройка отслеживания прогресса
        xhr.upload.onprogress = function(event) {
            if (event.lengthComputable) {
                const percentComplete = event.loaded / event.total;
                progressBar.value = percentComplete;
            }
        };

        xhr.onload = function() {
            if (xhr.status === 200) {
                alert('Файл успешно загружен!');
                progressBar.value = 0;
                fileNameDisplay.textContent = 'Имя файла...';
                form.reset();
            } else {
                alert('Ошибка загрузки файла: ' + xhr.statusText);
            }
        };

        xhr.onerror = function() {
            alert('Ошибка сети при загрузке файла');
        };

        // Отправка файла
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
        xhr.send(formData);
    });
});