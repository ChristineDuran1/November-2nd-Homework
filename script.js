var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")

var questionContainerEl = document.getElementById("question-container")

var choicesButtons = document.getElementById("choices-buttons")
var submitButton = document.getElementById("submit-btn")

var titleEl = document.getElementById("title")
var choicesEl = document.getElementById("choices")
var answerEl = document.getElementById("answer")

var currentQuestionIndex = 0;

// var timer
// var timerEl

var questions = [
  {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
  },
  {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
  },
  {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
  },
  {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
  },
  {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
  }];


function clock() {
  var myTimer = setInterval(myClock, 1000);
  var c = 75;


  function myClock() {
    document.getElementById("timer").innerHTML = --c;
    if (c == 0) {
      clearInterval(myTimer);
    }
  }
}


startButton.addEventListener("click", startQuiz)

function startQuiz() {
	startButton.classList.add("hide");
	currentQuestionIndex = 0;
	questionContainerElement.classList.remove("hide");
	setNextQuestion()
}

function setNextTitle() {
	resetTitle();
	showQuestion(currentQuestionIndex);
}

function showTitle(title){
    titleEl.innerText = title.title;
    title.choices.forEach(answer => {
    	var button = document.createElement("button");
    	button.innerText = choices.text;
    	button.classList.add("btn");
    	if (choices.correct) {
    		button.dataset.correct = choices.correct
    	}
    	button.addEventListener("click", selectAnswer)
    	answerButtons.appendChild(button);
    })
}

function resetTitle() {
	nextButton.classList.add("hide");
	while (choicesButtons.firstChild) {
		choicesButtons.removeChild;
		(choicesButtons.firstChild);
	}
}

function selectChoices(e) {

}


// var choiceNode = document.createElement("button");
// choiceNode.createAttribute("class", "choice")
// choiceNode.createAttribute("value", choice)

// choiceNode.textContect = i + 1 + ". " + choice;


// function myFunction() {
//   var btn = document.createElement("BUTTON");
//   btn.innerHTML = "Start Quiz!";
//   document.body.appendChild(btn);
// }

// function GetValue() {
//   var myarray = new Array("item1", "item2", "item3");
//   var random = myarray[Math.floor(Math.random() * myarray.length)];
//   //alert(random);
//   document.getElementById("message").innerHTML = random;
// }

// setTimeout()


