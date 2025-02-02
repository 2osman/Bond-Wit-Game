// Array of questions based on Bond's witty responses
const questions = [
    "Vesper: I'm the money. How will you respond?",
    "Bond: Only if one assumes that the person with the best hand always wins. How do you respond?",
    "Bond: I tend to notice little things like that—whether a girl is a blonde or a brunette. What do you say?",
    "Bond: Skewered. One sympathizes. What's your comeback?"
];

// Initializing the game variables
let currentQuestionIndex = 0;
let score = 0; // Initialize score

// Function to display the current question
function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.textContent = questions[currentQuestionIndex];
}

// Function to handle submitting the answer and scoring it
function submitAnswer() {
    const userAnswer = document.getElementById('user-answer').value;
    const scoreElement = document.getElementById('score');

    // Example simple scoring logic: if the answer includes the word "Bond", score 10
    if (userAnswer.toLowerCase().includes("bond")) {
        score += 10; // Increase score by 10 if "Bond" is in the answer
    }

    // Update the score on the page
    scoreElement.textContent = score;

    // Clear the previous answer
    document.getElementById('user-answer').value = '';

    // Move to next question (if available)
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(); // Show the next question
    } else {
        alert("Game Over! You completed all questions.");
    }
}

// Set up event listeners
document.getElementById('submit-answer').addEventListener('click', submitAnswer);

// Initialize the game by displaying the first question when the page loads
window.onload = function() {
    displayQuestion();
};
