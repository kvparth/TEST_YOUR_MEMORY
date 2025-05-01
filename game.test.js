const { updateScore } = require('./game');

test('adds 5 points for correct match', () => {
  expect(updateScore(0, true)).toBe(5);
});

test('subtracts 1 point for incorrect match', () => {
  expect(updateScore(10, false)).toBe(9);
});