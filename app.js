let numInput;
let count = 0;
let log = []
let numGen = Math.floor(Math.random() * 10); 
let playAgain;

alert('Welcome to what should be a working guessing game!')
letsPlay();

function letsPlay() {
        startGame()
}

function startGame() {
let numInput = prompt('pick a number!');
const num = parseInt(numInput);

if (!Number.isInteger(num)) {
        alert('That is not a number!');
        startGame()
} else if (num === numGen) {
    alert('You were right!');
    count++
    log.push(num);
    alert('you got the answer in ' + count + ' tries, and your guess history is ' + log + '!');
    playAgain();
} else if (num > numGen) {
        alert('You guessed too high!');
        count++
        log.push(num);
        startGame();
} else if (num < numGen) {
        alert('You guessed too low!')
        count++
        log.push(num);
        startGame();
}
}

function playAgain() {
        let playAgain = prompt('Would you like to play again?');
        if (playAgain == 'yes') {
                letsPlay();
        } else {
                continue;
}
}