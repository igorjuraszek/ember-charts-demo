import Component from '@glimmer/component';

export default class PieChartComponent extends Component {
  get chartData() {
    const data = {
      datasets: [
        {
          backgroundColor: [
            '#ff0000',
            '#ff8000',
            '#ffff00',
            '#80ff00',
            '#00ff00',
            '#00ff80',
            '#00ffff',
            '#0080ff',
            '#0000ff',
            '#8000ff',
            '#ff00ff',
            '#ff0080',
          ],
          borderColor: [
            '#ff0000',
            '#ff8000',
            '#ffff00',
            '#80ff00',
            '#00ff00',
            '#00ff80',
            '#00ffff',
            '#0080ff',
            '#0000ff',
            '#8000ff',
            '#ff00ff',
            '#ff0080',
          ],
          data: [6, 3, 7, 3, 7, 1, 4, 10, 7, 2, 11, 7],
        },
      ],

      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    };
    return data;
  }

  get chartOptions() {
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 15,
            },
          },
        ],
      },
    };
    return options;
  }
}
