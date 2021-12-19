
let randomTurn = Math.floor(Math.random() * 10) + 1;

const formElement = document.getElementById("form");
const inputName1 = document.getElementById("player-1-name");
const inputName2 = document.getElementById("player-2-name");
const tossButton = document.getElementById("toss-btn");
const boardGame = document.getElementById("board");
gameGrid();
let gameOver = false;
const boxText = document.getElementsByClassName("box-text");
let turn = "X";
const box1 = document.getElementById("box-0");
const box2 = document.getElementById("box-1");
const box3 = document.getElementById("box-2");
const box4 = document.getElementById("box-3");
const box5 = document.getElementById("box-4");
const box6 = document.getElementById("box-5");
const box7 = document.getElementById("box-6");
const box8 = document.getElementById("box-7");
const box9 = document.getElementById("box-8");
let count = 1;         // this count will use for draw strategy
let information = document.getElementById("info");
const resetBtn = document.getElementById("reset-button");

formElement.addEventListener("click", function (event) {
    event.preventDefault();
});

tossButton.addEventListener("click", pick);

function pick(event) {
    let guest1 = document.getElementById("player-1-name");
    let guest2 = document.getElementById("player-2-name");
    if (randomTurn % 2 == 0) {           // if the randomTurn is even
        document.getElementById("nameX").innerHTML = guest1.value;
        document.getElementById("nameO").innerHTML = guest2.value

    } else {                             // if the randomTurn is odd
        document.getElementById("nameX").innerHTML = guest2.value;
        document.getElementById("nameO").innerHTML = guest1.value;
    };

    guest1.value = "";              // removing the guest1 and guest2 names after click the toss button
    guest2.value = "";
}

function gameGrid() {
    for (let i = 0; i < 9; i++) {   // use for loop as we have 9 box in grid 

        let div = document.createElement("div");
        div.setAttribute("class", "cell");

        let span = document.createElement("span");
        span.setAttribute("class", "box-text");
        span.setAttribute("id", `box-${i}`);       

        div.append(span);

        boardGame.append(div);
    }
}

function changeTurn() {
    if (turn === "X") {
        turn = "O";
    } else {
        turn = "X"
    }
}

boardGame.addEventListener("click", selected);

function selected(event) {              // here we are targeting individual box "first child". In our case, "span"
                                        // is the first child of every box.
   

    const individual = event.target.children[0];
    if (individual.innerText === "") {
        individual.innerText = turn; 
        winningTheGame();
        changeTurn();
        if (!gameOver) {
            information.innerText = turn + " " + "to play";
        }
    }
    count++
}


function checkDiagonal() {      //Diagonal check is one of the winning strategy 

    const diagonalStartFromTopLeft = (box1.innerText === turn) &&  (box5.innerText === turn) && (box9.innerText === turn);
    const diagonalStartFromTopRight = (box3.innerText === turn) && (box5.innerText === turn) && (box7.innerText === turn);
    
    if (diagonalStartFromTopLeft) {
        gameOver = true;
        information.innerText = box1.innerText + " " + "WON!!!";
        boardGame.removeEventListener("click", selected, false);

    } else if (diagonalStartFromTopRight) {
        gameOver = true;
        information.innerText = box3.innerText + " " + "WON!!!";
        boardGame.removeEventListener("click", selected, false);
    }

    return diagonalStartFromTopLeft || diagonalStartFromTopRight
}

function checkVertical () {     // Vertical check is one of the winning strategy

    const verticalFromLine1 = (box1.innerText === turn) &&  (box4.innerText === turn) && (box7.innerText === turn);
    const verticalFromLine2 = (box2.innerText === turn) &&  (box5.innerText === turn) && (box8.innerText === turn);
    const verticalFromLine3 = (box3.innerText === turn) &&  (box6.innerText === turn) && (box9.innerText === turn);

    if (verticalFromLine1) {
        gameOver = true;
        information.innerText = box1.innerText + " " + "WON!!!";
        boardGame.removeEventListener("click", selected, false);

    } else if (verticalFromLine2) {
        gameOver = true;
        information.innerText = box2.innerText + " " + "WON!!!";
        boardGame.removeEventListener("click", selected, false);

    } else if (verticalFromLine3) {
        gameOver = true;
        information.innerText = box3.innerText + " " + "WON!!!";
        boardGame.removeEventListener("click", selected, false);

    }

    return verticalFromLine1 || verticalFromLine2 || verticalFromLine3;
}

function checkHorizontal () {       // Horizontal check is one of the winnning strategy 

    const horizontalLine1 = (box1.innerText === turn) &&  (box2.innerText === turn) && (box3.innerText === turn);
    const horizontalLine2 = (box4.innerText === turn) &&  (box5.innerText === turn) && (box6.innerText === turn);
    const horizontalLine3 = (box7.innerText === turn) &&  (box8.innerText === turn) && (box9.innerText === turn);

    if (horizontalLine1) {
        gameOver = true;
        information.innerText = box1.innerText + " " + "WON!!!";
        boardGame.removeEventListener("click", selected, false);

    } else if (horizontalLine2) {
        gameOver = true;
        information.innerText = box4.innerText + " " + "WON!!!";
        boardGame.removeEventListener("click", selected, false);

    } else if (horizontalLine3) {
        gameOver = true;
        information.innerText = box7.innerText + " " + "WON!!!";
        boardGame.removeEventListener("click", selected, false);

    }

    return horizontalLine1 || horizontalLine2 || horizontalLine3;
}

function winningTheGame() {

        const diagonal = checkDiagonal();
        const vertical = checkVertical();
        const horizontal = checkHorizontal();

        if ( diagonal === false && vertical === false && horizontal === false && count === 9) { // if all 9 boxes have X or O character and none of winning strategy works,
                                                                                                // then count is equal to 9 and its a DRAW!!!  
            gameOver = true;
            information.innerText = "It's a DRAW!!!";
            boardGame.removeEventListener("click", selected, false);
        }

}

resetBtn.addEventListener("click", resetState);

function resetState() {
    box1.innerText = "";
    box2.innerText = "";
    box3.innerText = "";
    box4.innerText = "";
    box5.innerText = "";
    box6.innerText = "";
    box7.innerText = "";
    box8.innerText = "";
    box9.innerText = "";

    document.getElementById("nameX").innerText = "";
    document.getElementById("nameO").innerText = "";
    information.innerText = "";

    let newGame = prompt("Want to play again? Press Y/N");
    if (newGame.toUpperCase() === "Y") {                    // As we click reset button, all 9 boxes get empty and 
                                                            // set the turn value as "X" and Count = 1.
        gameOver = false;
        turn = "X";
        count = 1;
        boardGame.addEventListener("click", selected);
    } else {
        information.innerText = "Thank you for playing";
    }
}
