'use strict';
const nav = document.querySelector('.opn');
const hide = document.querySelector('.hidden');
const hamclse = document.querySelector('.close');

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

