'use strict'
const btn = document.querySelector('input')
console.log(btn);
btn.addEventListener("click", e=>{
    const rem = document.querySelector('.wrapper')
    rem.remove()
})
btn.addEventListener("click", e=>{
    const rem = document.querySelector('div.wrapper');
    const cr = document.createElement("div");
    cr.classList.add('GlavTxt')
    cr.textContent = 'Всё нету саитаэ'
    document.body.append(cr)
    console.log(rem);
})