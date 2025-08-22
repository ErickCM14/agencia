const ScheduleFlight = require('../../domain/use-cases/ScheduleFlight');

class BookingService {
  constructor({ flightRepository, bookingRepository }) {
    this.scheduleFlightUseCase = new ScheduleFlight({ flightRepository, bookingRepository });
  }

  async scheduleFlight(data) {
    return await this.scheduleFlightUseCase.execute(data);
  }
}
module.exports = BookingService;
