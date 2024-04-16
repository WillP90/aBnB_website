import {
    clearAllBodyScrollLocks,
    disableBodyScroll,
    enableBodyScroll,
} from "https://cdn.jsdelivr.net/gh/rick-liruixin/body-scroll-lock-upgrade@v1.0.3.1/lib/index.esm.js";

const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.querySelector('.hamburger')
const main = document.querySelector('main')
const body = document.querySelector('body')

function openHamburger(){
    btnOpen.setAttribute('aria-expanded', 'true');
    topNavMenu.removeAttribute('inert');
    topNavMenu.removeAttribute('style');
    main.setAttribute('inert', '');
    bodyScrollLockUpgrade.disableBodyScroll(body);
    btnClose.focus();
}

function closeHamburger(){
    btnOpen.setAttribute('aria-expanded', 'false');
    topNavMenu.setAttribute('inert', '');
    main.removeAttribute('inert');
    bodyScrollLockUpgrade.enableBodyScroll(body);
    btnOpen.focus();

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
        closeHamburger();
    }
}
setupTopNav(media);

btnOpen.addEventListener('click', openHamburger);
btnClose.addEventListener('click', closeHamburger);

media.addEventListener('change', function(e){
    setupTopNav(e);
});