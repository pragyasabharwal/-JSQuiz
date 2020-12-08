var readLineSync = require('readline-sync') // installing readline-sync dependency

const chalk = require('chalk') // installing chalk

const log = console.log

log(chalk.whiteBright.bgBlue.bold("-----------------\nHola! Fellow Geek\n-----------------"))

log(chalk.magentaBright
.bold.underline("\nWe welcome you to a JS Quiz to test your knowledge!\n"))

console.log("Before you proceed further, here is a tally of the top scores and rules")

log(chalk.red("\nPrevious Top Scorers:\n---------------------\nAnmol: 3\nKriti: 2\nRahul: 2\n"))

log(chalk.yellowBright("Rules"))

console.log("1. 4 options will be displayed to you. You will have to choose the correct number [0, 1, 2, 3].")
var add = chalk.green("+1")
var add1 = "for a right answer."

console.log("2. You get "+add+  " "+ add1)

var add2 = chalk.red("-1")
var add3 = "for a wrong answer."

console.log("3. You get "+add2+  " "+ add3)
console.log("4. No points get deducted if you choose 0.")

console.log("----------------------")

var userName = readLineSync.question(chalk.red("What is your name? "))

log(chalk.blueBright("Welcome "+userName+"!"))

questions = [{
                question: 'var a = ["dog", "cat", "hen"];\na[100] = "fox";\nconsole.log(a.length). What will be logged to the console?',
                options: ["3","100","101","4"],
                answer: "101",
                explanation: "Length of the array is one more than the highest index"
            },
            {
                question: "Which method do you use to attach one DOM node to another?",
                options: ["getNode()","querySelector()","appendChild()"],
                answer: "appendChild()",
            },
            {
                question: "Which method of the following removes and returns the first item?",
                options:["a.pop()","a.push()","a.shift()"],
                answer: "a.shift()"
            }
        ]

score=0;

if(readLineSync.keyInYN("Do you want to play")){

var readlineSync = require('readline-sync')


  function play(question, options, answer){

    console.log("\n"+question)
    index = readlineSync.keyInSelect(options)

      if(options[index]==answer){
        
        score++
         log(chalk.green("You know this answer! " + "\n" + "Points: " + score))
                console.log("--------")

      }
      else if(options[index]==undefined){
       log(chalk.yellow("Score remains same. \nPoints: " + score))
        console.log("--------")
      }
      else{
         score--
                log(chalk.red("Oops\nPoints: " + score))
                console.log("--------")
      }
    }
for(i=0;i<questions.length;i++){
play(questions[i].question, questions[i].options, questions[i].answer)
// console.log("Explanation: " + questions[i].explanation)
}
highScores=[3,2,2]
for(i=0;i<highScores.length;i++)
if(score>=highScores[i]){
log(chalk.bold.black.bgGreen("Final score: "+score))
log(chalk.bold.black.bgGreen("You are a top scorer. Please send a screenshot of your score!"))
break
}}
else{
console.log("Bye "+ userName)}








