let numInput;
let numGen = Math.floor(Math.random() * 10);


startGame();


function startGame() {
let numInput = prompt('pick a number!');
const num = parseInt(numInput);

function numCheck() {
if (num === numGen) {
    alert('You were right!');
} else if (num > numGen) {
        alert('You guessed too high!');
        prompt('pick a number!');
        function numCheck()
        
} else if (num < numGen) {
        alert('You guessed too low!')
        prompt('pick a number!');
        function numCheck()
}
}
}
