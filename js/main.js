'use strict'
addEventListener('load', function(){
    const openCloseButton = document.querySelector('#buttonOpenCloseMenu');
    const munuMobileItes = document.querySelector('#menu-mobile-items');

    openCloseButton.addEventListener('click', e =>{
        console.log("holaa")
        munuMobileItes.classList.toggle('menu-mobile-closed');
    });




});