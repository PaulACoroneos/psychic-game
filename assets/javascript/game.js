//initialize global vars to game
var guessArr = [];  //guess array
var wins =0;
var losses =0;
var totalGuesses = 10;  

document.onkeyup = function(event){

    var key = event.key;    //capture key pressed by user

    //error checking block + input conditioning
    if(!isNaN(key)){  //is the entry a number?
        alert("You have entered a number. Please select an english character");
        break;
    }
    if(key.match(/^[!@#$%^&*()?><:"';]/)) {//regex to check if common punctuation was used
        alert("You have entered a punctuation mark. Please select an english character");
        break;
    }
    if(guessArr.indexOf(key) !== -1)    //did the user already guess the entered character?
    {
        alert("You have already guessed " + key +". Please guess another character.");
        break;
    }
    else //user guessed something new that wasn't guessed before
    {
        guessArr.push(key); //add user guess to array of used guesses
        totalGuesses--; //decrement total guesses counter
    }

    //end error checkng block +input conditioning

    //Logic of
}