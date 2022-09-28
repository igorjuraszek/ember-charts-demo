import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class CarsRoute extends Route {
  @service store;

  model() {
    return RSVP.hash({
      cars: this.store.findAll('car'),
      bookings: this.store.findAll('booking'),
      bookedDays: this.store.findAll('booked-day'),
    });
  }
}
