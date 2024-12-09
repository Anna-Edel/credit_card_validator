import { numberCardMajorBrands } from '../pay';

test('checking pay system', () => {
  const result = numberCardMajorBrands(5268393630532484);
  expect(result).toBe('MasterCard');
});
