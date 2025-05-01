import { generateBoard } from '../src/components/Board';

test('should generate even number of tiles (pairs only)', () => {
  const board = generateBoard(3); // 3 pairs = 6 tiles
  expect(board.length % 2).toBe(0);
});

test('should throw error if tile count is not even', () => {
  expect(() => generateBoard(5.5)).toThrow('Tile count must be a whole number');
});
