import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class MachinesController extends Controller {
  @service store;

  @action
  async onAddMachine() {
    await this.store.createRecord('machine').save();
  }
}
