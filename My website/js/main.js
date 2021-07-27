'use strict';
const nav = document.querySelector('.opn');
const hide = document.querySelector('.hidden');

nav.addEventListener('click',function(){
    hide.classList.remove('hidden');
    console.log('clicked');
})
