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
let winXO;
let winner = false;
let tie = false;
let boxChoice;
let winColor = "white";

/*------------------------ Cached Element References ------------------------*/

const resetButton = document.getElementById('reset')

const sqrEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const boardEl = document.querySelector('.board');

/*-------------------------------- Functions --------------------------------*/

// renders info to page
const render = () => {
    updateBoard();
    updateMessage();
}

// render board
const updateBoard = () => {
    // update each cell
    let i = 0;
    sqrEls.forEach((sqr) => {
        sqr.textContent = board[i];
        i++;
    });
}

// update message
const updateMessage = () => {
    if (winner === false && tie === false) {
        messageEl.textContent = `It is ${turn}'s turn now`;
    } else if (tie === true) {
        messageEl.textContent = 'It is a tie';
    } else if (winner === true) {
        messageEl.textContent = `We have a winner: ${winXO}!!!`;
    }
}

// handle click, add square to the array
const handleClick = (e) => {
    console.log("CLick is clicked");

    boxChoice = e.target.id;

    if (e.target.classList.contains("sqr") && e.target.style.backgroundColor !== "lemonchiffon") {
        // assign turn to box
        board[boxChoice] = turn;

        // change turn
        changeXO();

        // change color of that box
        // if already won / tie, no need to change color
        if (winner || tie) {
            console.log("winner is ", winner);
        } else {
            e.target.style.backgroundColor = "lemonchiffon";
        }

    } else {
        console.log("click did not target a square");
    }

    // check for winner
    checkForWinner();

    // check for tie;
    checkForTie();

    freeze();

    render();
}

// check for winner
const checkForWinner = () => {
    winCombos.forEach((combo) => {
        let a = board[combo[0]];
        let b = board[combo[1]];
        let c = board[combo[2]];

        if (a !== undefined && a === b && a === c) {
            console.log("found a winner")
            winner = true;
            winXO = a;

            // change color of the winning combo
            combo.forEach((digit) => {
                sqrEls[digit].style.backgroundColor = winColor;
            })

        } 
    });
}

// change for tie
const checkForTie = () => {
    checkForWinner();
    if (winner) {
        console.log("winner is found");
    } else if (board.includes(undefined) || board.length < 9) {
        console.log("game is still being played");
    } else {
        tie = true;
        console.log("tie is set to true");;
    }
}

// change turn
const changeXO = () => {
    if (turn === "X") {
        turn = "O";
    } else if (turn === "O") {
        turn = "X";
    }
}

// render page
const init = () => {
    console.log("The app loads");
    render();
}

// clear game
const clear = () => {
    board.length = 0;
    location.reload();
}

// freeze object after win / tie
const freeze = () => {
    if (winner || tie) {
        Object.freeze(board);
        sqrEls.forEach((sqr) => {
            sqr.disabled = true;
        })
    }
}

/*----------------------------- Event Listeners -----------------------------*/

init();
boardEl.addEventListener('click', handleClick);
resetButton.addEventListener('click', clear);


