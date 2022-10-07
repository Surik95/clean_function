const { lifeIndication } = require('../index');

test('Проверка работы функции healthy', () => {
  const result = lifeIndication({ name: 'Маг', health: 90 });
  expect(result).toBe('Маг healthy');
});

test('Проверка работы функции healthy', () => {
  const result = lifeIndication({ name: 'Маг', health: 35 });
  expect(result).toBe('Маг wounded');
});

test('Проверка работы функции healthy', () => {
  const result = lifeIndication({ name: 'Маг', health: 10 });
  expect(result).toBe('Маг critical');
});
