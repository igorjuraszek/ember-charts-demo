import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class MachinesController extends Controller {
  @service store;

  get requestTypes() {
    return [
      ...new Set(
        this.model.requests.map((request) => {
          return request.type;
        })
      ),
    ];
  }

  get numberOfRequestsByType() {
    return [
      ...this.requestTypes.map((type) => {
        return this.model.requests.filter((request) => {
          return request.type === type;
        }).length;
      }),
    ];
  }

  get data() {
    return {
      datasets: [
        {
          data: this.numberOfRequestsByType,
          backgroundColor: [
            'rgb(255, 0, 0)',
            'rgb(255, 255, 0)',
            'rgb(0, 0, 255)',
          ],
        },
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: this.requestTypes,
    };
  }

  @action
  async onAddMachine() {
    await this.store.createRecord('machine').save();
  }
}
