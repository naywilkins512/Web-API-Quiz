


let timer = 30
let questions = [
    {
        question: "what is javascript?", 
        choices: ["javascript", "html", "css", "java"],
        answer: "javascript"
    },
    {
        question: "what is html?", 
        choices: ["javascript", "html", "css", "java"],
        answer: "html"
    },
    {
        question: "what is css?", 
        choices: ["javascript", "html", "css", "java"],
        answer: "css"
    },
    {
        question: "what is java?", 
        choices: ["javascript", "html", "css", "java"],
        answer: "java"
    },
]

let currentQuestion = 0 
let interval = 0

let submitButton = document.getElementById("submitter") //move to top when done
let timerText = document.getElementById("timerText") // move to top
let questionAsked = document.getElementById("questionAsked") // move to top
let choiceButtons = document.getElementsByClassName("choice") // move to top later
// let selectedAnswer = null; // Selected answer

submitButton.addEventListener("click", checkQuestion)
// choiceButtons[i].addEventListener("click", setSelected);

function startQuiz() {
    interval = setInterval(function() {
        
        // So renderTime() is called here once every second.
        if (timer > 0) {
            timer--;
        }
        else {
            clearInterval(interval)
        }
        renderTime();
      }, 1000);
      askQuestion()
}
startQuiz()

function checkQuestion() {}
    // event.preventDefault();
//     const isCorrect = selectedAnswer.textContent === questions[currentQuestion].answer;

//     if (isCorrect) {
//         // Add to our score

//         if (currentQuestion === (questions.length - 1)) {
//             // End the quiz, show the results
//         } else {
//             currentQuestion++;
//             askQuestion();
//         }
//     } else {
//         timer -= 5;
//     }
// }

    // check answer, if there are more questions: currentquestion++ run askquestion() 
    // else end quiz aka don't increment questions show score stop timer--
    // if right add to score
    // if wrong run question timer-5



function renderTime() {
    timerText.textContent = timer
}

function askQuestion() {
    questionAsked.textContent = questions[currentQuestion].question
    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].textContent = questions[currentQuestion].choices[i]
            
        }
    }
