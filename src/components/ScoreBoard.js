export function updateDisplay(score) {
    const scoreElement = document.getElementById('score');
    
    // If the score element is found, update its text content
    if (scoreElement) {
        scoreElement.textContent = `Score: ${score}`;
    }
    // If the score element is not found, do nothing (silent fail)
}