// Array of questions for the game
const questions = [
    "Vesper: I'm the money. How will you respond?",
    "Bond: Only if one assumes that the person with the best hand always wins. How do you respond?",
    "Bond: I tend to notice little things like that—whether a girl is a blonde or a brunette. What do you say?",
    "Bond: Skewered. One sympathizes. What's your comeback?"
];

let currentQuestionIndex = 0;
let score = 0;

// Function to display the current question
function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.textContent = questions[currentQuestionIndex];
}

// Function to handle submitting the answer and scoring it
function submitAnswer() {
    const userAnswer = document.getElementById('user-answer').value;
    const scoreElement = document.getElementById('score');

    // Simple scoring logic: if the answer contains "Bond", score 10
    if (userAnswer.toLowerCase().includes("bond")) {
        score += 10; // Increase score if "Bond" is mentioned
    }

    // Update the score
    scoreElement.textContent = score;

    // Clear the previous answer field
    document.getElementById('user-answer').value = '';

    // Move to the next question (if available)
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(); // Display the next question
    } else {
        alert("Game Over! You've completed all the questions.");
    }
}

// Set up the event listener for the submit button
document.getElementById('submit-answer').addEventListener('click', submitAnswer);

// Initialize the game by displaying the first question
window.onload = function() {
    displayQuestion();
};
