const keys = document.querySelectorAll('button');
const digits = document.querySelectorAll('.digit')
const space = document.querySelector('.display .main');
const temp = document.querySelector('.display .temp');
const operators = document.querySelectorAll('.operate');
const equal = document.querySelector('.equal')
let isReset = 'false';
let isPair = 'false';
let click = 0;
let operands = 0;

window.onbeforeunload = function() {
        localStorage.clear();
};

keys.forEach(key =>
    key.addEventListener('click', () => display(key), {once : false})
);

digits.forEach(key =>
    key.addEventListener('click', () => {operands = 1})
);

operators.forEach(operator => 
    operator.addEventListener('click', () => isPair= 'true')
)

operators.forEach(operator => 
    operator.addEventListener('click', () => remember(operator))
)

equal.addEventListener('click', () => operate(localStorage.getItem('operation'), localStorage.getItem('firstNum'), space.textContent)
)

equal.addEventListener('click', () => end())

function add(a,b) {
    return (+a)+(+b);
}

function subtract(a,b) {
    return (+a)-(+b);
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function end() {
    isPair = 'false'
    operands = 0;
    isReset = 'true'
}

function operate(operation, a, b) {
    if (operands === 1) {
        if (operation === '+') {
            space.textContent = add(a,b)
        } else if (operation === '-') {
            space.textContent = subtract(a,b)
        } else if (operation === '*') {
            space.textContent = multiply(a,b)
        } else if (operation === '/') {
            space.textContent = divide(a,b)
        }
        space.textContent = Math.round(space.textContent*100)/100
        temp.textContent = `${a} ${operation} ${b} =` ;
        localStorage.clear();
        if (operation == '/' && b == 0) {
            space.textContent = 'ERROR'
            temp.textContent = ''
            isReset='true'
        }
        return space.textContent
    } else {
        return space.textContent
    }
}

function reset() {
    space.textContent = 0;
    temp.textContent = ""
    localStorage.clear()
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
        if(isReset === 'true') {
            space.textContent = ""
        }
        if (space.textContent == 0) {
            space.textContent = ""
        }
        if (btn.className === 'point') {
            btn.addEventListener('click', () => display(btn), {once:true})
        }
        space.textContent += btn.id;
        isReset = 'false'
    }
}

function remember(op) {
    if (isPair === 'true') {
        let ans = operate(localStorage.getItem('operation'), localStorage.getItem('firstNum'), space.textContent)
        localStorage.setItem('firstNum', ans)
    } else {
        localStorage.setItem('firstNum', space.textContent)
    }
    localStorage.setItem('operation', op.id)
    temp.textContent = space.textContent + ' ' + op.id
    isReset = 'true';
    operands = 0;
}




