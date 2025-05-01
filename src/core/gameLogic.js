export function isMatch(tile1, tile2) {
    return tile1.color === tile2.color;
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