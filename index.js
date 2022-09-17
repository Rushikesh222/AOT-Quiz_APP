var readLineSync = require("readline-sync")
var score = 0;
var userName = readLineSync.question("What is Your Name? ")
console.log("Welcome " + userName + " Do You Know Rushikesh? ")
console.log(userName + " If You Type Wrong Answer then You Will Get -1 And Right Answer Will Give You 1 Point ")
console.log(userName + " Important notice first letter is capital and some answer have space")
var userAnswer = readLineSync.question("Do you Know Attack On Titan? ")
if (userAnswer = "Yes") {
  console.log("This Quiz is For You My Friend " + userName)
} else {
  console.log("This Quiz is Not For You My Friend " + userName)
}
var highScore = {
  name: "Tejas",
  score: 5,
}

function play(question, answer) {
  var userAnswer = readLineSync.question(question)
  if (userAnswer.toUpperCase === answer.toUpperCase) {
    console.log("Right")
    score = score + 1
  } else {
    console.log("Wrong!")
    score = score - 1
  }
  console.log("current score:", score);
  console.log("-------")
}
var question = [{
  question: "Which Titan does Eren Yeager have in First Season ? ",
  answer: "Attack Titan",
}, {
  question: "Which Titan does Armin Arlert have ? ",
  answer: "	Colossus Titan",
}, {
  question: "Whick Titan does Reiner Braun have ? ",
  answer: "Armored Titan",
}, {
  question: "Who has Female Titan ? ",
  answer: "Annie Leonhart",
}, {
  question: "The Princess Name in Attack On Titan ? ",
  answer: "Historia Reiss",
}, {
  question: "Does Eren Yeager Can See Future  ? ",
  answer: "Yes",
},]
for (i = 0; i < question.length; i++) {
  var currentQuestion = question[i]
  play(currentQuestion.question, currentQuestion.answer)
}

if (highScore.score = score) {
  console.log("you score higher than " + highScore.name + " my friend" + userName)
} else {
  console.log("you score less than " + highScore.name + " my friend" + userName)
}
console.log("YAY! You Scored", score)