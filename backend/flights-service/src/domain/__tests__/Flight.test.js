const Flight = require('../Flight');

describe('Flight entity', () => {
  test('should create a flight with provided properties', () => {
    const data = {
      id: '1',
      origin: 'AAA',
      destination: 'BBB',
      date: new Date('2023-01-01'),
      price: 100,
    };

    const flight = new Flight(data);

    expect(flight).toEqual(data);
  });
});
