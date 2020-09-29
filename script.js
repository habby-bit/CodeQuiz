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

var secondsLeft = 10;
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

function questionFunc() {
    var q = questions[currentQuestion];

    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function quiz() {
    currentPage.textContent = "";
    currentPage.append(quizQ)

    choices.appendChild(choiceA)
    choices.appendChild(choiceB)
    choices.appendChild(choiceC)
    choices.appendChild(choiceD)

    choices.addEventListener("click", function() {
        checkAnswer();
        currentQuestion++;
    })
}

function checkAnswer () {
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

startBtn.addEventListener("click", function() {
    setTime();
    questionFunc();
    quiz();
});

function endOfGame() {
    finalScore = score + secondsLeft;
    timeEl.textContent = "";
    currentPage.textContent ="";

    endPage = currentPage;

    endPage.append("Time's Up! \n Congratulations! Your score is: " + finalScore)
    endPage.append(". Enter your name and press submit to save your score!")
    endPage.append(userName)
    endPage.append(submitBtn)

    endPage.setAttribute("style", "font-size: 50px; color:blue;");
  }

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

var userName = document.createElement("input");
userName.setAttribute("type", "text");
userName.setAttribute("placeholder", "Your Name");
userName.setAttribute("id","userName");

var submitBtn = document.createElement("button"); 
submitBtn.textContent = "Submit";
submitBtn.setAttribute("id","submitBtn");

var nameList = [];

var newName = userName.value;

function renderScore() {
    for (var i = 0; i < nameList.length; i++) {
        var newScore = nameList[i];
    
        var li = document.createElement("li");
        li.textContent = newName + ": " + newScore;
        li.setAttribute("data-index", i);
    
        scores.appendChild(li);
    }
}

function getInput() {
    scores.innerHTML = "";
    // window.location.href = "scores.html"
}  

function storeNames() {
  localStorage.setItem("nameList", JSON.stringify(nameList));
}

function init() {
  var storedNames = JSON.parse(localStorage.getItem("nameList"));

  if (storedNames !== null) {
    nameList = storedNames;
  }

  renderScore();
}

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
