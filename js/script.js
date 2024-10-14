
const guessedLettersSection = document.querySelector(".guessed-letters");// ul where guesses appear
const guessButton = document.querySelector(".guess")  //Guess button
const letterInput = document.querySelector(".letter");  //text input where letter will be typed
const inProgress = document.querySelector(".word-in-progress");  // where word will appear
const remaining = document.querySelector(".remaining");  // remaining guesses will display
const guessesLeft = document.querySelector("span");
const message = document.querySelector(".message");   /// where message will appear
const againButton = document.querySelector(".play-again");  // play again button

let word = "magnolia"; // starting word 
const guessedLetters = [];
let remainingGuesses = 8;

////////  get word  ////////
const getWord = async function () {
    const response = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    const wordArray = words.split("\n");
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    updateWord(word);
};
getWord();//// getting the game started with your random word


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
            howManyGuesses(letter);
            playersLetters();
            newestUpdate(guessedLetters);
        }   
};

//////// Show the letters that have been guessed by player /////
const playersLetters = function() {
    guessedLettersSection.innerHTML = ""; // clear the list first
    
    for (guesses of guessedLetters) {
        let listItem = document.createElement("li");
        listItem.innerText = guesses;
        guessedLettersSection.append(listItem);
        };
};

///////  update the Word In Progress  //////////
const newestUpdate = function (guessedLetters) {
    const wordUpper = word.toUpperCase();//change word to uppercase
    const wordArray = wordUpper.split("");// split word string into array of or for guessedLetters

    const updatedCharacters = [];
    for (let mathcingLetter of wordArray){
        if (guessedLetters.includes(mathcingLetter)) {
            updatedCharacters.push(mathcingLetter.toUpperCase());
        } else {
            updatedCharacters.push("●");
        }
    };
    inProgress.innerText = updatedCharacters.join("");
    ifWinner(); 
};
//console.log(newestUpdate);


////////////  Number of guesses left //////

const howManyGuesses = function (letter) {
    const upperWord = word.toUpperCase();

    if (!upperWord.includes(letter)) {
        // boo hoo, bad guess, loose a chance
        message.innerText = `The letter ${letter}, is not in your word.`;
        remainingGuesses -= 1;
    } else {
        message.innerText = `You guessed one correctly, your word has the letter ${letter}!`;
    }

    if (remainingGuesses === 0) {
        message.innerText = `Game over! You are out of guesses. The word was ${word}.`;
    } else if (remainingGuesses === 1) {
        guessesLeft.innerText = `${remainingGuesses} guess`;
    } else {
        guessesLeft.innerText = `${remainingGuesses} guesses`;
    }
};


///////// Did the player WIN the game???  ///////
const ifWinner = function() {
    if (word.toUpperCase() === inProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct the word! Congrats!</p>.`;
    };
};
