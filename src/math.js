const add = (x, y) => x + y;
const subtract = (x, y) =>  x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => y !== 0 ? x / y : 'Wack Division';

const operator = (x, y, op) => {
    if(op === '+') return add(x, y);
    else if (op === '-') return subtract(x, y);
    else if (op === '*') return multiply(x, y);
    else if (op === '/') return divide(x, y);
    else return 'Error';
}

export { operator };
