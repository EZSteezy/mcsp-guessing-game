let numInput;
let numGen = Math.floor(Math.random() * 10);
let count = 0;
let log = [];

alert('Welcome to what should be a working guessing game!')
startGame();

function startGame() {
let numInput = prompt('pick a number!');
const num = parseInt(numInput);

if (num === numGen) {
    alert('You were right!');
    count++
    log.push(num);
    alert('you got the answer in ' + count + ' tries!');
    alert('here are all of your guesses!' += log);

} else if (num > numGen) {
        alert('You guessed too high!');
        count++
        startGame();
        log.push(num);
        
} else if (num < numGen) {
        alert('You guessed too low!')
        count++
        startGame();
        log.push(num);
}
}