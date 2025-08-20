const Payment = require('../Payment');

describe('Payment entity', () => {
  test('should create a payment with provided properties', () => {
    const data = {
      id: '1',
      reservation: 'res-1',
      amount: 100,
      status: 'pending',
    };

    const payment = new Payment(data);

    expect(payment).toEqual(data);
  });
});
