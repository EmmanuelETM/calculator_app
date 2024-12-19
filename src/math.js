const add = (x, y) => x + y;
const substract = (x, y) =>  x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operator = (x, y, op) => {
    if(op === '+') return add(x, y);
    else if (op === '-') return substract(x, y);
    else if (op === '*') return multiply(x, y);
    else if (op === '/') return divide(x, y);
    else return 'Error';
}

export { operator };
