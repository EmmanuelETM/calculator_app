import { operator } from './math.js';

let num1 = null;
let num2 = null;
let op1 = null;
let op2 = null;
let result = null;
let screenValue = '0';

const buttons = document.querySelector('.calc-buttons')
const clearButton = document.querySelector('.AC');
const equal = document.querySelector('.equal');
const point = document.querySelector('.point');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

const clearScreen = () => {
    num1 = null;
    num2 = null;
    op1 = null;
    op2 = null;
    result = null;
    screenValue = '0';
}

const updateScreen = () => {
    const screen = document.querySelector('.calc-screen');
    screen.innerText = screenValue;
    // if (screenValue.length > 44) {
    // }
}

updateScreen();


