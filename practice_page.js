(function() {
    setInterval(() => {
        // Check if the current page is https://play.picoctf.org/practice
        if (window.location.href.includes('https://play.picoctf.org/practice')) {
            // Define score mapping
            const scoreMapping = {
                'Easy': 100,
                'Medium': 200,
                'Hard': 300
            };

            let totalScore = 0;

            const challengeSolvedDiv = document.querySelector('.text-nowrap.d-flex.flex-column.align-items-center.col');

            if (challengeSolvedDiv) {

                // Check if "Progress Tracker" is open
                const progressTrackerCollapse = document.querySelector('.collapse.show');

                if (progressTrackerCollapse) {
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

                    // Check if the score is already displayed to avoid duplication
                    // Find the Progress Tracker card element
                    const progressTrackerCard = document.querySelector('.card .collapse.show').parentElement;
                    
                    if (progressTrackerCard) {
                        // Create and insert a new score display element
                        const scoreDisplay = document.createElement('div');
                        scoreDisplay.classList.add('practice-picoGym-score'); // Add class name to avoid duplication
                        scoreDisplay.style.textAlign = 'center';
                        scoreDisplay.style.fontSize = '24px';
                        scoreDisplay.style.fontWeight = 'bold';
                        scoreDisplay.style.marginBottom = '20px';
                        scoreDisplay.style.color = '#6C63FF';  // Purple color
                        scoreDisplay.innerText = `picoGym Score: ${totalScore}`;
                        
                        if (!document.querySelector('.practice-picoGym-score')) {
                            // Insert the score element into the last child of the Progress Tracker card
                            progressTrackerCard.appendChild(scoreDisplay);
                        } else {
                            // Update the score element
                            document.querySelector('.practice-picoGym-score').innerText = `picoGym Score: ${totalScore}`;
                        }
                    }
                }
            }
        }
    }, 1000); 
})();
