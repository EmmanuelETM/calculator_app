// Global Variables
let num1 = null;
let num2 = null;
let op1 = null;
let op2 = null;
let result = null;
let screenValue = '0';

// Query selectors for the html elements
const buttons = document.querySelector('.calc-buttons')
const clearButton = document.querySelector('.AC');
const equal = document.querySelector('.equal');
const point = document.querySelector('.point');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

// Math Functions
const add = (x, y) => x + y;
const subtract = (x, y) =>  x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => y !== 0 ? x / y : 'Wack Division';

const operator = (x, y, op) => {
    if (op === '+') return add(x, y);
    else if (op === '-') return subtract(x, y);
    else if (op === '*') return multiply(x, y);
    else if (op === '/') return divide(x, y);
    else return 'Error';
}

// Calc Functions
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


