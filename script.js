var startBtn = document.querySelector("#startBtn");
var currentPage = document.querySelector("#main")

var welcomePage;
var endPage;

var timeEl = document.querySelector("#timer") 

secondsLeft = 3;

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

startBtn.addEventListener("click", function() {
    setTime()
  });

