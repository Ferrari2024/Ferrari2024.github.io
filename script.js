const contorno = document.querySelector('.contorno');
const loginlink = document.querySelector('.login-link');
const loginregister = document.querySelector('.login-register');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

loginregister.addEventListener('click', ()=> {
    contorno.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    contorno.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    contorno.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    contorno.classList.remove('active-popup');
});