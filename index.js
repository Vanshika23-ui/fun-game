var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Vansh",
    score: 3,
  },

  {
    name: "Bhavika",
    score: 2,
  },
]

var questions = [{
  question: "2018 Best Movie? ",
  answer: "Dear Zindagi"
}, {
  question: "Male character in the movie? ",
  answer: "Shahrukh khan"
},
{
  question: "Female character in the movie? ",
  answer: "Alia bhatt"
}, {
  question: "Best song in the movie",
  answer: "Love you zindagi"
}, {
  question: "Movie is about? ",
  answer: "Loving your life"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName );
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAYYY! You SCORED: ", score);
  console.log("Recent high scores are:");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScores();
