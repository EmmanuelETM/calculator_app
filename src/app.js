import { operator } from './math.js';

const calcState = {
    num1 : '',
    num2: '',
    op: '',
    result: '',

}

const handleClear = (state, screen) => {
    console.log('clear')
    state.num1 = '';
    state.num2 = '';
    state.op = '';
    state.result = '';
    screen.textContent = '';
}

const handleNumbers = (state, num) => {
    if(state.op === '') {
        state.num1 = num;

    }
    else {
        state.num2 = num;
    }
}

//we have work to do on this bitch

const handleOperators = (state, op, screen) => {
    if (state.num1 !== '') {
        if (state.num2 === '') {
            state.op = op
            screen.textContent = '';
            state.result = '';
        }
    }
    
    if (state.num2 !== '') {
        state.result = operator(state.num1, state.num2, state.op);
        screen.textContent = state.result
        state.num1 = state.result;
        state.num2 = '';
        state.op = op;
        state.result = '';
    }

    console.log(state)
}

const App = (calcState) => {
    const calcButtons = document.querySelector('.calc-buttons');
    const screenText = document.querySelector('.screen-text');
    const ACButton = document.querySelector('.AC');

    calcButtons.addEventListener('click', (event) => {
        if (event.target.classList.contains('num')) {
            screenText.textContent += event.target.textContent;
            handleNumbers(calcState, screenText.textContent)
            console.log(calcState);
        }

        if (event.target.classList.contains('op')) {
            handleOperators(calcState, event.target.textContent, screenText);
        }
    })

    ACButton.addEventListener('click', () => {handleClear(calcState, screenText)});
    
}


App(calcState);