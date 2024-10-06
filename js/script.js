const guessedLetters = document.querySelector(".guessed-letters");// ul where guesses appear
const guessButton = document.querySelector(".guess")  //Guess button
const letter = document.querySelector("#letter");  //text input where letter will be typed
const inProgress = document.querySelector(".word-in-progress");  // where word will appear
const remaining = document.querySelector(".remaining");  // remaining guesses will display
const guessesLeft = document.querySelector("span");
const message = document.querySelector(".message");   /// where message will appear
const againButton = document.querySelector(".play-again");  // play again button
const word = "magnolia"; // starting word 

//////////   Placeholders for the letters/word   /////
const updateWord = function (word) {
    const mysteryWord = [];

    for (let mystery of word){
        console.log(mystery);
        mysteryWord.push("●");
    }
    inProgress.innerText = mysteryWord.join("");
};
updateWord(word);


///////////  Guest Button clicked  //////////////
guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const guessInput = letter.value;
    console.log(guessInput);
})

