var startBtn = document.querySelector("#startBtn");
var currentPage = document.querySelector("#main")
var answerBtn = document.createElement("BUTTON");

var welcomePage;
var endPage;
var questions = [

  
];

var q1 = {question:"Question1", option1:"option1.1", option2:"option1.2", option3:"option1.3", option4:"option1.4"};
var q2 = {question:"Question2", option1:"option2.1", option2:"option2.2", option3:"option2.3", option4:"option2.4"};
var q3 = {question:"Question3", option1:"option3.1", option2:"option3.2", option3:"option3.3", option4:"option3.4"};
var q4 = {question:"Question4", option1:"option4.1", option2:"option4.2", option3:"option4.3", option4:"option4.4"};
var q5 = {question:"Question5", option1:"option5.1", option2:"option5.2", option3:"option5.3", option4:"option5.4"};
var q6 = {question:"Question6", option1:"option6.1", option2:"option6.2", option3:"option6.3", option4:"option6.4"};
var q7 = {question:"Question7", option1:"option7.1", option2:"option7.2", option3:"option7.3", option4:"option7.4"};
var q8 = {question:"Question8", option1:"option8.1", option2:"option8.2", option3:"option8.3", option4:"option8.4"};
var q9 = {question:"Question9", option1:"option9.1", option2:"option9.2", option3:"option9.3", option4:"option9.4"};
var q10 = {question:"Question10", option1:"option10.1", option2:"option10.2", option3:"option10.3", option4:"option10.4"};

questions.push(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10)

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

function questionFunc() {

  currentPage.textContent = "";


      for (var i = 0; i < questions.length; i++) {
        var choices = Object.values(questions[i]) 

        for (var j = 1; j < choices.length; j++) {

          var answerBtn = document.createElement("BUTTON");

          var text = document.createTextNode( " " + JSON.stringify(choices[j] + " "));

          answerBtn.append(text);

          currentPage.append(answerBtn);
        }

        answerBtn.addEventListener("click", function(event) {
          var element = event.target;
          if (element.matches(button)===true) {

          }
        })

      }
}

// var counter = 0;

// answerBtn.addEventListener("click", function() {

//   if (counter < choices.length) {
//     console.log("WTF")
//   }
// })


// var array_of_questions = ["Question1", "question2", "question3"];
// var counter = 0;

// $("#submit_button").on('click', function() {
//   //save data
//   if (counter < array_of_questions.length) {
//     $("#display").append("<div>" + array_of_questions[counter] + "</div>");
//     counter++;
//   }
// });




startBtn.addEventListener("click", function() {
    setTime();
    questionFunc();
});


  // questions.addEventListener("click", function(event) {
  //   var element = event.target;
  
  //   // If that element is a button...
  //   if (element.matches("button") === true) {
  //     // Get its data-index value and remove the todo element from the list
  //     var index = element.parentElement.getAttribute("data-index");
  //     todos.splice(index, 1);
  
  //     // Store updated todos in localStorage, re-render the list
  //     storeTodos();
  //     renderTodos();
  //   }
  // }

    // incrementEl.addEventListener("click", function() {
//   count++;
//   setCounterText();
// });
