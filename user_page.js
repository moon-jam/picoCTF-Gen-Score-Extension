(function() {
    setInterval(() => {
        // Check if the current page URL is https://play.picoctf.org/users/*
        if (window.location.href.includes('https://play.picoctf.org/users/')) {

            // Check if the score is already displayed to avoid duplication
            if (document.querySelector('.picoGym-score')) {
                return; // Score already exists, terminate the script
            }

            // Define score mapping
            const scoreMapping = {
                'Easy': 100,
                'Medium': 200,
                'Hard': 300
            };

            let totalScore = 0;

            const challengeSolvedDiv = document.querySelector('.text-nowrap.d-flex.flex-column.align-items-center.col');

            if (challengeSolvedDiv) {

                // Find each challenge difficulty level
                const difficultySpans = challengeSolvedDiv.querySelectorAll('span');

                difficultySpans.forEach(span => {
                    const text = span.textContent.trim();
                    const [count, difficulty] = text.split(' ');
                    const challengeCount = parseInt(count);

                    if (scoreMapping[difficulty]) {
                        totalScore += challengeCount * scoreMapping[difficulty];
                    }
                });

                // Find the body of the picoGym Progress card
                const picoGymCardBody = document.querySelector('.card-body h4');

                if (picoGymCardBody) {
                    // Create and insert a new score display element
                    const scoreDisplay = document.createElement('div');
                    scoreDisplay.classList.add('picoGym-score'); // Add class name to avoid duplication
                    scoreDisplay.style.textAlign = 'center';
                    scoreDisplay.style.marginTop = '20px';
                    scoreDisplay.style.fontSize = '24px';
                    scoreDisplay.style.fontWeight = 'bold';
                    scoreDisplay.style.color = '#6C63FF';  // Purple color
                    scoreDisplay.innerText = `picoGym Score: ${totalScore}`;

                    // Insert the score element at the bottom of the picoGym Progress card
                    picoGymCardBody.parentElement.appendChild(scoreDisplay);
                }
            }
        }
    }, 1000); 
})();
