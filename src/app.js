import { operator } from './math.js'


const calcButtons = document.querySelector('.calc-buttons');
const screenText = document.querySelector('.screen-text');
const ACButton = document.querySelector('.AC');


let num1 = 10;
let num2 = 5;
let op = '/';
let screenValue = '';


calcButtons.addEventListener('click', (event) => {
    if(event.target.classList.contains('num')) {
        screenText.textContent += event.target.textContent;
        screenValue = screenText.textContent;
    }
})

ACButton.addEventListener('click', (event) => {
    screenText.textContent = '';
    screenValue = '';
    num1 = '';
    num2 = '';
    op = '';
})