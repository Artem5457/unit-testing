const { sum, subtract, fetchUser } = require('./functions');

test('can sum 2 numbers', () => {
  let actual = sum(3, 5);
  let expected = 8;

  expect(actual)
    .toBe(expected);
});

test('can subtract numbers', () => {
  expect(subtract(3, 5))
    .toBe(-2);
});

test('can load user', async () => {
  const user = await fetchUser();

  expect(user.name)
    .toBe('Artem Bolshak');
});
