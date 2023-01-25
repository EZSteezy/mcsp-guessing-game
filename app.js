let numInput;
let count = 0;
let log = []; 
let numGen = Math.floor(Math.random() * 10);; 
let userName;
let userList = {};
let diff;

alert('Welcome to what should be a working guessing game!')
userCall();
startGame();

function userCall() {
        userName = prompt('Enter your username!');
        alert('Hello ' + userName + '!');
}

function startGame() {
        let numInput = prompt('Pick a number!');
        const num = parseInt(numInput);

if (!Number.isInteger(num)) {
        alert('That is not a number!');
        startGame()
} else if (num === numGen) {
        alert('You were right!');
        count++
        log.push(num);
        alert('Woah, ' + userName + ', you got the answer in ' + count + ' tries, and your guess history is ' + log + '!');
        guessCompare()
        logLastAttempt()
        playAgain();
} else if (num > numGen) {
        alert('Ouch! ' + userName + ', you guessed too high!');
        count++
        log.push(num);
        startGame();
} else if (num < numGen) {
        alert('Ouch! ' + userName + ', you guessed too low!')
        count++
        log.push(num);
        startGame();
}
}
function guessCompare() {
        if (count < userList.tries && userList.tries !== undefined && userList.user == userName) {
        diff = userList.tries - count;
        alert('Congratulations! You beat your last try by ' + diff + '!');
        }
}

function logLastAttempt() {
userList = {
        user: userName,
        tries: count
}
}

function playAgain() {
        let playAgain = prompt('Hey, ' + userName + ', would you like to play again?');
if (playAgain == 'yes') {
        emptyGuesses()
        count -= count;
        numGen = Math.floor(Math.random() * 10);
        startGame();
} else if (playAgain == 'no') {
} else {
        alert('That is not yes or no!');
        notYesOrNo();
}
}

function notYesOrNo() {
        playAgain()
}

function emptyGuesses() {
        while (log.length > 0) {
        log.shift();
        }
}