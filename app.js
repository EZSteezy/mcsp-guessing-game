let numInput;
let numGen = Math.floor(Math.random() * 10);
let count = 0;

alert('Welcome to what should be a working guessing game!')
startGame();

function startGame() {
let numInput = prompt('pick a number!');
let log = []
const num = parseInt(numInput);

if (num === numGen) {
    alert('You were right!');
    count++
    log.push(num);
    alert('you got the answer in ' + count + ' tries, and these were your guesses ' + num);

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