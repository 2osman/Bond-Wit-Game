// Array of Bond quotes
const bondQuotes = [
    { quote: "Why do Chinese girls taste different from all other girls?", context: "Ling: You think we better, huh?", response: "No, just different. Like Peking Duck is different from Russian Caviar. But I love them both." },
    { quote: "I tend to notice little things like that — whether a girl is a blonde or a brunette.", context: "Tiffany Case: Which do you prefer?", response: "Well, as long as the collar and cuffs match." },
    { quote: "I was wrong about you.", context: "Dr. Christmas Jones: Yeah, how so?", response: "I thought Christmas only comes once a year." },
    { quote: "I think I'll call it a Vesper.", context: "Vesper Lynd: Because of the bitter aftertaste?", response: "No, because once you've tasted it, that's all you want to drink." },
    { quote: "You're not my type.", context: "Girl: Why, cause I have half a brain?", response: "No, cause you're single." },
    { quote: "Well, Tracy, next time play it safe and stand on five.", context: "Tracy: People who want to stay alive play it safe.", response: "Please, stay alive! At least for tonight." },
    { quote: "I always enjoyed learning a new tongue.", context: "James Bond: [in bed with his Scandinavian language tutor]", response: "Just relax while we unzip your files." },
    { quote: "I must be dreaming", context: "Pussy Galore: My name is Pussy Galore.", response: "I must be dreaming." },
    { quote: "Well, my dear, I take it you spend quite a lot of time in the saddle.", context: "Jenny Flex: Yes, I love an early morning ride.", response: "Well, I'm an early riser myself." },
    { quote: "Nothing more practical than that?", context: "Major Anya Amasova: That it's very important to have a positive mental attitude.", response: "Food is also very important." },
    { quote: "Please, stay alive! At least for tonight.", context: "Tracy: People who want to stay alive play it safe.", response: "I hope so." }
];

// Load a new random quote
function loadNewQuote() {
    const randomIndex = Math.floor(Math.random() * bondQuotes.length);
    const bondQuote = bondQuotes[randomIndex];
    document.getElementById('question').innerHTML = `"${bondQuote.quote}"`;
    document.getElementById('user-response').value = "";
    document.getElementById('feedback').innerHTML = "";
    document.getElementById('score').innerHTML = "";
    document.getElementById('user-response').focus();
}

// Function to evaluate the response
function evaluateResponse() {
    const userResponse = document.getElementById('user-response').value.trim();
    const currentQuote = document.getElementById('question').innerText.replace(/"/g, '');
    const bondQuote = bondQuotes.find(q => q.quote === currentQuote);
    
    if (!bondQuote) {
        document.getElementById('feedback').innerHTML = "Please select a valid quote.";
        return;
    }

    let score = 0;
    let feedback = "";

    // Evaluate user's response against Bond's wit
    if (userResponse.toLowerCase() === bondQuote.response.toLowerCase()) {
        score = 10;
        feedback = "Perfect! You've nailed Bond's wit!";
    } else if (userResponse.toLowerCase().includes("love") || userResponse.toLowerCase().includes("duck") || userResponse.toLowerCase().includes("caviar")) {
        score = 8;
        feedback = "Great response! You're channeling Bond's confidence and charm.";
    } else if (userResponse.toLowerCase().includes("joke") || userResponse.toLowerCase().includes("playful")) {
        score = 6;
        feedback = "Nice try! But Bond's wit has a sharper edge. Try adding more sarcasm and confidence!";
    } else {
        score = 5;
        feedback = "Interesting response. Not quite there yet, but keep the wit sharp and subtle like Bond.";
    }

    // Display feedback and score
    displayFeedback(score, feedback);
}

// Function to display feedback and score
function displayFeedback(score, feedback) {
    const scoreElement = document.getElementById('score');
    const feedbackElement = document.getElementById('feedback');
    
    scoreElement.textContent = `Your Score: ${score}/10`;
    feedbackElement.textContent = feedback;
}

// Initialize the game
loadNewQuote();
