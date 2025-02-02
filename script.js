document.getElementById('submitResponse').addEventListener('click', function() {
    const userResponse = document.getElementById('userResponse').value.trim();
    let score = 0;

    if (userResponse) {
        // Basic scoring based on length and cleverness (this can be expanded)
        if (userResponse.length > 50) {
            score += 5;
        }
        if (userResponse.includes("confidence") || userResponse.includes("flirt") || userResponse.includes("wit")) {
            score += 5;
        }

        document.getElementById('score').innerText = score;
    } else {
        alert("Please enter a response before submitting.");
    }
});
