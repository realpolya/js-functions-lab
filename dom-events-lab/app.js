/*-------------------------------- Constants --------------------------------*/

const bodyEl = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const displayEl = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/

const numberOne = [];
const numberTwo = [];
const events = [];
let numberResult = 0;
let functionToPerform;;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (e) => {

    // add event to the array
    recordEvents(e.timeStamp, e.target.innerText, e.target.classList);

    // length & establish precedeing event
    let lastIndex = events.length - 2;
    let lastEvent = "None";

    if (lastIndex < 0) {
        console.log("First event");
    } else {
        lastEvent = events[lastIndex].class[1];
    }

    // cycle through the array to see if the operator was in it
    let operatorInArray = false;
    events.forEach((eventful) => {
        if (eventful.class[1] === 'operator') {
            operatorInArray = true;
        }
    })

    // if number
    if (e.target.classList.contains('number')) {

        // obtain number
        let number = e.target.innerText;

        // if events included operator, add to numberTwo
        if (operatorInArray === true) {
            numberTwo.push(number);
            let numTwo = numberTwo.join('');
            displayEl.textContent = `${numTwo}`;
        } 

        // if no event before was operator, add to numberOne
        else {
            numberOne.push(number);
            let numOne = numberOne.join('');
            displayEl.textContent = `${numOne}`;
        }

        console.log("Number 1 is: ", numberOne);
        console.log("Number 2 is: ", numberTwo);
    }

    if (e.target.classList.contains('equals')){
        
        let numOne = numberOne.join('');
        let numTwo = numberTwo.join('');

        // Show result based on the operation
        if (functionToPerform === "subtraction") {
            numberResult = subtract(numOne, numTwo);
        } else if (functionToPerform === "addition") {
            numberResult = addition(numOne, numTwo);
        } else if (functionToPerform === "multiplication") {
            numberResult = multiply(numOne, numTwo);
        } else if (functionToPerform === "division") {
            numberResult = division(numOne, numTwo);
        } else {
            numberResult = 0;
        }
        
        // round the result to 2 decimals
        numberResult = Math.round(numberResult * 100) / 100;
        displayEl.textContent = `${numberResult}`;

        // clear
        functionToPerform = undefined;
        events.length = 0;
        numberOne.length = 0;
        numberTwo.length = 0;
    }

    if (e.target.innerText === "-"){
        // Subtraction
        functionToPerform = "subtraction";
    }

    if (e.target.innerText === "+"){
        // Addition
        functionToPerform = "addition";
    }

    if (e.target.innerText === "/"){
        // Division
        functionToPerform = "division";
    }

    if (e.target.innerText === "*"){
        // Multiplication
        functionToPerform = "multiplication";
    }

    if (e.target.innerText === "C"){
        // Clear
        functionToPerform = undefined;
        events.length = 0;
        numberOne.length = 0;
        numberTwo.length = 0;
        displayEl.textContent = `0`;
    }
});

/*-------------------------------- Functions --------------------------------*/

function recordEvents(timeStamp, keyPressed, nameOfClass) {
    events.push({timestamp: timeStamp, key: keyPressed, class: nameOfClass});
}

function subtract(a, b) {
    return a - b;
};

function addition(a, b) {
    return (+a + +b);
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}