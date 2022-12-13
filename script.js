const keys = document.querySelectorAll('button');
const space = document.querySelector('.display .main');
const temp = document.querySelector('.display .temp');
const operators = document.querySelectorAll('.operate');
const equal = document.querySelector('.equal')
let isReset = 'False';

keys.forEach(key =>
    key.addEventListener('click', () => display(key))
);

operators.forEach(operator => 
    operator.addEventListener('click', () => save(operator))
)

equal.addEventListener('click', () => operate(localStorage.getItem('operation'), localStorage.getItem('firstNum'), space.textContent)
)

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(operation, a, b) {
    if (operation === '+') {
        space.textContent = add(a,b)
    } else if (operation === '-') {
        space.textContent = subtract(a,b)
    }if (operation === '*') {
        space.textContent = multiply(a,b)
    } if (operation === '/') {
        space.textContent = divide(a,b)
    }
}

function reset() {
    space.textContent = 0;
    temp.textContent = ""
}

function display(btn) {
    let str = space.textContent;
    if (btn.className === 'backspace') {
        if (space.textContent.length <= 1) {
            reset()
        }
        else {
            space.textContent = str.substring(0, str.length - 1)
        }
    }
    else if (btn.className === 'delete') {
        reset();
    }
    else if (btn.className === 'digit') {
        if(isReset === 'True') {
            console.log('kir')
            space.textContent = ""
        }
        if (space.textContent == 0) {
            space.textContent = ""
        }
        space.textContent += btn.id;
        isReset = 'False'
    }
}

function save(op) {
    let a = space.textContent;
    let operation = op.id;
    temp.textContent = a + ' ' + operation
    localStorage.setItem('operation', op.id)
    localStorage.setItem('firstNum', a)
    isReset = 'True';
}




