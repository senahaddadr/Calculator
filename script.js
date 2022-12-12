const numbers = document.querySelectorAll('.digit')


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

function operate(operator, a, b) {
    return operator(a, b);
}

function display(e) {
    const space = document.querySelector('.display');
    let number = e.target.textContent
    space.textContent = number;
}

numbers.forEach(number =>
    number.addEventListener('click', display)
)
