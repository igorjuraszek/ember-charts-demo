import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class MachinesRoute extends Route {
  @service store;

  model() {
    return RSVP.hash({
      machines: this.store.findAll('machine'),
      requests: this.store.findAll('request'),
    });
  }
}
