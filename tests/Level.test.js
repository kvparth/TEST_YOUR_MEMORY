import { validateLevelInput } from '../src/components/Level';

test('should return correct number of tiles for valid level', () => {
  expect(validateLevelInput(2)).toBe(8); // level 2 → 8 tiles
});

test('should throw error for non-numeric/null level', () => {
  expect(() => validateLevelInput('a')).toThrow();
  expect(() => validateLevelInput(null)).toThrow();
});

test('should throw error for level < 1', () => {
  expect(() => validateLevelInput(0)).toThrow();
});