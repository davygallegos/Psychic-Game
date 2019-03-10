/* varaibles for computer choices and user choices
also for links with html <screen. Reference Rockpapersciss5*/
var alphaThings = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var win = 0;
var losses = 0;
var guessleft = 10;
var guessEd = []

var winsTex = document.getElementById("wins-text");
var lossTex = document.getElementById("lose-text");
var guessesText = document.getElementById("guess-text");
var guessEdText = document.getElementById("soFar");


var computerGuess = alphaThings[Math.floor(Math.random() * alphaThings.length)];
console.log(computerGuess)
//create functions
document.onkeyup = function (event) {

    // variables used within the fuction
    var userGuess = event.key;
    console.log(userGuess)

    // create the if, else if and else 

    if (userGuess === computerGuess) {
        win++;
         //I'M GOING CRAZY WITH LINE 30 AND 29 ERRORS. it was working on the html, now i screwed it up!
    } else (userGuess != computerGuess)
        losses--;

    //display the goods
    winsTex.textContent = "You won fool = " + win;
    lossTex.textContent = "You lost moron! = " + losses;
}