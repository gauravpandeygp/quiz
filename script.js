const quizData = [
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "Python", "Java"],
        answer: 1
    },
    {
        question: "Which language is used to make websites interactive?",
        options: ["CSS", "HTML", "JavaScript", "SQL"],
        answer: 2
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<img>", "<a>", "<link>", "<p>"],
        answer: 1
    },
    {
        question: "Which property changes text color in CSS?",
        options: ["font-size", "background", "color", "padding"],
        answer: 2
    },
    {
        question: "JavaScript is mainly used for?",
        options: [
            "Database",
            "Styling",
            "Adding Interactivity",
            "Operating System"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {

    const current = quizData[currentQuestion];

    question.innerText = current.question;

    options.forEach((button, index) => {
        button.innerText = current.options[index];
        button.disabled = false;
        button.style.background = "#3498db";
    });

}

function checkAnswer(selected) {

    const correct = quizData[currentQuestion].answer;

    if (selected === correct) {
        score++;
        options[selected].style.background = "green";
    } else {
        options[selected].style.background = "red";
        options[correct].style.background = "green";
    }

    options.forEach(button => {
        button.disabled = true;
    });

}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < quizData.length) {

        loadQuestion();

    } else {

        document.getElementById("quiz-box").innerHTML =
        `
        <h2>Quiz Completed!</h2>
        <h3>Your Score: ${score} / ${quizData.length}</h3>
        <button onclick="location.reload()">Restart Quiz</button>
        `;

        nextBtn.style.display = "none";

    }

}

loadQuestion();