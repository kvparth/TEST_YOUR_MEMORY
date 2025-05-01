import { flipTile , canFlipTile} from '../src/components/Tile.js';

test('flipTile should mark tile as flipped', () => {
  const tile = { flipped: false };
  flipTile(tile);
  expect(tile.flipped).toBe(true);
});

test('should not allow flipping matched tile again', () => {
  const tile = { flipped: true, matched: true };
  expect(canFlipTile(tile)).toBe(false);
});

test('should allow flipping unmatched, unflipped tile', () => {
  const tile = { flipped: false, matched: false };
  expect(canFlipTile(tile)).toBe(true);
});

test('flipTile should throw error if tile index is invalid', () => {
  expect(() => flipTile(null)).toThrow('Invalid tile reference');
});