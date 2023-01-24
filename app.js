let userName;
let numInput;
let numGen = randomMath.floor(Math.random() * 10);


startGame();


function startGame() {

let numInput = prompt('pick a number!');
const num = parseInt(numInput);
if (num === numGen) {
    alert('You were right!');
} else if (num > numGen) {
    alert('You guessed too high!');
} else if (num > numGen) {
    alert('You guessed too low!')
}
}

