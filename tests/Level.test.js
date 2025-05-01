import { validateLevelInput } from '../src/components/Level';

test('should return correct level', () => {
  expect(validateLevelInput(2)).toBe(2); 
});

test('should throw error for non-numeric/null level', () => {
  expect(() => validateLevelInput('a')).toThrow();
  expect(() => validateLevelInput(null)).toThrow();
});

test('should throw error for level < 1', () => {
  expect(() => validateLevelInput(0)).toThrow();
});