document.addEventListener("DOMContentLoaded", function () {
  // Adjusts the lower difficulty arrow to it's default position on load
  $("#lowerDifficultyArrow").prop("disabled", true);
  $("#lowerDifficultyArrow").css("opacity", ".5");
});

//  --------Event Listeners:
$("#navbarLink").on("click", homeScreenDisplay);
$("#navbarLink").on("click", turnOffListeners);
$("#playButton").on("click", gameScreenDisplay);
$("#enterButton").on("click", wordValidator);
$("#deleteButton").on("click", deleteLetter);
$("#clearButton").on("click", clearInput);
$("#clearButton").on("click", clearButtonSound);
$(".ready-button").on("click", difficultyTracker);
$("#navResetButton").on("click", difficultyTracker);
$("#settingsResetButton").on("click", difficultyTracker);
$("#settingsResetButton").on("click", settingsResetGameDisplay);
$(".back-to-game").on("click", difficultyTracker);
$("#muteButton").on("change", unmuteSound);
$("#volumeSlider").on("input", setVolume);
$("#lowerDifficultyArrow").on("click", lowerDifficulty);
$("#increaseDifficultyArrow").on("click", increaseDifficulty);
$(".letter-button").on("click", function findLetter() {
  // Finds ID of the letter button pushed to add it to the text input
  let inputId = this.id;
  addLetterToInput(inputId);
});

//  --------FUNCTIONS:

//  --Display Handling Functions:

function gameScreenDisplay() {
  // Displays the game screen and hides the menu
  $(".banner").css("display", "none");
  $(".home-menu-container").css("display", "none");
  $(".game-container").css("display", "block");
  $(".pre-game-rules").css("display", "block");
  // Ensure the correct difficulty settings  are being displayed
  homeScreenDifficultyCheck();

}

function settingsResetGameDisplay() {
  // Displays the game screen and hides the menu
  $(".banner").css("display", "none");
  $(".home-menu-container").css("display", "none");
  $(".game-container").css("display", "block");
  $(".easy-rules").css("display", "block");
}

function homeScreenDisplay() {
  // Hides all elements bar the banner and home menu container
  $(".game-container").css("display", "none");
  $(".game-win-screen").css("display", "none");
  $(".game-lose-screen").css("display", "none");
  $(".text-input-container").css("display", "none");
  $(".enter-delete-buttons").css("display", "none");
  $("#navResetButton").css("display", "none");
  $(".easy-rules").css("display", "none");
  $(".medium-rules").css("display", "none");
  $(".hard-rules").css("display", "none");
  $(".genius-rules").css("display", "none");

  // Clears the message div
  $("#message").text();

  // Shows banner and home menu container
  $(".banner").css("display", "block");
  $(".home-menu-container").css("display", "block");
  $(".ready-button").css("display", "block");

  // Ensures there is no lingering elements from the previous game(s)
  resetGameElements();

  // Resets the scores, lives and timer if user hits play again
  homeScreenDifficultyCheck();
}

function resetGameElements() {
  // Resets the event keyboard event listeners
  turnOffListeners();

  // Resets the display of the letter button containers/text input 
  letterButtonHide();
  clearInput();

  // Clears the blackboard of words from previous games
  blackBoardClear();


}

//  --Difficulty Handling Functions:

function increaseDifficulty() {
  // Enusres that the lower difficulty button is now active
  $("#lowerDifficultyArrow").prop("disabled", false);
  $("#lowerDifficultyArrow").css("opacity", "1");

  // Initialises a variable for the difficulty span
  let difficulty = $("#difficulty").text();

  // Changes difficulties and the difficulty displayed to the user
  if (difficulty == "Easy") {
      // Changes difficulty from Easy to Medium
      $("#difficulty").text("Medium");
      displayMediumDifficulty();

  } else if (difficulty == "Medium") {
      // Changes difficulty from Medium to Easy
      $("#difficulty").text("Hard");
      displayHardDifficulty();

  } else if (difficulty == "Hard") {
      // Changes difficulty from Hard to Genius
      $("#difficulty").text("Genius");
      displayGeniusDifficulty();


      // Disables the increase difficulty button
      $("#increaseDifficultyArrow").prop("disabled", true);
      $("#increaseDifficultyArrow").css("opacity", ".5");
  }
}

function lowerDifficulty() {
  // Enusres that the increase difficulty button is now active
  $("#increaseDifficultyArrow").prop("disabled", false);
  $("#increaseDifficultyArrow").css("opacity", "1");

  // Initialises a variable for the difficulty span
  let difficulty = $("#difficulty").text();

  // Changes difficulties and the difficulty displayed to the user
  if (difficulty == "Genius") {
      // Changes difficulty from Genius to Hard
      $("#difficulty").text("Hard");
      displayHardDifficulty();

  } else if (difficulty == "Hard") {
      // Changes difficulty from Hard to Medium
      $("#difficulty").text("Medium");
      displayMediumDifficulty();

  } else if (difficulty == "Medium") {
      // Changes difficulty from Medium to Easy
      $("#difficulty").text("Easy");
      displayEasyDifficulty();


      // Disables the lower difficulty button
      $("#lowerDifficultyArrow").prop("disabled", true);
      $("#lowerDifficultyArrow").css("opacity", ".5");

  }
}

function displayEasyDifficulty() {
  /* Changes the offcanvas spans to display the correct difficulty
  information */
  $("#settingsLetters").text("12");
  $("#settingsScore").text("15");
  $("#settingsTimer").text("4:00");
  $("#settingsConsonants").text("Certain consonants are excluded: J, Q, X & Z");
  $(".genius-warning").css("display", "none");
  /* Changes the rules divs to display the correct difficulty
  information */
  $(".easy-rules").css("display", "block");
  $(".medium-rules").css("display", "none");
  $(".hard-rules").css("display", "none");
  $(".genius-rules").css("display", "none");

}

function displayMediumDifficulty() {
  /* Changes the offcanvas spans to display the correct difficulty
  information */
  $("#settingsLetters").text("11");
  $("#settingsScore").text("20");
  $("#settingsTimer").text("3:45");
  $("#settingsConsonants").text("Certain consonants are excluded: J, Q, X & Z");
  $(".genius-warning").css("display", "none");
  /* Changes the rules divs to display the correct difficulty
  information */
  $(".easy-rules").css("display", "none");
  $(".medium-rules").css("display", "block");
  $(".hard-rules").css("display", "none");
  $(".genius-rules").css("display", "none");
}

function displayHardDifficulty() {
  /* Changes the offcanvas spans to display the correct difficulty
  information */
  $("#settingsLetters").text("10");
  $("#settingsScore").text("25");
  $("#settingsTimer").text("3:30");
  $("#settingsConsonants").text("All consonants are allowed");
  $(".genius-warning").css("display", "none");
  /* Changes the rules divs to display the correct difficulty
  information */
  $(".easy-rules").css("display", "none");
  $(".medium-rules").css("display", "none");
  $(".hard-rules").css("display", "block");
  $(".genius-rules").css("display", "none");
}

function displayGeniusDifficulty() {
  /* Changes the offcanvas spans to display the correct difficulty
  information */
  $("#settingsLetters").text("9");
  $("#settingsScore").text("25");
  $("#settingsTimer").text("3:15");
  $("#settingsConsonants").text("All consonants are allowed");
  $(".genius-warning").css("display", "block");
  /* Changes the rules divs to display the correct difficulty
  information */
  $(".easy-rules").css("display", "none");
  $(".medium-rules").css("display", "none");
  $(".hard-rules").css("display", "none");
  $(".genius-rules").css("display", "block");
}

function difficultyTracker() {
  // Initialises a variable for the difficulty span
  let difficulty = $("#difficulty").text();

  // Resets the event keyboard event listeners
  turnOffListeners();

  /* Resets the display of the letter button containers in case the user 
  has restarted the game and changed the difficulty */
  letterButtonHide();
  clearInput();

  // Hides the pre-game rules divs
  $(".pre-game-rules").css("display", "none");


  if (difficulty == "Easy") {
      // Calls a function to initialise the game in Easy mode
      initEasyDifficulty(difficulty);
  } else if (difficulty == "Medium") {
      // Calls a function to initialise the game in Medium mode
      initMediumDifficulty(difficulty);
  } else if (difficulty == "Hard") {
      // Calls a function to initialise the game in Hard mode
      initHardDifficulty(difficulty);
  } else if (difficulty == "Genius") {
      // Calls a function to initialise the game in Genius mode
      initGeniusDifficulty(difficulty);
  }
}

function homeScreenDifficultyCheck() {
  // Initializes a variables for difficulty
  let difficulty = $("#difficulty").text();
  // Resets fields which are constant regardless of difficulty
  $("#currentScore").text('0');
  $("#livesLeft").text('5');

  if (difficulty == "Easy") {
      // Sets fields for Easy mode
      $("#maxScore").text('15');
      $("#timer").text('4:00');
      displayEasyDifficulty();
  } else if (difficulty == "Medium") {
      // Sets fields for Medium mode
      $("#maxScore").text('20');
      $("#timer").text('3:45');
      displayMediumDifficulty();
  } else if (difficulty == "Hard") {
      // Sets fields for Hard mode
      $("#maxScore").text('25');
      $("#timer").text('3:30');
      displayHardDifficulty();
  } else if (difficulty == "Genius") {
      // Sets fields for Genius mode
      $("#maxScore").text('25');
      $("#timer").text('3:15');
      displayGeniusDifficulty();
  }
}

function initEasyDifficulty(difficulty) {
  // Sets up variables for callbacks to play the game on Easy mode
  let vowelNumber = 4;
  let consonantNumber = 8;
  let timerMinutes = 4;
  let timerSeconds = 0;
  let score = 15;
  // Loads/removes the correct game screen elements
  gameStart(score, timerMinutes, timerSeconds);
  $(".letters-container").css("display", "block");
  $(".letter-button-container-easy").css("display", "block");
  // Generates and anagram of the approrpiate length
  anagramGenerator(vowelNumber, consonantNumber, difficulty);
}

function initMediumDifficulty(difficulty) {
  // Sets up variables for callbacks to play the game on Medium mode
  let vowelNumber = 4;
  let consonantNumber = 7;
  let timerMinutes = 3;
  let timerSeconds = 45;
  let score = 20;
  // Loads/removes the correct game screen elements
  gameStart(score, timerMinutes, timerSeconds);
  $(".letters-container").css("display", "block");
  $(".letter-button-container-medium").css("display", "block");
  // Generates and anagram of the approrpiate length
  anagramGenerator(vowelNumber, consonantNumber, difficulty);
}

function initHardDifficulty(difficulty) {
  // Sets up variables for callbacks to play the game on Hard mode
  let vowelNumber = 3;
  let consonantNumber = 7;
  let timerMinutes = 3;
  let timerSeconds = 30;
  let score = 25;
  // Loads/removes the correct game screen elements
  gameStart(score, timerMinutes, timerSeconds);
  $(".letters-container").css("display", "block");
  $(".letter-button-container-hard").css("display", "block");
  // Generates and anagram of the approrpiate length
  anagramGenerator(vowelNumber, consonantNumber, difficulty);
}

function initGeniusDifficulty(difficulty) {
  // Sets up variables for callbacks to play the game on Genius mode
  let vowelNumber = 3;
  let consonantNumber = 6;
  let timerMinutes = 3;
  let timerSeconds = 15;
  let score = 25;
  // Starts the game with the above parameters
  gameStart(score, timerMinutes, timerSeconds);
  // Loads/removes the correct game screen elements
  $(".letters-container").css("display", "block");
  $(".letter-button-container-genius").css("display", "block");
  // Generates and anagram of the approrpiate length
  anagramGenerator(vowelNumber, consonantNumber, difficulty);
}



function letterButtonHide() {
  /* Resets the display of the letter button containers in case the user 
  has restarted the game and changed the difficulty */
  $(".letter-button-container-easy").css("display", "none");
  $(".letter-button-container-medium").css("display", "none");
  $(".letter-button-container-hard").css("display", "none");
  $(".letter-button-container-genius").css("display", "none");
}

//  --Game Initialization Handling Functions:

function gameStart(score, timerMinutes, timerSeconds) {

  /* Clears the table of words in the event that the user has started the game
  from the game over screen */
  blackBoardClear();

  // Calls the timer
  startTimer(score, timerMinutes, timerSeconds);

  // Sets the appropriate score according to difficulty
  $("#maxScore").text(score);

  // Resets score & incorrect answers counters
  $("#currentScore").text("0");
  $("#livesLeft").text("5");
  // Resets the error/success message div
  $("#message").text("");

  // Ensures only the correct elements are being displayed.
  $("#navResetButton").css("display", "none");
  $(".ready-button").css("display", "none");
  $(".easy-rules").css("display", "block");
  $(".pre-game-rules").css("display", "none");
  $(".bad-luck").css("display", "none");
  $(".text-input-container").css("display", "block");
  $(".game-container").css("display", "block");
  $(".game-win-screen").css("display", "none");
  $(".game-lose-screen").css("display", "none");

}

function blackBoardClear() {
  // Clears any words on the blackboard from a previous game
  for (let x = 0; x <= 25; x++) {
      $(`.word-${x}`).text("");
  }
}

function startTimer(score, timerMinutes, timerSeconds) {
  // Sets variables needed to start the timer
  let minute = timerMinutes;
  let sec = timerSeconds;
  // Resets the timer colour if the game has been restarted
  $("#timerContainer").css("color", "#493B3C");

  // Sets event listeners so the timer stops if the game is reset in the UI
  $("#navResetButton").on("click", function () {
      clearTimeout(timer);
  });
  $("#settingsResetButton").on("click", function () {
      clearTimeout(timer);
  });
  $("#navbarLink").on("click", function () {
      clearTimeout(timer);
  });

  let timer = setInterval(function () {
      /*Checks if the user has won or lost so the timer doesn't continue after
       the game ends */
      winLoseCheck(timer, score);
      // Sets the timer colour if time is running out
      if (minute == 0 && sec < 10) {
          $("#timerContainer").css("color", "red");
      }

      // Initializes the timer
      if (sec < 10 && sec != 0) {
          document.getElementById("timer").innerHTML = minute + ":" + "0" + sec;
          sec--;
      } else if (sec != 0) {
          document.getElementById("timer").innerHTML = minute + ":" + sec;
          sec--;
      }

      if (sec == 0 && minute != 0) {
          document.getElementById("timer").innerHTML = minute + ":00";
          minute--;
          sec = 59;
      } else if (sec == 0 && minute == 0) {
          gameLose();
          clearTimeout(timer);
      }
  }, 1000);
}

function winLoseCheck(timer, score) {
  // Initializes variables to check if the user has won/lost
  let currentScore = parseInt($("#currentScore").text());
  let livesLeft = parseInt($("#livesLeft").text());

  // Checks if the user has won/lost
  if (currentScore == score || livesLeft == 0) {
      // Stops the timer in the event that the user has won or lost
      clearTimeout(timer);
  }

}

//  --Anagram Handling Functions:

function anagramGenerator(vowelNumber, consonantNumber, difficulty) {
  // Initializes alphabetical array variables
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  const consonantsEasy = ['B', 'C', 'D', 'F', 'G', 'H', 'K', 'L', 'M', 'N',
      'P', 'R', 'S', 'T', 'V', 'W', 'Y'
  ];
  const consonantsHard = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
      'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'
  ];

  // Initialises block scope variables needed to sufficientlty generate an anagram 
  let anagramArray = [];
  let vowelsUsed = [];
  let consonantsUsed = [];
  let consonants = [];

  // Generates a number of random non-repeating vowels
  while (vowelsUsed.length < vowelNumber) {
      let vowelIndexer = Math.floor(Math.random() * 5);
      if (vowelsUsed.includes(vowels[vowelIndexer]) === false) {
          vowelsUsed.push(vowels[vowelIndexer]);
      }
  }
  // Checks difficulty settings to determine which consonants will be used
  if (difficulty == "Easy" || difficulty == "Medium") {
      consonants = consonantsEasy;
  } else if (difficulty == "Hard" || difficulty == "Genius") {
      consonants = consonantsHard;
  }
  // Generates a number of random non-repeating consonants
  while (consonantsUsed.length < consonantNumber) {
      let consonantIndexer = Math.floor(Math.random() * consonants.length);
      if (consonantsUsed.includes(consonants[consonantIndexer]) === false) {
          consonantsUsed.push(consonants[consonantIndexer]);
      }
  }

  //The consonants and vowels generated are concatenated into an array
  anagramArray = vowelsUsed.concat(consonantsUsed);


  /* Then they are put through a Fisher-Yates algorithm to mix the vowels 
  and consonants */
  for (let i = anagramArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); //random index
      // swap
      [anagramArray[i], anagramArray[j]] = [anagramArray[j], anagramArray[i]];
  }

  // Changes difficulty variable to lower case to match the button ids
  difficulty = difficulty.toLowerCase();
  // Adds the content of the array to the buttons
  for (let i = 0; i <= anagramArray.length; i++) {
      $(`#${difficulty}Button${i + 1}`).text(anagramArray[i]);
  }

  // Shows the enter and delete buttons
  $(".enter-delete-buttons").css("display", "flex");

  // Disbles any lingering event listeners from prior games
  turnOffListeners();

  // Adds event listeners for users with keyboards
  keyboardLetterEvent(anagramArray, difficulty);
  enterDeleteLetterEvent();
}

function addLetterToInput(inputId) {
  // Clears the message area
  $("#message").text("");

  // Initialises a a variable of the letters currently present in the text input
  let currentLetters = $("#textInput").text();

  // Disables the buttons to avoid duplicate letters appearing in string
  $(`#${inputId}`).prop('disabled', true);

  // Adds the button pushed input to the text to be displayed to the user
  let inputToPush = $(`#${inputId}`).text();
  let newTextDisplay = `${currentLetters}${inputToPush}`;
  $("#textInput").text(`${newTextDisplay}`);

  /* Adds class of button-pushed-x to the button that was pressed so it can be 
  easily deleted/deactivated later. */
  let i = newTextDisplay.length;
  $(`#${inputId}`).addClass(`button-pressed-${i}`);

  // Plays the letter button sound if sounds are enabled
  letterButtonSound();
}

function keyboardLetterEvent(anagramArray, difficulty) {
  /* Converts the anagram array to lower case to compare against the event.key 
  function */
  anagramArray = anagramArray.map(v => v.toLowerCase());

  $(document).on("keypress", function () {
      // Finds out what letter has been pressed and initializes it as a variable
      let buttonPressed = event.key;
      // Returns the variable in lower case so caps lock buttons will work
      buttonPressed = buttonPressed.toLowerCase();
      // Initializes variables to check if letter pressed has already been entered
      let textInput = $("#textInput").text().toLowerCase();
      let letterPresent = textInput.includes(buttonPressed);

      // Checks if a valid letter pushed
      if (anagramArray.includes(buttonPressed) && letterPresent == false) {
          // If so, initializes variables to call the add letter function
          let idNumber = anagramArray.indexOf(buttonPressed);
          let inputId = `${difficulty}Button${idNumber + 1}`;
          addLetterToInput(inputId);
      }
  });
}


function enterDeleteLetterEvent() {
  // Checks if the letter pressed was enter/backspace
  $(document).on("keyup", function () {
      if (event.key === "Enter") {           
          // If enter was pressed, the word validator function runs
          wordValidator();
      } else if (event.key === "Backspace") {
          // If backspace was pressed, the delete letter funcitons runs
          deleteLetter();
      }
  });
}


function setVolume() {
  // Changes the volume display figure on the offcanvas UI
  let sliderValue = document.getElementById("volumeSlider").value;
  $("#volumeLevel").text(sliderValue + "%");

  // Calls a function to change the gradient of the range slider
  rangeGradientSet(sliderValue);
}

function rangeGradientSet(sliderValue) {
  // Sets the gradient colour of the slider to the same as the range value
  $("#volumeSlider").css("background",
      `linear-gradient(90deg, rgb(0, 51, 102) 
      ${sliderValue}%, rgb(166, 171, 189) ${sliderValue}%)`);
}

function deleteLetter() {
  /* Converts the text input into an array so the final entry can be popped 
  and it's array letter stored */
  let currentLetters = $("#textInput").text();
  let inputLettersArray = currentLetters.split('');

  // Reactivates the button for possible later use. 
  var m = inputLettersArray.length;
  $(`.button-pressed-${m}`).prop('disabled', false);

  // Removes the letter from the text input div    
  inputLettersArray.pop();
  let anagramString = "";
  let anagramStringToModify = inputLettersArray.toString();
  anagramString = anagramStringToModify.replace(/,/g, "");
  $("#textInput").text(`${anagramString}`);

  // Play a sound if sounds are enabled
  deleteButtonSound();

}

//  --Word Validation Functions:

function wordValidator() {
  // Disables the enter button to avoid double clicking errors
  $("#enterButton").prop('disabled', true);

  // Stores user input as a variable
  let userInput = $("#textInput").text();

  // Stores the words on the black board as a variable
  let wordPresent = $(".words-blackboard").text();

  // Initializes a boolean to check if the user has repeated a word
  let repeatingWord = wordPresent.toUpperCase().includes(` ${userInput} `);

  // Checks if the user has, in fact, entered a word
  if (userInput == "") {
      // Prompts the user to enter a word
      let errorMessage = "Please enter a word.";
      invalidWord(errorMessage);
      // Checks if the word is already present on the answers blackboard
  } else if (repeatingWord) {
      // Prompts the user to enter a new word
      let errorMessage = "Sorry, you've already inputted this word.";
      invalidWord(errorMessage);
      // Checks that the word is a least 3 letters long
  } else if (userInput.length < 3) {
      // Prompts the user to enter a longer word
      let errorMessage = "Words must be at least three letters long.";
      invalidWord(errorMessage);

  } else {
      // Checks if the API must be called to proceed
      noApiCheck(userInput);
  }
}

function invalidWord(errorMessage) {
  // Displays the appropriate error message to the user    
  $("#message").css("color", "#FF7900").text(`${errorMessage}`);

  // Resets the buttons so the user doesn't have to manually do so
  clearInput();
}

function noApiCheck(userInput) {
  // Initializes an array of words that the API mistakenly does not accept
  let errorWords = [" MET ", " BUS ", " DEW ", " COG ", " COGS ", " BIDE ",
      " ALE ", " CHIN ", " DIME ", " CLEAT ", " COT ", " BEAN ", " CAY ",
      " BAT ", " BATS ", " DICE ", " RAN ", " CLEM ", " RAPES ", " BOAR ",
      " BOARS ", " DICK ", " DICKS "
  ];
  // Initializes variables to check if the word is already present in local storage
  let localWords = localStorage;
  let localArray = Object.values(localWords);

  // Initializes two booleans that check if the word meets the specified conditions
  let wordLocallyPresent = localArray.includes(`${userInput}`);
  let errorWordSuccess = errorWords.includes(` ${userInput} `);

  // Checks if the word is erroneously not included in the dictionary API
  if (errorWordSuccess) {
      // Calls the word success funciton    
      wordSuccess(userInput);
      // Checks if the word has been stored in local storage  
  } else if (wordLocallyPresent) {
      // Calls the word success funciton   
      wordSuccess(userInput);
  } else {
      /* If the word does NOT meet the requirements the API is called to 
      analyze the word */
      validWordCheck(userInput);
  }
}

function validWordCheck(userInput) {
  // Initializes a new XMLHttp request
  var xhr = new XMLHttpRequest();

  // Calls the API with the user's input
  xhr.open("GET", `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${userInput}`);
  xhr.send();

  xhr.onreadystatechange = function () {
      // Initializes the response text as a variable
      let apiData = this.responseText;

      // Checks if the word exists in the dictionary
      if (this.readyState == 4 && this.status === 404) {
          wordFail();

          // Checks if the word is an abbreviation
      } else if (this.readyState == 4 && this.status == 200) {
          abbreviationCheck(apiData, userInput);
      }
  };
}

function abbreviationCheck(apiData, userInput) {
  /* Initializes a variable to check how many times "abbreviation" occurs
  in the response text */
  let abbreviationCount = 0;
  let definitionCount = 1;

  /* Checks if the word entered has any definitions that constitute as an abbreviation
  and stores the number of these in the previously initialized variable */
  if (apiData.includes("abbreviation")) {
      abbreviationCount = apiData.match(/abbreviation/g).length;
  }

  // Checks that the 'partOfSpeech' tag appears to avoid breaking the game
  if (apiData.includes("partOfSpeech")) {
      definitionCount = apiData.match(/partOfSpeech/g).length;
  }

  /* Checks if the number of abbreviative definitions a word has is equal to the number 
  of definitions it has in general. This way, the user is not punished if they input a 
  word that exists in the dictionary, but also has an abbreviative definition */
  if (abbreviationCount == definitionCount) {
      // Informs the user when a word has only abbreviative definitions.
      $("#message").css("color", "#FF7900").text("Sorry, no abbreviations allowed.");
      clearInput();
  } else {
      // Adds the word to the blackboard and increments the score. 
      wordSuccess(userInput);
  }
}


function wordSuccess(userInput) {
  // Finds out what position in the blackboard the answer should be written
  let currentScore = parseInt($("#currentScore").text());
  let newScore = currentScore + 1;

  // Adds the successful word to the blackboard with only the first letter capitalized
  let inputToBlackboard = userInput.charAt(0) + userInput.slice(1).toLowerCase();
  $(`.word-${newScore}`).text(` ${inputToBlackboard} `);

  // Reactivates buttons & clears the text input
  clearInput();

  // Calls a function to increment life counter should a word meet the requirements
  lifeGain(userInput);

  // Increments score counter
  scoreIncrement(userInput);

  // Activates the reset button
  navResetAllow();

  // Checks if the word can be added to local storage
  storageInit(userInput);
}

function storageInit(userInput) {
  // Initiates a variable to check if the local storage object contains words or not
  let localWordsCheck = localStorage.getItem("word0");

  // Checks if the local storage object contains words
  if (localWordsCheck == null) {
      // If it doesn't contain words, the first word is added to the object
      localStorage["word0"] = ` ${userInput} `;
  } else {
      // Checks if the word has been locally stored already
      let localWords = localStorage;
      storageCheck(userInput, localWords);
  }

}

//  --Local Storage Functions:

function storageCheck(userInput, localWords) {
  localWords = localStorage;
  // Initializes variables to check if the word is already stored locally
  let localArray = Object.values(localWords);
  let wordLocallyPresent = localArray.includes(`${userInput}`);

  // Checks if the word has been locally stored already
  if (wordLocallyPresent == false) {
      // If the word isn't stored, it is added to the localStorage object
      wordStore(userInput, localWords);
  }
}

function wordStore(userInput, localWords) {
  // Initializes variables to add a new word to local storage
  let localArray = Object.keys(localWords);
  let newLocalIndex = localArray.length;

  // Adds the new word to local storage
  localWords[`word${newLocalIndex}`] = ` ${userInput} `;
}

//  --Word Success/Fail Handling Functions:

function turnOffListeners() {
  // Disables keyboard event listeners
  $(document).off("keypress");
  $(document).off("keydown");
  $(document).off("keyup");
}

function lifeGain(userInput) {
  // Initializes a variable to check difficulty
  let difficulty = $("#difficulty").text();

  // Initializes variables to increment the life counter
  let lives = parseInt($("#livesLeft").text());

  // Gives the user an extra life if their word is longer than 7 letters
  if (difficulty != "Genius" && userInput.length > 6) {
      // Increments the life counter
      $("#livesLeft").text(`${lives + 1}`);
      // Informs the user they've gained a life
      lifeGainMessage();
      // Plays the life gain sound if sounds are enabled
      lifeGainSound();
  }
}

function lifeGainMessage() {
  // Initializes an array of life gain messages to push to the user
  let bonusMessages = ["Nice! You earned a life!", "Great job! Have a bonus life!",
      "Good spot, that got you a new life!", "Very impressive!! +1 lives!",
      "Excellent vocab, here's a bonus life!!",
      "*low whistle* One more life for that one!!"
  ];

  // Generates a random number between zero and 5
  let x = Math.floor(Math.random() * 5);

  // Checks if the random message is equal to the one already present
  if ($("#message").text() == bonusMessages[x]) {
      // Removes the error message from the array
      bonusMessages.splice(x, 1);
      // Generates a new random number between zero and four
      x = Math.floor(Math.random() * 4);
      // Adds the new message to the message div.
      $("#message").css("color", "green").text(`${bonusMessages[x]}`);
  } else {
      // Adds the new message to the message div.
      $("#message").css("color", "green").text(`${bonusMessages[x]}`);
  }
}

function navResetAllow() {
  // Initializes a variable to check the score
  let score = parseInt($("#currentScore").text());
  // Checks if the reset button should be displayed
  if (score >= 1) {
      // Displays it if so
      $("#navResetButton").css("display", "inline-block");
  }
}

function wordFail() {
  // Initialises a variable to push to the user for later
  let wrongMessage = "";

  // Turns the current lives left into a variable
  let livesLeft = parseInt($("#livesLeft").text());

  // Subtracts the variables 
  let newLives = livesLeft - 1;

  // Warns the user when they've only one incorrect guess remaining.
  if (newLives == 1) {
      wrongMessage = "Only 1 life left! Be Careful!";
      $("#message").css("color", "red").text(`${wrongMessage}`);
      // Warns the user when they've only two incorrect guesses remaining.
  } else if (newLives == 2) {
      wrongMessage = "Heads up, just 2 lives remaining!";
      $("#message").css("color", "red").text(`${wrongMessage}`);
      /*  Generates a random error message that is different to the previous one,
        so that the user knows their guess is incorrect without having to refer
        to the Lives Left tracker. */
  } else if (newLives >= 3) {
      wrongMessagePicker();
  }

  // Increments incorrect answers counter
  incorrectIncremenet(newLives);

  // Reactivates buttons & clears the text input
  clearInput();
}

function wrongMessagePicker() {
  // Initialises an array of eleven error messages
  let wrongMessages = ["Sorry, that word doesn't exist.", "Not a word, try again!",
      "Nope, not according to our dictionary.", "Unfortunately, that's not a word...",
      "You might have made that one up...", "No points for that I'm afraid!",
      "Is that some sort of slang?", "That's not a word in English, unfortunately!",
      "Sadly that is not a word.", "We can't give you that one I'm afraid!",
      "Oof, not that one!"
  ];

  // Generates a random number between zero and ten
  let x = Math.floor(Math.random() * 10);

  // Checks if the random message is equal to the one already present
  if ($("#message").text() == wrongMessages[x]) {
      // Removes the error message from the array
      wrongMessages.splice(x, 1);
      // Generates a new random number between zero and nine
      x = Math.floor(Math.random() * 9);
      // Adds the new message to the message div.
      $("#message").css("color", "red").text(`${wrongMessages[x]}`);
  } else {
      // Adds the new message to the message div.
      $("#message").css("color", "red").text(`${wrongMessages[x]}`);
  }
}

function clearInput() {
  // Reactivates buttons
  $("#enterButton").prop('disabled', false);
  for (var n = 0; n <= 12; n++) {
      $(`.button-pressed-${n}`).prop("disabled", false);
      $(".letter-button").removeClass(`button-pressed-${n}`);

      // Clears text input field
      $("#textInput").text("");
  }
}

function scoreIncrement(userInput) {
  // Increments score
  let currentScore = parseInt($("#currentScore").text());
  let newScore = currentScore + 1;
  $("#currentScore").text(`${newScore}`);

  // Initializes variables to check how long the users word was 
  let userInputLength = userInput.length;
  let maxPossible = parseInt($("#settingsLetters").text());

  // Checks if user has won
  let maxScore = parseInt($("#maxScore").text());
  if (newScore == maxScore) {
      // Calls the game win function
      gameWin();
  } else if (userInputLength == maxPossible) {
      // Plays a special sound for making word with every available letter
      maxWordSound();
  } else {
      // Plays successful word sound if audio is enabled.
      wordSuccessSound();
  }
}

//  --Game Win/Lose Handling Functions:

function gameWin() {
  // Turns off event listeners in the event of a win
  turnOffListeners();

  // Plays success audio if sounds are enabled
  gameWinSound();

  // Changes the game screen to the game victory screen
  $(".game-container").css("display", "none");
  $(".game-win-screen").css("display", "block");
}

function incorrectIncremenet(newLives) {
  // Increments incorrect answers
  $("#livesLeft").text(`${newLives}`);

  // Checks if user has lost
  if (newLives == 0) {
      gameLose();
  } else {
      // Plays failure sound if sounds are enabled.
      wordFailSound();
  }
}


function gameLose() {
  // Turns off event listeners in the event of a loss
  turnOffListeners();

  // Removes the game screen to prepare the game over screen
  $(".game-container").css("display", "none");
  // Dictates what type of image and message the player gets on game over
  gameLossImageSelect();

  // Plays a failure sting if sounds are enabled
  gameOverSound();
}

function gameLossImageSelect() {
  // Displays the game lose screen container
  $(".game-lose-screen").css("display", "block");
  // Initializes variables to check what type of game over screen the user has incurred
  let currentScore = parseInt($("#currentScore").text());
  let maxScore = parseInt($("#maxScore").text());

  if (currentScore == 0) {
      $(".fail-0").css("display", "block");
  } else if (currentScore == maxScore - 1) {
      $(".fail-1-away").css("display", "block");
  } else if (currentScore < 6) {
      $(".fail-1-5").css("display", "block");
  } else if (currentScore < 11) {
      $(".fail-6-10").css("display", "block");
  } else if (currentScore < 16) {
      $(".fail-11-15").css("display", "block");
  } else if (currentScore < 21) {
      $(".fail-16-20").css("display", "block");
  } else if (currentScore < 24) {
      $(".fail-21-24").css("display", "block");
  }
}

//  --Sound Handling Functions:

function playSound(sound) {
  // Initializes a variable to check if sound is turned on
  let soundOn = false;
  if (document.getElementById('muteButton').checked == true) {
      soundOn = true;
  }
  // Checks if sound is turned on
  if (soundOn == true) {
      // If so, sets the appropriate volume for souns
      let setVolume = document.getElementById("volumeSlider").value;
      let volume = (setVolume / 100);
      sound.volume = volume;
      //  Plays the appropriate sound
      sound.play();
  }
}

function letterButtonSound() {
  // Initiliazes the correct sound file as a variable for the playSound function
  let sound = new Audio('assets/sounds/letter-button.mp3');

  // Calls the playSound function
  playSound(sound);
}

function deleteButtonSound() {
  // Initiliazes the correct sound file as a variable for the playSound function
  let sound = new Audio('assets/sounds/delete-button.mp3');

  // Calls the playSound function
  playSound(sound);
}

function clearButtonSound() {
  // Initiliazes the correct sound file as a variable for the playSound function
  let sound = new Audio('assets/sounds/clear-button.mp3');

  // Calls the playSound function
  playSound(sound);
}

function unmuteSound() {
  // Initiliazes the correct sound file as a variable for the playSound function
  let sound = new Audio('assets/sounds/sound-on.mp3');

  // Calls the playSound function
  playSound(sound);
}

function wordSuccessSound() {
  // Initiliazes the correct sound file as a variable for the playSound function
  let sound = new Audio('assets/sounds/correct-word.mp3');

  // Calls the playSound function
  playSound(sound);
}

function wordFailSound() {
  // Initiliazes the correct sound file as a variable for the playSound function
  let sound = new Audio('assets/sounds/wrong-word.mp3');

  // Calls the playSound function
  playSound(sound);
}

function lifeGainSound() {
  // Initiliazes the correct sound file as a variable for the playSound function
  let sound = new Audio('assets/sounds/life-gain.mp3');

  // Calls the playSound function
  playSound(sound);
}

function gameOverSound() {
  // Initiliazes the correct sound file as a variable for the playSound function
  let sound = new Audio('assets/sounds/game-over.mp3');

  // Calls the playSound function
  playSound(sound);
}

function gameWinSound() {
  // Initiliazes the correct sound file as a variable for the playSound function
  let sound = new Audio('assets/sounds/game-win.mp3');

  // Calls the playSound function
  playSound(sound);
}

function maxWordSound() {
  // Initiliazes the correct sound file as a variable for the playSound function
  let sound = new Audio('assets/sounds/max-word.mp3');

  // Calls the playSound function
  playSound(sound);
}