// Array of Bond quotes
const bondQuotes = [
    { quote: "People who want to stay alive play it safe.", context: "Ling: You think we better, huh?", response: "Please, stay alive! At least for tonight." },
    { quote: "Someone will take care of you.", context: "Tiffany Case: Which do you prefer?", response: "Oh! You'll see to that personally, will you?" },
    { quote: "What should I say to an invitation from a strange gentleman?", context: "Dr. Christmas Jones: Yeah, how so?", response: "You should say yes." },
    { quote: "I think I'll call it a Vesper.", context: "Vesper Lynd: Because of the bitter aftertaste?", response: "No, because once you've tasted it, that's all you want to drink." },
    { quote: "Ah! I've lost my charm!", context: "Girl: Why, cause I have half a brain?", response: "Not from where I'm standing." },
    { quote: "There's a first time for everything — eh, Mr. Bond?", context: "Tracy: People who want to stay alive play it safe.", response: "What makes you think it's my first time?" },
    { quote: "If you attempt to flee, I will arrest you, drop you off at the jail, and take you to the plane in chains, understand?", context: "James Bond: [in bed with his Scandinavian language tutor]", response: "Perfectly. After you." },
    { quote: "I think my mouth is too big!", context: "Pussy Galore: My name is Pussy Galore.", response: "It's just the right size... for me, that is." },
    { quote: "Well, my dear, I take it you spend quite a lot of time in the saddle.", context: "Jenny Flex: Yes, I love an early morning ride.", response: "Well, I'm an early riser myself." },
    { quote: "Nothing more practical than that?", context: "Major Anya Amasova: That it's very important to have a positive mental attitude.", response: "Food is also very important." },
    { quote: "Do you ever stop talking?", context: "Tracy: People who want to stay alive play it safe.", response: "Only when there's nothing worth saying." }
    { quote: "You are very forward", context: "Tracy: People who want to stay alive play it safe.", response: "That is because you like it tell me I am wrong" }
    { quote: "Do you ever stop talking?", context: "Tracy: People who want to stay alive play it safe.", response: "Only when there's nothing worth saying." }
    { quote: "It's been a while since i have been bad?", context: "Tracy: People who want to stay alive play it safe.", response: "Perhaps you are out of practice" }
    { quote: "Wow you are not inimidated by me?", context: "Tracy: People who want to stay alive play it safe.", response: "Why on earth would i be?" }
    { quote: "Do you ever stop talking?", context: "Tracy: People who want to stay alive play it safe.", response: "Only when there's nothing worth saying." }

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
