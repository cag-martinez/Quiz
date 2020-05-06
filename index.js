var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startBtn = document.querySelector("start");
var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

document.getElementById("start").onclick = function setTime() {
    timeEl.textContent = " ";
    mainEl.appendChild("time is up");
  }

start.addEventListener("click", myFunction);
function myFunction(setTime)

  //questions

  var quizQuestions = [
      {"In which city is friends set?": 
        "LA", "NY", "Miami", "Seattle"}

      {"What is the name of the coffe shop used by the characters?": 
        "St. James Perk", "Central Perk", "Froth of Khan", "Daily Grind"}

      {"What pet did Ross own?": 
        "Monkey", "Lizard", "Rabit", "dog"}

      {"What does Joey never share?": 
        "His books", "His information", "His food", "His dvd's"}
  ]

