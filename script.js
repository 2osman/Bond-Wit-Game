const sentences = [
    "I think you're overestimating yourself.",
    "Looks like rain today.",
    "You’re late.",
    "That suit looks expensive.",
    "Try not to get into trouble.",
    "Do you always have to have the last word?",
    "That’s an interesting theory.",
    "You’re hard to read.",
    "You always seem to be in the right place at the right time.",
    "Is there anything you're not good at?",
    "You're not like the others, are you?",
    "I never trust people who smile too much."
];

function submitResponse() {
    const userResponse = document.getElementById('userResponse').value;
    if (userResponse === "") {
        alert("Please enter a response.");
        return;
    }

    // Evaluate the response (this is a simple example scoring system)
    const score = scoreResponse(userResponse);
    document.getElementById('score').innerHTML = `Your score: ${score}/10`;
}

function scoreResponse(response) {
    // This is a placeholder scoring system.
    // You can implement a more sophisticated scoring algorithm later.
    const bondLikeResponses = [
        "only when it counts",
        "perhaps",
        "you noticed",
        "skewered",
        "of course not"
    ];

    let score = 0;
    bondLikeResponses.forEach(reply => {
        if (response.toLowerCase().includes(reply)) {
            score++;
        }
    });

    return score; // Simple score based on matching Bond-like phrases
}

function generateNewSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    document.getElementById('sentence').innerHTML = `<p><strong>Sentence:</strong> ${sentences[randomIndex]}</p>`;
    document.getElementById('userResponse').value = ""; // Clear previous response
    document.getElementById('score').innerHTML = ""; // Clear score
}
