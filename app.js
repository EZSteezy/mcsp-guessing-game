let numInput;
let numGen = Math.floor(Math.random() * 10);
let count = 0;
let log = []

alert('Welcome to what should be a working guessing game!')
startGame();

function startGame() {
let numInput = prompt('pick a number!');
const num = parseInt(numInput);

if (num === numGen) {
    alert('You were right!');
    count++
    log.push(num);
    alert('you got the answer in ' + count + ' tries, and your guesses were ' + log + '!');

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