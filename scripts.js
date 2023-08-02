// Отключает контекстное меню
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Отключает выделение текста
window.addEventListener('selectstart', function (e) {
    e.preventDefault();
});
