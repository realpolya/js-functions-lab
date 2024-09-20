/* TAMAGOTCHI
Pseudocode:

1) Define the required variables used to track the state of the game.

2) Store cached element references.

3) Upon loading, the game state should be initialized, and a function should 
    be called to render this game state.

4) The state of the game should be rendered to the user.

5) Handle the game over logic. 

6) Handle each instance of a player clicking a button with the use of a 
    `handleClick()` function.

7) Create reset functionality.


*/

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}

let timer;

let gameOver;

/*------------------------ Cached Element References ------------------------*/

const bodyEl = document.querySelector("body");

const boredomEl = document.getElementById("boredom-stat");
const hungerEl = document.getElementById("hunger-stat");
const sleepEl = document.getElementById("sleepiness-stat");

const playButton = document.getElementById("play");
const feedButton = document.getElementById("feed");
const sleepButton = document.getElementById("sleep");

const messageEl = document.querySelector("#message");

const resetButton = document.getElementById("reset-button");
console.log(messageEl);

/*-------------------------------- Functions --------------------------------*/

const init = () => {
    
}

/*----------------------------- Event Listeners -----------------------------*/

// window.onload(init());
