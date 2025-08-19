const Payment = require('./Payment');

class PaymentRepository {
  async process({ reservation, amount }) {
    // In a real implementation, integrate with payment gateway
    return new Payment({
      id: Date.now().toString(),
      reservation,
      amount,
      status: 'paid',
    });
  }
}

module.exports = new PaymentRepository();
