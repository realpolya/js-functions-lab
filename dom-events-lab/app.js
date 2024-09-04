/*-------------------------------- Constants --------------------------------*/

const bodyEl = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');

/*-------------------------------- Variables --------------------------------*/

const numberOne = [];
const numberTwo = [];
const events = [];
let numberResult = 0;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // function goes here
        console.log(e.target.innerText);
    })
}); */

calculator.addEventListener('click', (e) => {
    //console.log(e);

    // add event to the array
    recordEvents(e.timeStamp, e.target.innerText, e.target.classList);

    // length
    let lastIndex = events.length - 2;
    let lastEvent = "None";

    if (lastIndex < 0) {
        
        console.log("First event");

    } else {

        lastEvent = events[lastIndex].class[1];

    }

    // if number
    if (e.target.classList.contains('number')) {

        console.log(lastEvent);

        if (lastEvent === 'operator') {
            console.log("the one before was operator");
        }

        // Log number
        let number = e.target.innerText;
        numberOne.push(number);


    }

    if (e.target.classList.contains('equals')){
        // Show result

    }

    if (e.target.innerText === "-"){
        // Subtraction

    }

    if (e.target.innerText === "+"){
        // Addition

    }

    if (e.target.innerText === "/"){
        // Division
    }

    if (e.target.innerText === "*"){
        // Multiplication
    }

    if (e.target.innerText === "C"){
        // Clear
    }
});

/*-------------------------------- Functions --------------------------------*/

// select number keys
const numberSelector = (e) => {

}

function recordEvents(timeStamp, keyPressed, nameOfClass) {
    events.push({timestamp: timeStamp, key: keyPressed, class: nameOfClass});
    console.log(events);
}