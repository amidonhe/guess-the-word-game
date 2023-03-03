const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesNumber = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector("play-again hide");

const word = "magnolia";
const guessedLettersArray = [];

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const guessInput = letterInput.value;
    const validGuess = validateInput(guessInput);
    //console.log(guessInput);
    if (validGuess) {
        makeGuess(guessInput);
    }
    letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length != 1) {
        message.innerText = "Please enter one letter per turn.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a valid character.";
    } else {
        return input;
    }
};

const makeGuess = function (guessInput) {
    guessInput = guessInput.toUpperCase();
    if (guessedLettersArray.includes(guessInput)) {
        message.innerText = "You already guessed that letter. Try again.";
    } else {
        guessedLettersArray.push(guessInput);
        console.log(guessedLettersArray);
    }
};