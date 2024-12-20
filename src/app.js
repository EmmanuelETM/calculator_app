import { operator } from './math.js'

const handleClear = (state, screen) => {
    screen.textContent = '';
    state.num1 = '';
    state.num2 = '';
    state.op = '';
    state.result = '';
}

const handleNumbers = (state, number) => {
    if(state.op = ''){
        state.num1 = number;
    }else {
        state.num2 = number;
    }
    return state;
}

const handleOperators = (event, state) => {
    if (state.num1 != '' && state.num2 === '') {
        state.op = ''; //change
    }
    
    if (state.num2 != '') {
        state.result = operator(state.num1, state.num2, state.op);
    }
}

const handleCalcButtons = (event,) => {
    
}

const calcButtons = document.querySelector('.calc-buttons');
const screenText = document.querySelector('.screen-text');
const ACButton = document.querySelector('.AC');
const equalButton = document.querySelector('.equal');
const pointButton = document.querySelector('.point');

const calcState = {
    num1: '', 
    num2: '', 
    op: '',
    result: ''
}


calcButtons.addEventListener('click', (event) => {

})

ACButton.addEventListener('click', handleClear(calcState, screenText));


// pointButton.addEventListener('click', (event) => {
//     if(!screenText.textContent.includes('.')){
//         screenText.textContent += '.';
//     }
// })