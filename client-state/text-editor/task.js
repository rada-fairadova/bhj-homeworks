document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    
    // Загружаем сохраненный текст из localStorage при загрузке страницы
    const savedText = localStorage.getItem('editorText');
    if (savedText) {
        editor.value = savedText;
    }
    
    // Сохраняем текст в localStorage при каждом изменении
    editor.addEventListener('input', () => {
        localStorage.setItem('editorText', editor.value);
    });
});