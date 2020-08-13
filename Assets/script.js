
let timer = 30
let currentQuestion = 0
let interval = 0
let score = 0 

let startButton = document.getElementById("starter"); 
let timerText = document.getElementById("timerText"); 
let questionAsked = document.getElementById("questionAsked"); 
let choiceButtons = document.getElementsByClassName("choice"); 
let scoreCounter = document.getElementById("score-counter"); 
let buttonGrabber = document.getElementById("button-group");
let topperGrabber = document.getElementById("topper");
let rightorwrong = document.getElementById("right-or-wrong");
let initials = document.getElementById("initials");
let highscores = document.getElementById("highscores");
let highscorers = document.getElementById("highscorers");



let confirmInitials = document.getElementById("confirmInitials").addEventListener("click", function (event) {
    event.preventDefault();
    scoreboard();
});

document.getElementById("redo-quiz").addEventListener("click", redoQuiz);
document.getElementById("clear-highscores").addEventListener("click", clearHighscores);

choiceButtons.hide
startButton.addEventListener("click", startQuiz);


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
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<javascript></javascript>", "<html></html>", "<css></css>", "<script></script>"],
        answer: "<script></script>"
    },
    {
        question: "How do you write 'hello world' in an alert box?",
        choices: ["msgBox('hello world')", "alert('hello world')", "alertBox('hello world')", "msg('hello world')"],
        answer: "alert('hello world')"
    },
    {
        question: "what is java?",
        choices: ["javascript", "html", "css", "java"],
        answer: "java"
    },
]


function startQuiz() {
    startButton.remove()
    buttonGrabber.style.display = "flex"
    interval = setInterval(function () {


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
        rightorwrong.textContent = "CORRECT!"
    } else {
        rightorwrong.textContent = "WRONG!"
        timer -= 5
        timerText.textContent = timer
    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        clearInterval(interval)

        questionAsked.style.display = "none"
        buttonGrabber.style.display = "none"
        rightorwrong.style.display = "none"
        topperGrabber.textContent = "YOUR SCORE IS:"
        initials.style.display = "flex"


    } else {
        askQuestion();
    }
}

function scoreboard() {
    initials.style.display = "none";
    topperGrabber.style.display = "none";
    timerText.textContent = "Highscores";
    highscores.style.display = "flex";
    

    let savedscore = document.getElementById("inputPassword2").value

    let savedscoreArr = JSON.parse(localStorage.getItem("inputPassword2"))
    if (!savedscoreArr) {
        savedscoreArr = []
    }
    savedscoreArr.push({ [savedscore]: timer })

    localStorage.setItem("inputPassword2", JSON.stringify(savedscoreArr))

    console.log(savedscoreArr)



    for (let i = 0; i < savedscoreArr.length; i++) {
        let list = document.createElement("li")
        list.innerText = Object.keys(savedscoreArr[i])[0] + ": " + savedscoreArr[i][Object.keys(savedscoreArr[i])[0]];
        highscorers.append(list)

    }
}



function clearHighscores() {
    window.localStorage.clear();
    highscorers.style.display = "none"


}

function redoQuiz() {
    location.reload();
}

