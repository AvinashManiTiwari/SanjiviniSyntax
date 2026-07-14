/* ==========================================
   SanjiviniSyntax
   quiz.js
========================================== */

/* ===========================
   Quiz Variables
=========================== */

const questions = quizData[QUIZ_TYPE];

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;


/* ===========================
   HTML Elements
=========================== */

const questionNumber =
document.getElementById("questionNumber");

const totalQuestion =
document.getElementById("totalQuestion");

const questionText =
document.getElementById("questionText");

const optionContainer =
document.getElementById("optionContainer");


/* ===========================
   Total Questions
=========================== */

totalQuestion.textContent = questions.length;


/* ===========================
   Load Question
=========================== */

function loadQuestion(){

    selectedAnswer = null;

    const question = questions[currentQuestion];

    questionNumber.textContent =
    currentQuestion + 1;

    questionText.textContent =
    question.question;

    optionContainer.innerHTML = "";

    question.options.forEach(function(option,index){

        const button =
        document.createElement("button");

        button.className =
        "quiz-option";

        button.innerHTML =
        option;

        button.onclick = function(){

            selectAnswer(index);

        };

        optionContainer.appendChild(button);

});

startTimer();

updateProgress();

}


/* ===========================
   Select Answer
=========================== */

function selectAnswer(index){

    selectedAnswer = index;

    const buttons = document.querySelectorAll(".quiz-option");

    buttons.forEach(function(btn){

        btn.disabled = true;

    });

    if(index === questions[currentQuestion].answer){

        buttons[index].classList.add("correct");

    }

    else{

        buttons[index].classList.add("wrong");

        buttons[questions[currentQuestion].answer]
        .classList.add("correct");

    }

}






/* ===========================
   Timer
=========================== */

let timer;

let timeLeft = 30;







/* ===========================
   Start Timer
=========================== */

function startTimer(){

    clearInterval(timer);

    timeLeft = 30;

    document.getElementById("timer").textContent = timeLeft;

    timer = setInterval(function(){

        timeLeft--;

        document.getElementById("timer").textContent = timeLeft;

        if(timeLeft <= 0){

            clearInterval(timer);

            nextQuestion();

        }

    },1000);

}


/* ===========================
   Start Quiz
=========================== */

 loadQuestion();

// startTimer();

// updateProgress();






/* ===========================
   Progress Bar
=========================== */

function updateProgress(){

    const progress =

    ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progressBar").style.width =

    progress + "%";

}




/* ===========================
   Next Question
=========================== */

function nextQuestion(){

    if(selectedAnswer === null){

        alert("Please select an option.");

        return;

    }

    clearInterval(timer);

    if(selectedAnswer === questions[currentQuestion].answer){

        score++;

    }

    currentQuestion++;

    selectedAnswer = null;

    console.log(questions[currentQuestion]);

    if(currentQuestion >= questions.length){

        showResult();

        return;

    }

    loadQuestion();

}





/* ===========================
   Previous Question
=========================== */

function previousQuestion(){

    if(currentQuestion === 0){

        return;

    }

    clearInterval(timer);

    currentQuestion--;

    selectedAnswer = null;

    loadQuestion();

}




document
.getElementById("nextBtn")
.onclick = nextQuestion;

document
.getElementById("previousBtn")
.onclick = previousQuestion;






/* ===========================
   Show Result
=========================== */

function showResult(){

    clearInterval(timer);

    document.querySelector(".quiz-box").style.display = "none";

    document.getElementById("resultBox").style.display = "block";

    const total = questions.length;

    const wrong = total - score;

    const percentage =

    Math.round((score/total)*100);

    let highScore =

    localStorage.getItem(QUIZ_TYPE+"_highScore") || 0;

    if(score > highScore){

        highScore = score;

        localStorage.setItem(

            QUIZ_TYPE+"_highScore",

            score

        );

    }

    document.getElementById("resultScore").innerHTML =

    `<h2>Your Score : ${score}/${total}</h2>`;

    document.getElementById("correctAnswer").innerHTML =

    `✅ Correct : ${score}`;

    document.getElementById("wrongAnswer").innerHTML =

    `❌ Wrong : ${wrong}`;

    document.getElementById("percentage").innerHTML =

    `📊 Percentage : ${percentage}%`;

    document.getElementById("highScore").innerHTML =

    `🏆 High Score : ${highScore}`;

}






/* ===========================
   Restart Quiz
=========================== */

function restartQuiz(){

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    document.querySelector(".quiz-box").style.display = "block";

    document.getElementById("resultBox").style.display = "none";

    loadQuestion();

}


document

.getElementById("restartQuiz")

.onclick = restartQuiz;