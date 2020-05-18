const authenticationService = require('../../services/authentication');

test('initial test', () => {
    expect(!!authenticationService).toBe(true);
});
