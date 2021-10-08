/**
Orientation - JavaScript assignment 1
Solution by: Giao Ngo
*/

// Define variables in global scope.
let throwTime = 0;
let coinShowHistory = [];
let userChoiceHistory = [];
let winningPoint = 0;
let head = 0;
let reverse = 0;
let coinShow= "";

// Get references to html element with ids.
const resultParagraph = document.querySelector("#result");
const coinImage = document.querySelector("#coin-image");
const button = document.querySelector("#throw-button");
const winCount = document.getElementById("win-count");
const resultHistory = document.querySelector("#result-history");
const headCount = document.getElementById("head-count");
const reverseCount = document.getElementById("reverse-count");


// Add functionality to button by biinding a button click event and a listerner function. 
button.addEventListener("click",throwCoin);

/* Define main function throwCoin() for reading user's input value and executing three nested 
supporting functions. */  
function throwCoin() {
    throwTime++;
    const userChoice = document.querySelector('input[name="user-choice"]:checked').value;
    console.log("User Choice is: ", userChoice);
    checkCoinShow();
    compareUserChoice(userChoice);
    statisticMaking(userChoice);
    return;
}

// Define supporting function for checking coin display after throwing with Math.random()
function checkCoinShow() {
    let randNum = Math.floor(Math.random() * 10 + 1);
    if (randNum <= 5) {
        coinShow = "head";
        coinImage.src="image/head.png";
        head++;
    } else { 
        coinShow = "reverse";
        coinImage.src="image/reverse.png";
        reverse++;
    }
    console.log("Coin display is:", coinShow);
    return coinShow;
}

/* Define supporting function for comparing coin display with user's choice, display the guess 
result on the screen and add winningPoint if getting correct guess. */
function compareUserChoice(userChoice) {
    if(coinShow === userChoice) {
        winningPoint++;
        resultParagraph.innerText = "Correct Guess!! You Win";;
        resultParagraph.style.backgroundColor = "yellow";
    } else {
        resultParagraph.innerText = "Wrong Guess!! Please throw again";;
        resultParagraph.style.backgroundColor = "#FBCBCB";
    }
    return winningPoint;
}

// Define supporting function for making statistic and history. 
function statisticMaking(userChoice) {
    // Add content for amount of wins
    winCount.textContent = `Amount of Winning: ${winningPoint}`;
    
    /* Push the coin display's result and user choice to seperated arrays. 
    Create the span element and Add the last index value of each array as content to span. 
    Append the span to result history paragraph */
    coinShowHistory.push(coinShow);
    userChoiceHistory.push(userChoice);
    const span = document.createElement("span");
    span.textContent = `${throwTime}) Coin Flip's Result:  
    ${coinShowHistory[coinShowHistory.length - 1]}.  
    User's Guess: ${userChoiceHistory[userChoiceHistory.length - 1]}`;
    span.style.display = "block";
    resultHistory.appendChild(span);

    // Add content for amount of head and reverse
    headCount.textContent = `Head Count: ${head}`;
    reverseCount.textContent= `Reverse Count: ${reverse}`;   
}

