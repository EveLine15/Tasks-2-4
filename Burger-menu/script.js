const openBurger = document.querySelector('.open-burger');
const closeBurger = document.querySelector('#button-hide');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('main');

openBurger.addEventListener('click', () => {
    sidebar.style.width = '250px';
    main.style.marginLeft = '250px';
    openBurger.style.display = 'none';
});

closeBurger.addEventListener('click', () => {
    sidebar.style.width = '0';
    main.style.marginLeft = '0';
    openBurger.style.display = 'block';
})
