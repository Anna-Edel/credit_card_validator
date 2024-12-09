import { creditCardValidator } from '../validator';



test('checking validity card', () => {
  const result = creditCardValidator(5268393630532484);
  expect(result).toBe(true);
});
