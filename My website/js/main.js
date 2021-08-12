'use strict';
const nav = document.querySelector('.opn');
const hide = document.querySelector('.hidden');
const hamclse = document.querySelector('.close');
const white = document.querySelector('.WHITE');
const dark = document.querySelector('.DARK');
const mainDark = document.querySelector('.main');


nav.addEventListener('click',function(){
    hide.classList.remove('hidden');
    hamclse.classList.remove('hidden');
    nav.classList.add('hidden');
})
hamclse.addEventListener('click',function(){
    hide.classList.add('hidden');
    hamclse.classList.add('hidden');
    nav.classList.remove('hidden');
})

//Dark Mode

white.addEventListener('click',function(){
    dark.classList.remove('hidden');
    white.classList.add('hidden');
    mainDark.classList.add('dark_main');
})
dark.addEventListener('click',function(){
    dark.classList.add('hidden');
    white.classList.remove('hidden');
    mainDark.classList.remove('dark_main');
})
