(function() {
    setInterval(() => {
        // Check if the current page URL is https://play.picoctf.org/users/*
        if (window.location.href.includes('https://play.picoctf.org/users/')) {

            // Define score mapping
            const scoreMapping = {
                'Easy': 100,
                'Medium': 200,
                'Hard': 500
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

                    if (!document.querySelector('.picoGym-score')) {
                        picoGymCardBody.parentElement.appendChild(scoreDisplay);
                    } else {
                        document.querySelector('.picoGym-score').innerText = `picoGym Score: ${totalScore}`;
                    }
                }
            }
        }
    }, 1000); 
})();
