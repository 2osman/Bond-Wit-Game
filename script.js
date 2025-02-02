// Sample questions and answers for the Bond game
const questions = [
  {
    question: "Being wet never seemed to bother you",
    answerOptions: [
      { text: "Just part of the job", score: 8 },
      { text: "I prefer dry conditions", score: 4 },
      { text: "I enjoy the thrill", score: 6 }
    ]
  },
  {
    question: "You must enjoy my presence to notice my absence",
    answerOptions: [
      { text: "Only when it counts", score: 7 },
      { text: "Always, even when you're not around", score: 9 },
      { text: "I have a lot of things on my mind", score: 5 }
    ]
  },
  {
    question: "You seem to be enjoying the view",
    answerOptions: [
      { text: "The view’s always better with you", score: 8 },
      { text: "I enjoy all kinds of views", score: 6 },
      { text: "Only the view of the mission", score: 7 }
    ]
  }
];

// Initialize variables
let currentQuestionIndex = 0;
let totalScore = 0;

// Function to display the current question and answers
function displayQuestion() {
  // Get the current question object
  const currentQuestion = questions[currentQuestionIndex];
  
  // Get the question and answer elements from the DOM
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");

  // Set the question text
  questionElement.textContent = currentQuestion.question;

  // Clear previous answers
  answersElement.innerHTML = "";

  // Loop through answer options and create buttons
  currentQuestion.answerOptions.forEach((answerOption, index) => {
    const button = document.createElement("button");
    button.textContent = answerOption.text;
    button.onclick = () => handleAnswer(answerOption.score);
    answersElement.appendChild(button);
  });
}

// Function to handle the answer click
function handleAnswer(score) {
  // Update total score
  totalScore += score;

  // Log the score for debugging (optional)
  console.log("Current Score:", totalScore);

  // Move to the next question
  currentQuestionIndex++;

  // If there are more questions, display the next one
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    // End of game, show total score
    showResult();
  }
}

// Function to show the final result
function showResult() {
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");

  questionElement.textContent = "Game Over!";
  answersElement.innerHTML = `Your final score is: ${totalScore}`;
}

// Start the game by displaying the first question
displayQuestion();
