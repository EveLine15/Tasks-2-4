const burgerBtn = document.querySelector('.burger-block');
const closeBtn = document.querySelector('.close-block')
const menu = document.querySelector('.menu');
const input = document.querySelector('.input-search');

burgerBtn.addEventListener('click', () => {
    menu.classList.remove('none');
    burgerBtn.classList.add('none');
    closeBtn.classList.remove('none');
});

closeBtn.addEventListener('click', () => {
    menu.classList.add('none');
    burgerBtn.classList.remove('none');
    closeBtn.classList.add('none');
    input.focus();
});

input.addEventListener('click', () => {
    input.style.backgroundColor = 'white';
});

input.addEventListener('blur', () => {
    input.style.backgroundColor = 'rgb(245, 245, 247)';
});