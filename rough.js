let randomTurn = Math.floor(Math.random() *10) +1;

const formElement = document.getElementById("form");
const inputName1 = document.getElementById("player-1-name");
const inputName2 = document.getElementById("player-2-name");
const goButton = document.getElementById("go-btn");
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
let count = 1;
let information = document.getElementById("info");
const resetBtn = document.getElementById("reset-button");

formElement.addEventListener("click", function (event) {
    event.preventDefault();
    //console.log("hello");
});

goButton.addEventListener("click", pick);

function pick (event) {
    let guest1 = document.getElementById("player-1-name");
    let guest2 = document.getElementById("player-2-name");
    if (randomTurn % 2 == 0) {
        document.getElementById("nameX").innerHTML = guest1.value;
        document.getElementById("nameO").innerHTML = guest2.value
    } else {
        document.getElementById("nameX").innerHTML = guest2.value;
        document.getElementById("nameO").innerHTML = guest1.value;
    };
    
   guest1.value = "" ;
   guest2.value = "";
}

function gameGrid () {
    for (let i = 0; i < 9; i++) {

        let div = document.createElement("div");
        div.setAttribute("class", "cell");

        let span = document.createElement("span");
        span.setAttribute("class", "box-text");
        span.setAttribute("id", `box-${i}`);

        div.append(span);

        boardGame.append(div);
    }
}

function changeTurn () {
    if (turn === "X") {
         turn = "O";
    } else {
        turn = "X"
    }
}

boardGame.addEventListener("click", selected);

 function selected (event) {

    const individual = event.target.children[0];
    if (individual.innerText === "") {
        individual.innerText = turn;
        changeTurn();
        winningTheGame();
        //drawTheGame();
        if(!gameOver) {
        information.innerText = "Its time for" + " " + turn;
        }
    }
 }


function winningTheGame () {
    if (count<=8) {
    
    if((box1.innerText === box2.innerText) && (box2.innerText === box3.innerText) && (box3.innerText !== "")) {
        gameOver = true;
        information.innerText = box1.innerText + " " + "WON!!!";
    
    } else if ((box4.innerText === box5.innerText) && (box5.innerText === box6.innerText) && (box6.innerText !== "")) {
        gameOver = true;
        information.innerText = box4.innerText + " " + "WON!!!";

    } else if ((box7.innerText === box8.innerText) && (box8.innerText === box9.innerText) && (box9.innerText !== "")) {
        gameOver = true;
        information.innerText = box7.innerText + " " + "WON!!!";

    } else if ((box1.innerText === box4.innerText) && (box4.innerText === box7.innerText) && (box7.innerText !== "")) {
        gameOver = true;
        information.innerText = box1.innerText + " " + "WON!!!";

    } else if ((box2.innerText === box5.innerText) && (box5.innerText === box8.innerText) && (box8.innerText !== "")) {
        gameOver = true;
        information.innerText = box2.innerText + " " + "WON!!!";

    } else if ((box3.innerText === box6.innerText) && (box6.innerText === box9.innerText) && (box9.innerText !== "")) {
        gameOver = true;
        information.innerText = box3.innerText + " " + "WON!!!";

    } else if ((box1.innerText === box5.innerText) && (box5.innerText === box9.innerText) && (box9.innerText !== "")) {
        gameOver = true;
        information.innerText = box1.innerText + " " + "WON!!!";

    } else if ((box3.innerText === box5.innerText) && (box5.innerText === box7.innerText) && (box7.innerText !== "")) {
        gameOver = true;
        information.innerText = box3.innerText + " " + "WON!!!";

     } 
     count++;
    } else {
        information.innerText = "It's a DRAW";
    }

     //else if ((box1.innerText !== box2.innerText || box2.innerText !== box3.innerText) && 
    //            (box4.innerText !== box5.innerText || box5.innerText !== box6.innerText) &&
    //            (box7.innerText !== box8.innerText || box8.innerText !== box9.innerText) &&
    //            (box1.innerText !== box4.innerText || box4.innerText !== box7.innerText) &&
    //            (box2.innerText !== box5.innerText || box5.innerText !== box8.innerText) &&
    //            (box3.innerText !== box6.innerText || box6.innerText !== box9.innerText) &&
    //            (box3.innerText !== box5.innerText || box5.innerText !== box7.innerText) &&
    //            (box1.innerText !== box5.innerText || box5.innerText !== box9.innerText))   {
    //     information.innerText = "It's a DRAW. Good Game";
    // }

}

// function drawTheGame() {
//    // document.querySelectorAll(".box-text").innerText !== ""; OR
//    box1.innerText !== "";
//    box2.innerText !== "";
//    box3.innerText !== "";
//    box4.innerText !== "";
//    box5.innerText !== "";
//    box6.innerText !== "";
//    box7.innerText !== "";
//    box8.innerText !== "";
//    box9.innerText !== "";

//           if  ((box1.innerText !== box2.innerText || box2.innerText !== box3.innerText) && 
//                (box4.innerText !== box5.innerText || box5.innerText !== box6.innerText) &&
//                (box7.innerText !== box8.innerText || box8.innerText !== box9.innerText) &&
//                (box1.innerText !== box4.innerText || box4.innerText !== box7.innerText) &&
//                (box2.innerText !== box5.innerText || box5.innerText !== box8.innerText) &&
//                (box3.innerText !== box6.innerText || box6.innerText !== box9.innerText) &&
//                (box3.innerText !== box5.innerText || box5.innerText !== box7.innerText) &&
//                (box1.innerText !== box5.innerText || box5.innerText !== box9.innerText))   {
//         information.innerText = "It's a DRAW. Good Game";
//     }
// }

resetBtn.addEventListener("click", resetState);

function resetState () {
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
}





function winningTheGame() {

// if (count <= 8) {

//     if ((box1.innerText === box2.innerText) && (box2.innerText === box3.innerText) && (box3.innerText !== "")) {
//         gameOver = true;
//         information.innerText = box1.innerText + " " + "WON!!!";

//     } else if ((box4.innerText === box5.innerText) && (box5.innerText === box6.innerText) && (box6.innerText !== "")) {
//         gameOver = true;
//         information.innerText = box4.innerText + " " + "WON!!!";

//     } else if ((box7.innerText === box8.innerText) && (box8.innerText === box9.innerText) && (box9.innerText !== "")) {
//         gameOver = true;
//         information.innerText = box7.innerText + " " + "WON!!!";

//     } else if ((box1.innerText === box4.innerText) && (box4.innerText === box7.innerText) && (box7.innerText !== "")) {
//         gameOver = true;
//         information.innerText = box1.innerText + " " + "WON!!!";

//     } else if ((box2.innerText === box5.innerText) && (box5.innerText === box8.innerText) && (box8.innerText !== "")) {
//         gameOver = true;
//         information.innerText = box2.innerText + " " + "WON!!!";

//     } else if ((box3.innerText === box6.innerText) && (box6.innerText === box9.innerText) && (box9.innerText !== "")) {
//         gameOver = true;
//         information.innerText = box3.innerText + " " + "WON!!!";

//     } else if ((box1.innerText === box5.innerText) && (box5.innerText === box9.innerText) && (box9.innerText !== "")) {
//         gameOver = true;
//         information.innerText = box1.innerText + " " + "WON!!!";

//     } else if ((box3.innerText === box5.innerText) && (box5.innerText === box7.innerText) && (box7.innerText !== "")) {
//         gameOver = true;
//         information.innerText = box3.innerText + " " + "WON!!!";

//     }
//     count++;
//     console.log('count', count)
// } else {
//     information.innerText = "It's a DRAW";
// }
}