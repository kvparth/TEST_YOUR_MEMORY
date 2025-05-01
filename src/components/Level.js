export function validateLevelInput(level) {
    const parsed = parseInt(level);
    if (isNaN(parsed) || parsed <= 0) {
        throw new Error('Invalid level input');
    }
    return parsed;
}