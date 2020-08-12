
let timer = 30
let currentQuestion = 0 
let interval = 0
let score = 0 //new code

let startButton = document.getElementById("starter") //move to top when done
let timerText = document.getElementById("timerText") // move to top
let questionAsked = document.getElementById("questionAsked") // move to top
let choiceButtons = document.getElementsByClassName("choice") // move to top later
let selectedAnswer = null; // Selected answer new code
let scoreCounter = document.getElementById("score-counter") // move to top later new code
let buttonGrabber = document.getElementById("button-group")

choiceButtons.hide
startButton.addEventListener("click", startQuiz)


for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener('click', checkQuestion);
  }


let questions = [
    {
        question: "arrays in Javascript can be used to store ___?", 
        choices: ["a. numbers", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "d. all of the above"
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


function startQuiz() {
    startButton.remove()
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


//asks the question

function askQuestion() {
    questionAsked.textContent = questions[currentQuestion].question
    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].textContent = questions[currentQuestion].choices[i]
            
        }
    }
//starts the time
    function renderTime() {
        timerText.textContent = timer
    }
    

//checks if the question is correct

function checkQuestion() {
    event.preventDefault();
    let isCorrect = event.target.textContent === questions[currentQuestion].answer;

    if (isCorrect) {
        score +=10
          scoreCounter.textContent = score
        }  else {
          timer -= 5
          timerText.textContent = timer
        }
      
        currentQuestion++;

        if (currentQuestion >= questions.length) {
           questionAsked.style.display = "none"
           buttonGrabber.style.display = "none"
           //stop timer
           //create element showing current score // maybe display: block
           // make input text for persons initials with a submit button
           //add event listener to submit button that {
               //style.display none the elements
               // shows initials and score
               //oops i didn't need to add a score, the timer is the score. so display the timers value as the score
           //}


        } else {
            askQuestion();
         } 
    }






        //make score element with id
        // grab score element by id
        // Add to our score with id.textcontent = id.textcontent + 10




        // make a function that stops timer and links to another html page
        // make an element that shows current score 
        // End the quiz, show the results




        // check answer, if there are more questions: currentquestion++ run askquestion() 
        // else end quiz aka don't increment questions show score stop timer--
        // if right add to score
        // if wrong run question timer-5
