let numInput;
let numGen = Math.floor(Math.random() * 10);


startGame();


function startGame() {

let numInput = prompt('pick a number!');
const num = parseInt(numInput);
guessCheck();
}


function guessCheck() {

if (num === numGen) {
    alert('You were right!');
} else if (num > numGen) {
    alert('You guessed too high!');
    guessCheck();
} else if (num > numGen) {
    alert('You guessed too low!')
    guessCheck();
}
}

