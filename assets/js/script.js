// array of  an objects as question/answers/correctAnswer
const questions = [
  {
    question: "(1) Commonly used data types DO Not include:",
    answers: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
    correctAnswer: "2",
  },
  {
    question:
      "(2) The condition in an if / else statement is enclosed within _______.",
    answers: [
      "a. quotes",
      "b. curly brackets",
      "c. parentheses",
      "d. square brackets",
    ],
    correctAnswer: "1",
  },
  {
    question: "(3) Arrays in Javascript can be used to store ______.",
    answers: [
      "a. numbers and strings",
      "b. other arrays",
      "c. booleans",
      "d. all of the above",
    ],
    correctAnswer: "3",
  },
  {
    question:
      "(4) String values must be enclosed within ________ when being assigned to variables.",
    answers: ["a. commmas", "b. curly brackets", "c. quotes", "d. parentheses"],
    correctAnswer: "2",
  },
  {
    question:
      "(5) A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "a. Javascript",
      "b. terminal/bash",
      "c. for loops",
      "d. console.log",
    ],
    correctAnswer: "3",
  },
];
//variable declaration
// Global variable declaration for timer
var timeEl = document.querySelector(".timer");
var scoreEl = document.querySelector("#score");
scoreEl.setAttribute("style", "color: yellow;");
var secondsLeft = 60;

//Global variable declaration for the button
const startEl = document.querySelector("#start");

// variable for the first rendering screen
const startScreenEl = document.querySelector("#start_screen");

// variable to grab the element with id questions_section
var questionsEl = document.querySelector("#questions_section");

// variable to grab the elment with id question which get the question from the array
let questionEl = document.querySelector("#question");
//variable to grab the element with id correct_wrong where the correct or wrong text will display when user click on each answer button.
const correctWrong = document.querySelector("#correct_wrong");
//setting variable questionCount as 0
let questionCount = 0;

// variable to grab the element with id final score
const finalEl = document.querySelector("#final_score");

//variables to grab the element with id initials where user is asked to type their initials
let initialsInput = document.querySelector("#initials");

// variable to grab the element with the id high scores
const highscoresEl = document.querySelector("#high_scores");
//variable to grab the ol element with class socre list to display the stored score list.
let scoreListEl = document.querySelector(".score_list");
let scoreList = [];

// variable to grap the all available answer button with the same class name given in the bracket.
const ansBtn = document.querySelectorAll("button.answer_btn");

// variable to grab all the button with different id as given below
let submitScrBtn = document.querySelector("#submit_score"); //submit socre
let clearScrBtn = document.querySelector("#clear_scores"); //clear the stored score
let viewScrBtn = document.querySelector("#view_scores"); //view the list of score stored from highest to lowest
let goBackBtn = document.querySelector("#back_button"); // back button to the home

// variable to call the answer with different id
const ans1Btn = document.querySelector("#a1");
const ans2Btn = document.querySelector("#a2");
const ans3Btn = document.querySelector("#a3");
const ans4Btn = document.querySelector("#a4");

// Timer function
function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = `Time:${secondsLeft}Sec`;

    if (secondsLeft === 0 || questionCount === questions.length) {
      clearInterval(timerInterval);
      questionsEl.style.display = "none";
      finalEl.style.display = "block";
      scoreEl.textContent = secondsLeft;
    }
  }, 1000);
}

// function to begin the quiz/ it invoke once user click on the button start quiz in the ui.
function startQuiz() {
  startScreenEl.style.display = "none";
  questionsEl.style.display = "block";
  questionCount = 0;

  setTime();
  setQuestion(questionCount);
}
// Start timer and display first question when click start quiz
startEl.addEventListener("click", startQuiz);

// function to set the question given in the array of objects
function setQuestion(id) {
  if (id < questions.length) {
    questionEl.textContent = questions[id].question;
    questionEl.setAttribute(
      "style",
      "font-size: 18px; font-weight: bold; padding-bottom:5px; line-height: 1.2em;"
    );
    ans1Btn.textContent = questions[id].answers[0];
    ans2Btn.textContent = questions[id].answers[1];
    ans3Btn.textContent = questions[id].answers[2];
    ans4Btn.textContent = questions[id].answers[3];
  }
}

// event fumction to check the answer when user click on the answer.
function checkAnswer(event) {
  //prevent default
  event.preventDefault();

  //creating element for correct or wrong displaying as block
  correctWrong.style.display = "block";
  //create a p element to display the result of user click event
  let p = document.createElement("p");
  //setting attribute below for that p element and appending correctWrong variable as the child of that p
  p.setAttribute("style", "font-family:Courier, monospace;");
  correctWrong.appendChild(p);

  // display new element for amount of time
  setTimeout(function () {
    p.style.display = "none";
  }, 1000);

  // conditional statement for right and wrong answer once user click on one of their choices
  //if the user click on correct answer
  if (questions[questionCount].correctAnswer === event.target.value) {
    p.textContent = "Correct!";
    p.setAttribute(
      "style",
      "background-color: green; color: white; font-size: 20px; padding:5px; font-weight: bold; border-radius:5px;"
    );
  }

  // if the user click on the wrong answer, plus deuct 10 sec from the remaining secondsLeft
  else if (questions[questionCount].correctAnswer !== event.target.value) {
    secondsLeft = secondsLeft - 10;
    p.textContent = "Wrong!";
    p.setAttribute(
      "style",
      "background-color: red; color: white; font-size: 20px; padding:5px; font-weight: bold; border-radius:5px;"
    );
  }

  // cycle for the question list
  if (questionCount < questions.length) {
    questionCount++;
  }
  setQuestion(questionCount);
}
// listen the event for checking answer
ansBtn.forEach((item) => {
  item.addEventListener("click", checkAnswer);
});
//function to add socre upon the user click
function addScore(event) {
  //prevent default
  event.preventDefault();

  finalEl.style.display = "none";
  highscoresEl.style.display = "block";

  //variable to save initials making it upper case and add the initials and score in to the score list using push() method
  let init = initialsInput.value.toUpperCase();
  scoreList.push({ initials: init, score: secondsLeft });

  // sorting the highest score among the list using sort() method using comparision in the function in reverse order
  scoreList = scoreList.sort((a, b) => {
    if (a.score < b.score) {
      return 1;
    } else {
      return -1;
    }
  });
  // clear innerHTML
  scoreListEl.innerHTML = " ";
  //using for loop with the array named  scoreList using it's length property,
  //display all the initials and the score inside the array untill it meets the condition for the given loop
  for (let i = 0; i < scoreList.length; i++) {
    //create a li element
    let li = document.createElement("li");
    //adding the scoreList with index and initials and scoreList index with the score
    li.textContent = `${scoreList[i].initials} : ${scoreList[i].score}`;
    //setting the below attribute for those li
    li.setAttribute(
      "style",
      "background: white; color: black; padding:5px;margin: 5px;"
    );
    //append them within the scoreListEl
    scoreListEl.append(li);
  }
  storeScores();
  displayScores();
}

// adding a score event upon user click right or wrong
submitScrBtn.addEventListener("click", addScore);

// function to store score using localStorage and JSON.stringify method
function storeScores() {
  localStorage.setItem("scoreList", JSON.stringify(scoreList));
}
//function to display score
function displayScores() {
  // Parsing the JSON string to an object
  let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

  //while retrieving from local array
  if (storedScoreList !== null) {
    scoreList = storedScoreList;
  }
}

// fumction to clear the score
function clearScores() {
  localStorage.clear();
  scoreListEl.innerHTML = "";
}

// go back to listener event function and shows the home screen for next play
goBackBtn.addEventListener("click", function () {
  highscoresEl.style.display = "none";
  startScreenEl.style.display = "block";
  secondsLeft = 60;
  timeEl.textContent = `Time:${secondsLeft}s`;
});

// to clear score
clearScrBtn.addEventListener("click", clearScores);

// when click on high score button called score board
viewScrBtn.addEventListener("click", function () {
  if (highscoresEl.style.display === "none") {
    highscoresEl.style.display = "block";
  } else if (highscoresEl.style.display === "block") {
    highscoresEl.style.display = "none";
  } else {
    alert("Please attempt the quiz first to see the score..!");
  }
});
