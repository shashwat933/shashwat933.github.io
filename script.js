const icon = document.querySelector('.icon');
const PhoneMenu = document.querySelector('.PhoneMenu');
const CloseMenu = document.querySelector('.CloseMenu');
icon.addEventListener('click', (e) => {
    PhoneMenu.setAttribute('id', 'slide');

})
CloseMenu.addEventListener('click', () => {
    PhoneMenu.removeAttribute('id');
})
