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

const dcalc = document.querySelector('.calc')
const sel = document.querySelectorAll('.top')
let count = 0;
const calc = document.createElement('p');
calc.textContent = count; 
dcalc.append(calc);

for(let i = 0; i < sel.length; i++){
    sel[i].addEventListener('click', e => {
        count++;
        calc.textContent = count;
    })
}//     дефолт калькулятор