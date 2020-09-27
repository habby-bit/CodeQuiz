var startBtn = document.querySelector("#startBtn");
var currentPage = document.querySelector("#main")
var answerBtn = document.createElement("BUTTON");

var welcomePage;
var endPage;
var questions = [

{
    question: "Question1",
    choice1: "a",
    choice2: "b",
    choice3: "c",
    answer: "A"
},
{
    question: "Question2",
    choice1: "a",
    choice2: "b",
    choice3: "c",
    answer: "B"
},
{
    question: "Question3",
    choice1: "a",
    choice2: "b",
    choice3: "c",
    answer: "C"
},
{
    question: "Question4",
    choice1: "a",
    choice2: "b",
    choice3: "c",
    answer: "A"
},
{
    question: "Question5",
    choice1: "a",
    choice2: "b",
    choice3: "c",
    answer: "B"
}

];

var timeEl = document.querySelector("#timer") 

secondsLeft = 10;

function endOfGame() {
    timeEl.textContent = "";
    endPage = currentPage;
    endPage.textContent = "Time's Up! Congratulations! Your score is: ";

    endPage.setAttribute("style", "font-size: 65px; color:blue;");
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

currentQuestion = 0;

function questionFunc() {
    let q = questions[currentQuestion];
    question.innerHTML = q.question;
    choice1Btn.innerHTML = q.choice1;
    choice2Btn.innerHTML = q.choice2;
    choice3Btn.innerHTML = q.choice3;
    console.log('choice3Btn:', choice3Btn)



    var answerBtn = document.createElement("BUTTON");

    var text = document.createTextNode( " " + JSON.stringify(choices[j] + " "));

    answerBtn.append(text);

    currentPage.append(answerBtn);



  currentPage.textContent = "";


      for (var i = 0; i < questions.length; i++) {
        var choices = Object.values(questions[i]) 

        for (var j = 1; j < choices.length; j++) {


        }

        answerBtn.addEventListener("click", function(event) {
          var element = event.target;
          if (element.matches(button)===true) {

          }
        })

      }
}


startBtn.addEventListener("click", function() {
    setTime();
    questionFunc();
});

