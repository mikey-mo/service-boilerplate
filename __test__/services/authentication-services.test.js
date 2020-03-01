const authenticationServices = require('../../services/authentication-services');

test('initial test', () => {
  expect(!!authenticationServices).toBe(true);
});
