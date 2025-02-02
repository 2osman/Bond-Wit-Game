// Array of questions based on Bond's witty responses
const questions = [
    "Vesper: I'm the money. How will you respond?",
    "Bond: Only if one assumes that the person with the best hand always wins. How do you respond?",
    "Bond: I tend to notice little things like that—whether a girl is a blonde or a brunette. What do you say?",
    "Bond: Skewered. One sympathizes. What's your comeback?"
];

// Initializing the game variables
let currentQuestionIndex = 0;

// Function to display the current question
function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.textContent = questions[currentQuestionIndex];
}

// Function to handle submitting the answer and scoring it
function submitAnswer() {
    const userAnswer = document.getElementById('user-answer').value;
    const scoreElement = document.getElementById('score');

    // For simplicity, assuming a fixed score logic (this can be refined)
    let score = 0;

    // Example simple scoring logic: if the answer includes key "Bond" word, score is 10.
    if (userAnswer.toLowerCase().includes("bond")) {
        score = 10;
    }

    // Update score
    scoreElement.textContent = score;

    // Move to next question (if available)
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById('user-answer').value = ''; // Clear previous answer
    } else {
        alert("Game Over! You completed all questions.");
    }
}

// Set up event listeners
document.getElementById('submit-answer').addEventListener('click', submitAnswer);

// Initialize the game by displaying the first question
displayQuestion();
