// List of possible sentences (Bond quotes)
const sentences = [
    "I'm the money.",
    "Your boss must have some influence. I’ve never seen so much go out the door so quickly.",
    "I’m not sure I could survive your best.",
    "Do you believe in love at first sight, or should I walk by again?",
    "You noticed.",
    "I tend to notice little things like that - whether a girl is a blonde or a brunette.",
    "I think Christmas only comes once a year."
];

// Function to generate a random sentence
function generateSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    document.getElementById("sentence").textContent = sentences[randomIndex];
    document.getElementById("user-response").value = '';
    document.getElementById("score-container").style.display = "none";
}

// Function to evaluate the user's response (simple scoring logic)
function submitResponse() {
    const userResponse = document.getElementById("user-response").value.trim();
    if (userResponse === "") {
        alert("Please enter a response!");
        return;
    }

    let score = 0;

    // Simple evaluation logic (can be expanded or changed)
    if (userResponse.includes("I noticed") || userResponse.includes("Of course")) {
        score = 10;
    } else if (userResponse.length > 50) {
        score = 7;
    } else if (userResponse.length > 20) {
        score = 5;
    } else {
        score = 3;
    }

    document.getElementById("score").textContent = score;
    document.getElementById("score-container").style.display = "block";
}

window.onload = function() {
    generateSentence();
}
