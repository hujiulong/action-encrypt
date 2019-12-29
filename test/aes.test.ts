import { encrypt, DEFAULT_IV } from '../src/aes'

test('AES encryption: aes-128-cbc', () => {
  const algorithm = 'aes-128-cbc';
  const key = '751b621ea5c8c930'
  const iv = DEFAULT_IV;
  const encoding = 'hex';

  expect(encrypt('abc', algorithm, key, iv, encoding)).toBe('82c12f2f964235f94a284ee45924caf0');
})