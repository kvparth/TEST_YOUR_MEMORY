import { isMatch, updateScore, checkGameOver } from '../src/core/gameLogic';

test('isMatch returns true if colors match', () => {
    const board = ['red', 'blue', 'red'];
    expect(isMatch(board, 0, 2)).toBe(true);
});

test('isMatch returns false if colors don’t match', () => {
    const board = ['red', 'blue'];
    expect(isMatch(board, 0, 1)).toBe(false);
});

test('updateScore returns +5 for match', () => {
    expect(updateScore(0, true)).toBe(5);
});

test('updateScore returns -1 for mismatch', () => {
    expect(updateScore(5, false)).toBe(4);
});

test('checkGameOver returns true when all tiles revealed', () => {
    expect(checkGameOver(8, 8, 20)).toBe(true);
});

test('checkGameOver returns false when game is still in progress', () => {
    expect(checkGameOver(6, 8, 10)).toBe(false);
});
test('should not allow flipping more than 2 tiles', () => {
    const flippedTiles = [0, 1];
    expect(canFlip(flippedTiles)).toBe(false);
});

test('should allow flipping when only 1 tile flipped', () => {
    const flippedTiles = [2];
    expect(canFlip(flippedTiles)).toBe(true);
});

test('score should not go below 0', () => {
    expect(updateScore(0, false)).toBe(0);
});

test('score can increase over previous max', () => {
    expect(updateScore(9, true)).toBe(14);
});

test('game over only triggers when all tiles matched', () => {
    expect(checkGameOver(8, 6, 10)).toBe(false);
    expect(checkGameOver(8, 8, 10)).toBe(true);
});

test('should not allow flipping more than 2 tiles', () => {
    const flippedTiles = [0, 1];
    expect(canFlip(flippedTiles)).toBe(false);
});

test('should allow flipping when only 1 tile flipped', () => {
    const flippedTiles = [2];
    expect(canFlip(flippedTiles)).toBe(true);
});

test('score should not go below 0', () => {
    expect(updateScore(0, false)).toBe(0);
});

test('score can increase over previous max', () => {
    expect(updateScore(9, true)).toBe(14);
});

test('game over only triggers when all tiles matched', () => {
    expect(checkGameOver(8, 6, 10)).toBe(false);
    expect(checkGameOver(8, 8, 10)).toBe(true);
});