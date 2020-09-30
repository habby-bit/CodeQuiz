var startBtn = document.querySelector("#startBtn");
var currentPage = document.querySelector("#main")
var quizQ = document.querySelector("#quiz")

var question = document.querySelector("#question")

var choices = document.querySelector(".choices")

var choiceA = document.createElement("button");
    choiceA.setAttribute("id","choiceA");
var choiceB = document.createElement("button");
    choiceB.setAttribute("id","choiceB");
var choiceC = document.createElement("button");
    choiceC.setAttribute("id","choiceC");
var choiceD = document.createElement("button");
    choiceD.setAttribute("id","choiceD");

var check = document.querySelector("#check")

var timeEl = document.querySelector("#timer") 

var secondsLeft = 60;
var score = 0;
var finalScore;

var welcomePage;
var endPage;
var questions = [

{
    question: "What does CSS stand for?",
    choiceA: "Cascading Style Sheet",
    choiceB: "Cool Style Supplement",
    choiceC: "Cascading Supplement Sheet",
    choiceD: "Creative Style Sheet",
    answer: "A"
},
{
    question: "With what symbol do you call an id?",
    choiceA: "$",
    choiceB: "#",
    choiceC: ".",
    choiceD: "*",
    answer: "B"
},
{
    question: "jQuery is a library for what programming language?",
    choiceA: "C++",
    choiceB: "CSS",
    choiceC: "Javascript",
    choiceD: "Python",
    answer: "C"
},
{
    question: "A usefult tool for debugging is ___?",
    choiceA: "for loop",
    choiceB: "if/else statement",
    choiceC: "addEventListener",
    choiceD: "Console.log",
    answer: "D"
},
{
    question: "When styling elements in a CSS file, the style must be enclosed within ____?",
    choiceA: "Parenthesis",
    choiceB: "Curly Brackets",
    choiceC: "Slashes",
    choiceD: "Dashes",
    answer: "B"
}

];

var lastQuestion = questions.length - 1;

currentQuestion = 0;

// Renders the next question

function questionFunc() {
    var q = questions[currentQuestion];

    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

// Run the quiz

function quiz() {
    currentPage.textContent = "";
    currentPage.append(quizQ)

    choiceA.setAttribute("value", "A")
    choices.appendChild(choiceA)

    choiceB.setAttribute("value", "B")
    choices.appendChild(choiceB)

    choiceC.setAttribute("value", "C")
    choices.appendChild(choiceC)

    choiceD.setAttribute("value", "D")
    choices.appendChild(choiceD)

    choiceA.addEventListener("click", function() {
        checkAnswer();
        currentQuestion++;
    })

    choiceB.addEventListener("click", function() {
        checkAnswer();
        currentQuestion++;
    })

    choiceC.addEventListener("click", function() {
        checkAnswer();
        currentQuestion++;
    })

    choiceD.addEventListener("click", function() {
        checkAnswer();
        currentQuestion++;
    })
}

// Checks the answer that the user clicked

function checkAnswer() {
    if (questions[currentQuestion].answer) {
        check.textContent = "Correct"
        score = score + 10;
    }
    else {
        check.textContent = "Wrong"
        score = score - 10;
        secondsLeft = secondsLeft - 5;
    }

    if (currentQuestion < lastQuestion) {
        questionFunc();
    }
    else {
        endOfGame();
    }
}

// Start button to begin the quiz

startBtn.addEventListener("click", function() {
    setTime();
    questionFunc();
    quiz();
});

// Switches to the final page the user sees

function endOfGame() {
    finalScore = score + secondsLeft;
    timeEl.textContent = "";
    currentPage.textContent ="";

    endPage = currentPage;

    endPage.append("Time's Up! \n Congratulations! Your score is: " 
                    + finalScore + "\n Enter your name and press submit to save your score!")
    endPage.append(userName)
    endPage.append(submitBtn)

    endPage.setAttribute("style", "font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif");
    endPage.setAttribute("style", "font-size: 35px; color:blueviolet;");
  }

// Crete and implement timer

function setTime() {
    var timerInterval = setInterval(function() {
       secondsLeft--;
       timeEl.textContent = secondsLeft + " seconds left";
  
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            endOfGame();
        }
    }, 1000);
  }

// Creating the Submit Button and user name input box

var userName = document.createElement("input");
userName.setAttribute("type", "text");
userName.setAttribute("placeholder", "Your Name");
userName.setAttribute("id","userName");

var submitBtn = document.createElement("button"); 
submitBtn.textContent = "Submit";
submitBtn.setAttribute("id","submitBtn");

var nameList = [];

var newName = userName.value;

// Set new scores in scores.html

function renderScore() {
    for (var i = 0; i < nameList.length; i++) {
        var newScore = nameList[i];
    
        var li = document.createElement("li");
        li.textContent = newName + ": " + newScore;
        li.setAttribute("data-index", i);
    
        scores.appendChild(li);
    }
}

// Get user name input
function getInput() {
    scores.innerHTML = "";
    window.location.href = "scores.html"
}  

// Store each name in local storage
function storeNames() {
  localStorage.setItem("nameList", JSON.stringify(nameList));
}

// Check if the highscores list is updated
function init() {
  var storedNames = JSON.parse(localStorage.getItem("nameList"));

  if (storedNames !== null) {
    nameList = storedNames;
  }

  renderScore();
}

// Store and submit the name and score of the player

submitBtn.addEventListener("submit", function(event) {
  event.preventDefault();

  if (newName === "") {
    return;
  }

  nameList.push(newName);
  userName.value = "";

  getInput(), false;
  storeNames();
  renderScore();
  init();
});
