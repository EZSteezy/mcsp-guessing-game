let numInput;
let userName;
let count = 0;
let log = []; 
let numGen = Math.floor(Math.random() * 10);; 

alert('Welcome to what should be a working guessing game!')
letsPlay();

function getUser() {
        let userName = prompt('Hello! What is your name?')
}

function letsPlay() {
        getUser()
        startGame()
}

function startGame() {
let numInput = prompt('pick a number!');
const num = parseInt(numInput);

if (!Number.isInteger(num)) {
        alert('That is not a number!');
        startGame()
} else if (num === numGen) {
    alert(username + ', you were right!');
    count++
    log.push(num);
    alert(userName + ', you got the answer in ' + count + ' tries, and your guess history is ' + log + '!');
    playAgain();
} else if (num > numGen) {
        alert('You guessed too high, ' + userName '!');
        count++
        log.push(num);
        startGame();
} else if (num < numGen) {
        alert('You guessed too low, ' + userName '!')
        count++
        log.push(num);
        startGame();
}
}

function playAgain() {
        let playAgain = prompt('Would you like to play again?');
        if (playAgain == 'yes') {
                emptyGuesses()
                count -= count;
                numGen = Math.floor(Math.random() * 10);
                letsPlay();
        } else if (playAgain == 'no') {
        } else {
                alert('That is not yes or no!');
                wrongAnswer();
}
}

function wrongAnswer() {
        playAgain()
}

function emptyGuesses() {
        while (log.length > 0) {
        log.shift();
        }
}