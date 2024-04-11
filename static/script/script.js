const btnOpen = document.querySelector('#btnOpen')
const btnClose = document.querySelector('#btnClose')

function openHamburger(){
    btnOpen.setAttribute('aria-expanded', 'true');
}

function closeHamburger(){
    btnClose.setAttribute('aria-expanded', 'false');
}

btnOpen.addEventListener('click', openHamburger);
btnClose.addEventListener('click', closeHamburger);