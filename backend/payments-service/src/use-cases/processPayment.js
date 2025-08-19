const paymentRepository = require('../domain/PaymentRepository');

module.exports = async function processPayment(data) {
  return await paymentRepository.process(data);
};
