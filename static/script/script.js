const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.querySelector('.hamburger')
const main = document.querySelector('main')

function openHamburger(){
    btnOpen.setAttribute('aria-expanded', 'true');
    topNavMenu.removeAttribute('inert');
    topNavMenu.removeAttribute('style');
    main.setAttribute('inert', '');
}

function closeHamburger(){
    btnOpen.setAttribute('aria-expanded', 'false');
    topNavMenu.setAttribute('inert', '');
    main.removeAttribute('inert');

    setTimeout(() => {
        topNavMenu.style.transition = 'none';
    }, 500);
}

function setupTopNav(e){
    if(e.matches){
        console.log('mobile view');
        topNavMenu.setAttribute('inert', '');
        topNavMenu.style.transition = 'none';
    }
    else{
        console.log('desktop view');
        topNavMenu.removeAttribute('inert')
    }
}
setupTopNav(media);

btnOpen.addEventListener('click', openHamburger);
btnClose.addEventListener('click', closeHamburger);

media.addEventListener('change', function(e){
    setupTopNav(e);
});