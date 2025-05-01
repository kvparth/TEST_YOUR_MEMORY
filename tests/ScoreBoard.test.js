import { updateDisplay } from '../src/components/ScoreBoard';

test('should fallback if score DOM element not found', () => {
    document.body.innerHTML = '<div id="not-score"></div>';
    expect(() => updateDisplay(15)).not.toThrow(); // Should silently fail
});
test('should update score on DOM correctly', () => {
    document.body.innerHTML = '<div id="score">Score: 0</div>';
    updateDisplay(10);
    expect(document.getElementById('score').textContent).toBe('Score: 10');
});