/* varaibles for computer choices and user choices
also for links with html <screen. Reference Rockpapersciss5*/
var alphaThings = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    
var correctGuesses = 0;
var incorrectGuesses = 0;
var guessleft = 10;
var guessEd = []

var winsTex = document.getElementById("wins-text");
var lossTex = document.getElementById("lose-text");
var guessesText = document.getElementById("guess-text");
var userGuessesEl = document.getElementById("user-guesses");

var computerGuess = alphaThings[Math.floor(Math.random() * alphaThings.length)];
console.log(computerGuess)
//create functions
document.onkeyup = function (event) {

    // variables used within the fuction
    var userGuess = event.key;
    console.log(userGuess)

    // create the if, else if and else 

    if (userGuess === computerGuess) {
        correctGuesses++;
    } else {
        incorrectGuesses--;
    }

    //display the goods
    winsTex.textContent = "You won fool = " + correctGuesses;
    lossTex.textContent = "You lost moron! = " + incorrectGuesses;
    userGuessesEl.append(userGuess); 
}