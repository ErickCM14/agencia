const Reservation = require('../Reservation');

describe('Reservation entity', () => {
  test('should create a reservation with provided properties', () => {
    const data = {
      id: '1',
      user: 'user-1',
      flight: 'flight-1',
      status: 'confirmed',
    };

    const reservation = new Reservation(data);

    expect(reservation).toEqual(data);
  });
});
