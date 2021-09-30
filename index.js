var readlineSync = require('readline-sync');

var score = 0;
var myName = readlineSync.question("What is my name?");

if(myName == "Vanshika") {
  console.log("You are right")
  score = score+1;
  console.log("Score is: " + score)
}else {
  console.log("You are wrong")
  score = score-1;
  console.log("Score is: " + score)
}

var favmovie = readlineSync.question("What is Vanshika's favourite movie?");

if(favmovie == "Dear zindagi") {
  console.log("You are right")
  score = score + 1;
  console.log("Score is:" + score)
}else {
  console.log("You are wrong")
  score = score-1;
  console.log("Score is:" + score)
}

var favchar = readlineSync.question("who is vanshika's favourite character from the movie");

if(favchar == "alia bhatt") {
  console.log("You are right")
  score = score +1;
  console.log("Score is:" + score)
}else {
  console.log("You are wrong")
  score = score-1;
  console.log("Score is:" + score)
}

var malechar = readlineSync.question("who is the male actor in the movie");

if(malechar == "shahrukh khan") {
  console.log("You are right")
  score = score +1;
  console.log("Score is:" + score)
}else {
  console.log("You are wrong")
  score = score-1;
  console.log("Score is:" + score)
}

console.log(myName);
console.log(favmovie);
console.log(favchar);
console.log(malechar);