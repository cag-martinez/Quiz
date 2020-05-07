//start button and timmer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startBtn = document.querySelector("#start");
var secondsLeft = 60;

function setTime() {
  var setTimeout = setInterval(function () {
    
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft <= 0) {
        secondsLeft = 0
      clearTimeout(setTimeout);
    }
    else(secondsLeft--)
  }, 1000);
}

startBtn.onclick = setTime;

//answer buttons
var buttonA = document.querySelector("#buttonA");
var buttonB = document.querySelector("#buttonB");
var buttonC = document.querySelector("#buttonC");
var buttonD = document.querySelector("#buttonD");
var question = document.querySelector("#question");

var questionDiv = document.getElementById("question");
var choicesDiv = document.getElementById("choices");

//questions
var questions = [
  {
    q: "In which city is friends set?",
    choices: ["LA", "NY", "Miami", "Seattle"],
    answer: "NY"
  },

  {
    q: "What is the name of the coffe shop used by the characters?",
    choices: ["St. James Perk", "Central Perk", "Froth of Khan", "Daily Grind"],
    answer: "Central Perk"
  },

  {
    q: "What pet did Ross own?",
    choices: ["Monkey", "Lizard", "Rabit", "dog"],
    answer: "Monkey"
  },

  {
    q: "What does Joey never share?",
    choices: ["His books", "His information", "His food", "His dvd's"],
    answer: "His food"
  },
];


var index = 0
var point = 0

startBtn.onclick =function () {
    document.getElementById("answer").classList.remove("d-none")
    questionDiv.classList.remove("d-none")
    setTime()
    renderQuestion(0)
  } 
  
  function answerCheck(event) {
    console.log(event.target.value)
    if (event.target.value === '1') {
        point = point +  1
        index++ 
    }
    else if(secondsLeft <= 10) {
        secondsLeft = 0
    }
    else(secondsLeft = secondsLeft - 10)
    if(index === questions.length)
    alert("game over")
    else(renderQuestion(index))
  }

function renderQuestion(index) {
    var currentQuestion = questions[index];
    console.log(currentQuestion.question)

    questionDiv.textContent = currentQuestion.q;
    console.log("here")

    var buttonsArray =[buttonA, buttonB, buttonC, buttonD]

    for (var i = 0; i < buttonsArray.length; i++) {
        buttonsArray[i].textContent = currentQuestion.choices[i]
        buttonsArray[i].value = 0
        if (currentQuestion.choices[i] === currentQuestion.answer)
            buttonsArray[i].value = 1

        buttonsArray[i].onclick = answerCheck
      }    
  }
