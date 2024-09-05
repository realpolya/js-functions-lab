/* tic tac toe
INSTRUCTIONS:

Minimal reqs:
- Display an empty tic-tac-toe board when the page is initially displayed.
- A player can click on the nine cells to make a move.
- Every click will alternate between marking an X and O.
- Display whose turn it is (X or O).
- The cell cannot be played again once occupied with an X or O.
- Provide win logic and display a winning message.
- Provide logic for a cat’s game (tie), also displaying a message.
- Provide a Reset Game button that will clear the contents of the board.

Pseudocode:
1) Define the required variables used to track the state of the game.

2) Store cached element references.

3) Upon loading, the game state should be initialized, and a function should 
be called to render this game state.

4) The state of the game should be rendered to the user.

5) Define the required constants.

6) Handle a player clicking a square with a `handleClick` function.

7) Create Reset functionality.

*/



/*-------------------------------- Constants --------------------------------*/

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

/*---------------------------- Variables (state) ----------------------------*/

const board = [];
let turn = "X";
let winner = false;
let tie = false;
let boxChoice;

/*------------------------ Cached Element References ------------------------*/

const resetButton = document.getElementById('reset')

const sqrEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');

/*-------------------------------- Functions --------------------------------*/


const render = () => {
    updateBoard();
    updateMessage();
}

const updateBoard = () => {
    // update each cell
    let i = 0;
    sqrEls.forEach((sqr) => {
        sqr.textContent = board[i];
        i++;
    });
}

const updateMessage = () => {
    if (winner === false && tie === false) {
        messageEl.textContent = `It is ${turn}'s now`;
    } else if (tie === true) {
        messageEl.textContent = 'It is a tie';
    } else {
        messageEl.textContent = 'We have a winner';
    }
}

const handleClick = (e) => {
    boxChoice = e.target.id;

    if (e.target.classList.contains("sqr")) {

    } else {
        console.log("click did not target a square");
    }

}

const init = () => {
    console.log("The app loads");
    render();
}
init();


/*----------------------------- Event Listeners -----------------------------*/


//sqrEls.addEventListener('click', handleClick());


