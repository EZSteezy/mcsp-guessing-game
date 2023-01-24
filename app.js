let numInput;
let numGen = Math.floor(Math.random() * 10);
let count = 0

startGame();

function startGame() {
let numInput = prompt('pick a number!');
const num = parseInt(numInput);

if (num === numGen) {
    alert('You were right!');
    count++
    alert('you got the answer in ' + count + 'tries!');
} else if (num > numGen) {
        alert('You guessed too high!');
        count++
        startGame();
        
        
} else if (num < numGen) {
        alert('You guessed too low!')
        count++
        startGame();
}
}