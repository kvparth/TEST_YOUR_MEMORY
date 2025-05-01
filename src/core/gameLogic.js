export function isMatch(board, index1, index2) {
    return board[index1] === board[index2];
}

export function updateScore(currentScore, matched) {
    if (matched) return currentScore + 5;
    return Math.max(0, currentScore - 1);
}

export function checkGameOver(totalTiles, matchedTiles, score) {
    return matchedTiles === totalTiles;
}

export function canFlip(currentlyFlipped) {
    return currentlyFlipped.length < 2;
}