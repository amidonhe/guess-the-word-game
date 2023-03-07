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
        displayGuessedLetters();
        displayWordProgress(guessedLettersArray);
    }
};

const displayGuessedLetters = function () {
    guessedLetters.innerHTML = "";
    for (const letter of guessedLettersArray) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLetters.append(li);
    }
};

const displayWordProgress = function (guessedLettersArray) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    //console.log(wordArray);
    //note: while Vanna White is not a good variable name, but it is a funny one
    const vannaWhite = [];
    for (const letter of wordArray) {
        if (guessedLettersArray.includes(letter)) {
            vannaWhite.push(letter.toUpperCase());
        } else {
            vannaWhite.push("●");
        }
    }
    wordProgress.innerText = vannaWhite.join("");
    winCheck();
};

const winCheck = function () {
    if (word.toUpperCase() === wordProgress.innerText) {
      message.classList.add("win");
      message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
    }
};