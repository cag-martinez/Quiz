//start button and timmer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startBtn = document.querySelector("#start");
var secondsLeft = 10;

function setTime() {
  var setTimeout = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearTimeout(setTimeout);
    }
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
    question: "In which city is friends set?",
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

function renderQuestion() {
    var currentQuestion = questions[0];

    questionDiv.textContent = currentQuestion.question.q;

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];

        var btn = document.createElement("button");

        btn.textContent = "LA";
        choicesDiv.appendChild(buttonA);

        renderQuestion();
    }    
}


