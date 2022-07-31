let player1 = document.getElementById("imagen1");

//let player2 = document.getElementsByClassName("img2");

let player2 = document.getElementById("imagen2");

let result = document.querySelector("h1");

let dices = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
const rndInt = randomIntFromInterval(1, 6);

const rndInt2 = randomIntFromInterval(1, 6);

function aleaDice(){

    let first = rndInt;
    
    let second = rndInt2;

    if (first == 1){

        player1.src = dices[0];

    }

    if (first == 2){

        player1.src = dices[1];

    }

    if (first == 3){

        player1.src = dices[2];

    }

    if (first == 4){

        player1.src = dices[3];

    }

    if (first == 5){

        player1.src = dices[4];

    }

    if (first == 6){

        player1.src = dices[5];

    }
    if (second == 1){

        player2.src = dices[0];

    }

    if (second == 2){

        player2.src = dices[1];

    }

    if (second == 3){

        player2.src = dices[2];

    }

    if (second == 4){

        player2.src = dices[3];

    }

    if (second == 5){

        player2.src = dices[4];

    }

    if (second == 6){

        player2.src = dices[5];

    }

    

    if (first === second){
        result.innerHTML = "Draw!!";
        console.log("llega");
    }else if (first < second){
        result.innerHTML = "Player 2 Wins!!";
        console.log("llega2");
    }else {
        result.innerHTML = "Player 1 Wins!!";
        console.log("llega3");
    }
    
}

aleaDice();