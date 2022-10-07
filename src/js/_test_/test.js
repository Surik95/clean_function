const lifeIndication = require('../index');

test('Проверка работы функции у %s', () => {
  const result = lifeIndication({ name: 'Маг', health: 90 });
  expect(result).toBe('Маг healthy');
});
