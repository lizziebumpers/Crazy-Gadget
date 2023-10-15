const questions = [
    {
        question: "Where in the HTML tags do you add the script tag?",
        answers: [
            { text: "header", correct: false},
            { text: "main", correct: false},
            { text: "body", correct: true},
            { text: "head", correct: false}
        ]
    },
    {
        question: "JavaScript is a ____-side programming language?",
        answers: [
            { text: "Client", correct: false},
            { text: "Server", correct: false},
            { text: "Neither", correct: false},
            { text: "Client and Server", correct: true}
        ]
    },
    {
        question: "How do you open a confirm window in JavaScript?",
        answers: [
            { text: "confirm()", correct: true},
            { text: "open.confirm()", correct: false},
            { text: "confirm.open()", correct: false},
            { text: "openconfirm()", correct: false}
        ]
    },
    {
        question: "Which of the following is used for assigning a value to a variable?",
        answers: [
            { text: "*", correct: false},
            { text: "+", correct: false},
            { text: "=", correct: true},
            { text: "-", correct: false}
        ]
    },
    {
        question: "Which symbol is use to target everything in a CSS stylesheet?",
        answers: [
            { text: "~", correct: false},
            { text: "*", correct: true},
            { text: "&", correct: false},
            { text: "_", correct: false}
        ]
    },
];
let quizQuestion = document.getElementById('question');
let quizAnswer = document.getElementById('answers');
let seconds = 90;
let score = 0;
let questionIndex = 0;
const timerElement = document.getElementById('timer');
const quizSection = document.getElementsByClassName("quiz");
const finalScoreSection = document.getElementsByClassName("final-score");
const highScoreSection = document.getElementsByClassName("high-score");
const startSection = document.getElementsByClassName("start");
const btnSelector = document.getElementsByClassName("btn")

function moveQuestion() {
    let nextQuestionIndex = questionIndex + 1;
}

function showQuestions() {
    let currentQuestion = questions[questionIndex];
    quizQuestion.innerHTML = currentQuestion.question;
    
    removeBtns();
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      quizAnswer.appendChild(button);
    });
    nextQuestion();
}

function removeBtns() {
    while(quizAnswer.firstChild){
        quizAnswer.removeChild(quizAnswer.firstChild)
    }
}

function nextQuestion() {
    btnSelector.addEventListener("click", function next() {
        if (correct) {
            moveQuestion()
        } else {
            moveQuestion()
        }
    })
}

function startTimer() {
  const countdownTimer = setInterval(() => {
      seconds--;
      timerElement.textContent = "Timer: " + seconds;
      if (seconds === 0) {
          clearInterval(countdownTimer);
          console.log("Countdown finished");
        };
    }, 1000);
};

const startBtn = document.getElementById("start-button");
startBtn.addEventListener("click", function() {
    const quizSection = document.getElementsByClassName("quiz");
    for (let i = 0; i < quizSection.length; ++i) {
        quizSection[i].style.display = "block";
    };
    hideStart();
    startTimer();
    showQuestions();
});

function hideQuiz () {
    for (let i = 0; i < quizSection.length; ++i) {
        quizSection[i].style.display = "none";
    };
    // hides the quiz section
};
function hideFinalScore () {
    for (let i = 0; i < finalScoreSection.length; ++i) {
        finalScoreSection[i].style.display = "none";
    };
    // hides the final-score section
};
function hideHighScore () {
    for (let i = 0; i < highScoreSection.length; ++i) {
        highScoreSection[i].style.display = "none";
    };
    // hides the high-score section 
};
function hideStart () {
    for (let i = 0; i < startSection.length; ++i) {
        startSection[i].style.display = "none";
    };
    // hides the start menu
}

hideQuiz()
hideFinalScore();
hideHighScore();