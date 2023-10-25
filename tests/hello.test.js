// hello.test.js
const sayHello = require('../utils/hello'); // Adjusted to the correct relative path

test('sayHello should return "Rafael"', () => {
  expect(sayHello()).toBe("Rafael");
});
