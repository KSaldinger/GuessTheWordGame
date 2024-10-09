
const guessedLettersSection = document.querySelector(".guessed-letters");// ul where guesses appear
const guessButton = document.querySelector(".guess")  //Guess button
const letterInput = document.querySelector(".letter");  //text input where letter will be typed
const inProgress = document.querySelector(".word-in-progress");  // where word will appear
const remaining = document.querySelector(".remaining");  // remaining guesses will display
const guessesLeft = document.querySelector("span");
const message = document.querySelector(".message");   /// where message will appear
const againButton = document.querySelector(".play-again");  // play again button

const word = "magnolia"; // starting word 
const guessedLetters = [];

//////////   Placeholders for the letters/word   /////
const updateWord = function (word) {
    const mysteryWord = [];

    for (let mystery of word){
        console.log(mystery);
        mysteryWord.push("●");
    };
    inProgress.innerText = mysteryWord.join("");
};
updateWord(word);


///////////  Guest Button clicked  //////////////
guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    message.innerText = ""; //clear the message element/paragragh/section //

    const letter = letterInput.value; // grab what's entered //
    //console.log(guessInput);

    const goodLetter = validateInput(letter); // make sure its a letter and only 1 letter entered - our function below ///

    if (goodLetter) {
        //We have a letter! Let's guess!!
        makeGuess(letter);
    }
    letterInput.value = "";
});

//////////   Validate the input = 1 letter only  ///////////
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0){
        // is the input empty?
        message.innerText = "Please enter a letter from A to Z.";
    } else if (input.length > "1" ) {
        // is there more than 1 letter entered?
        message.innerText = "Please enter 1 letter.";
    } else if (!input.match(acceptedLetter)) {
        // Did you type anything other than a letter?
        message.innerText = "Please enter a letter between A and Z.";
    } else {
        /// Finally, 1 letter was entered!! yay!
        return input;
    }
};


///////  Function to capture the input //////
const makeGuess = function(letter) {
    letter = letter.toUpperCase(); // convert to uppercase
        if (guessedLetters.includes(letter)){ // check if duplicate letter already entered
            message.innerText = "You already guessed that letter, try another one."
        } else {
            guessedLetters.push(letter);
            console.log(guessedLetters);
        }   
};