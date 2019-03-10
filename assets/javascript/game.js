/* varaibles for computer choices and user choices
also for links with html <screen. Reference Rockpapersciss5*/
var alphaThings = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
'o','p','q','r','s','t','u','v','w','x','y','z'];

var win = 0;
var losses = 0;
var ties = 0;


var winsTex = document.getElementById("wins-text");
var lossTex = document.getElementById("lose-text");
var guessText= document.getElementById("guess-text");
var soFarText = document.getElementById("soFar");


var computerGuess = alphaThings[Math.floor(Math.random() * alphaThings.length)];
console.log (computerGuess)
//create functions
document.onkeyup = function(event) {

// variables used within the fuction
    var userGuess = event.key;
    console.log (userGuess)
        
// create the if, else if and else 
    if (userGuess===computerGuess) {
        win++;;
    } else {
        losses++;
    }
    
//display the goods
winsTex = "You won fool" + win;
lossTex = "You lost moron!" + losses;
ties = "We don't like ties"






    
}


