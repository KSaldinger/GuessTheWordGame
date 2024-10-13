
const guessedLettersSection = document.querySelector(".guessed-letters"); // ul where guesses appear
const guessButton = document.querySelector(".guess");  //Guess button
const letterInput = document.querySelector(".letter");  //text input where letter will be typed
const inProgress = document.querySelector(".word-in-progress");  // where word will appear
const remaining = document.querySelector(".remaining");  // remaining guesses will display
const guessesLeft = document.querySelector("span"); //span in paragraph
const message = document.querySelector(".message")  /// where message will appear
const againButton = document.querySelector(".play-again hide")  // play again button

const word = "magnolia"; // starting word 
const guessedLetters = [];

//////////   Placeholders for the letters/word   /////  const mysteryWord let mystery
const updateWord = function (word) {
    const mysteryWord = [];

    for (let mystery of word) {
        console.log(mystery);
        mysteryWord.push("●");
    };
    inProgress.innerText = mysteryWord.join("");
};
updateWord(word);
   



///////////  Guest Button clicked  ////////////// const letter & const goodLetter
guessButton.addEventListener("click", function(e) {
    e.preventDefault();

    const letter = letterInput.value; // grab what's entered //

    message.innerText = ""; /// empty the text//

    validateInput(input);
});



//////////   Validate the input = 1 letter only  /////////// const validateInput & const acceptedLetter
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;

        if (input.value === 0){ 
            // is the input empty?
            message.innerText = "Please enter a letter.";
        } else if (input.value > "1") {
        // is there more than 1 letter entered?
            message.innerText = "Please enter only 1 letter.";
        } else if (!input.match(acceptedLetter)){
        // Did you type anything other than a letter?
            message.innerText = "Please enter only letters A through Z.";
        } else {
        /// Finally, 1 letter was entered!! yay!
            return input;
        };
    };

///////  Function to capture the input ////// const makeGuess
const makeGuess = function (letter) {
    
}

// convert to uppercase
    // check if duplicate letter already entered




//////// Show the letters that have been guessed by player ///// 
const playersLetters = 