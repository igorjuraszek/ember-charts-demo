import Controller from '@ember/controller';

export default class CarsController extends Controller {
  get data() {
    return {
      datasets: [
        {
          data: [10, 20, 30],
          backgroundColor: [
            'rgb(255, 0, 0)',
            'rgb(255, 255, 0)',
            'rgb(0, 0, 255)',
          ],
        },
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ['Red', 'Yellow', 'Blue'],
    };
  }

  get dataCars() {
    return {
      datasets: [
        {
          data: [22, 9],
          backgroundColor: ['rgb(0, 0, 255)', 'rgb(255, 0, 0)'],
        },
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ['Available days', 'Unavailable days'],
    };
  }
}
