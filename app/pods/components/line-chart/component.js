import Component from '@glimmer/component';

export default class LineChartComponent extends Component {
  get chartData() {
    const data = {
      datasets: [
        {
          label: '# of case 1',
          fill: false,
          //   backgroundColor: 'rgba(255, 255, 0, 0.5)',
          borderColor: '#ff0000',
          lineTension: 0,
          pointRadius: 0,
          data: [2, 1, 12, 13, 0, 10, 1, 2, 11, 6, 1, 7],
        },
        {
          label: '# of case 2',
          fill: false,
          //   backgroundColor: 'rgba(255, 255, 0, 0.5)',
          borderColor: '#0080ff',
          lineTension: 0,
          pointRadius: 0,
          data: [5, 14, 0, 3, 11, 0, 2, 11, 9, 5, 14, 11],
        },
        // {
        //   label: '# of case 3',
        //   fill: false,
        //   //   backgroundColor: 'rgba(255, 255, 0, 0.5)',
        //   borderColor: '#0080ff',
        //   lineTension: 0,
        //   pointRadius: 0,
        //   data: [9, 5, 5, 5, 13, 2, 12, 2, 13, 4, 4, 3],
        // },
        // {
        //   label: '# of case 4',
        //   fill: false,
        //   borderColor: '#ff0080',
        //   //   backgroundColor: 'rgba(0, 255, 255, 0.5)',
        //   lineTension: 0,
        //   pointRadius: 0,
        //   data: [2, 13, 15, 8, 1, 0, 6, 11, 2, 15, 14, 3],
        // },
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
