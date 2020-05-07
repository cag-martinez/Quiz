var userInput = document.querySelector("#user-text");
var scoreForm = document.querySelector("#score-form");
var scoreList = document.querySelector("#score-list");
var playerCountSpan = document.querySelector("#player-count");

var playersCount = {};



function renderScores() {

  scoreList.innerHTML = "";
  playerCountSpan.textContent = players.length;


  for (var i = 0; i < players.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = players;
    scoreList.appendChild(li);
  }
}

scoreForm.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("madeIt")
  
  var newText = userInput()

  if(newText === "") return
  players.push(newText)
  

  renderScores()
})