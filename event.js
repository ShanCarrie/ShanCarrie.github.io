const questions = [
    {
        question: "What is the main ingredient in a croissant?",
        options: ["Butter", "Chocolate", "Cheese", "Cinnamon"],
        correctAnswer: "Butter"
    },
    {
        question: "Which pastry is known for its flaky layers?",
        options: ["Danish", "Eclair", "Puff Pastry", "Scone"],
        correctAnswer: "Puff Pastry"
    },
    {
        question: "What is the primary flavor in a red velvet cake?",
        options: ["Chocolate", "Vanilla", "Strawberry", "Caramel"],
        correctAnswer: "Chocolate"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionContainer.textContent = questions[currentQuestion].question;

    optionsContainer.innerHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;

    // You can add more content or actions based on the user's result here.
}

function nextQuestion() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = "";

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Load the first question when the page loads
document.addEventListener("DOMContentLoaded", loadQuestion);
