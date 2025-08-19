const User = require('../User');

describe('User entity', () => {
  test('should create a user with provided properties', () => {
    const data = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      password: 'secret',
    };

    const user = new User(data);

    expect(user).toEqual(data);
  });
});
