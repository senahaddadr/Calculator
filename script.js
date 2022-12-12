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
    if (e.target.id == 'back') {
        let str = space.textContent;
        if (str.length == 1) {
            space.textContent = '0';
        }
        else {
            space.textContent = str.substring(0, str.length - 1)
        };

    }
    else if (e.target.id == 'ac') {
        space.textContent = '0';
    }
    else {
    if (space.textContent == 0) {
        space.textContent = ""
    }
    space.textContent += number;
    }
}

numbers.forEach(number =>
    number.addEventListener('click', display)
)
