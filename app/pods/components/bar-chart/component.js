import Component from '@glimmer/component';

export default class BarChartComponent extends Component {
  get chartData() {
    const data = {
      datasets: [
        {
          data: [10, 20, 30, 40, 50, 60],
          borderWidth: 1,
          borderColor: '#dfd',
          barPercentage: 1,
          hoverBorderWidth: 6,
          label: 'white',
          hoverBackgroundColor: 'rgba(100, 0, 100, 0.1)',
        },
        {
          data: [5, 10, 20, 30, 40, 50],
          borderWidth: 1,
          borderColor: '#000',
          backgroundColor: 'rgba(200, 0, 0, 0.7)',
          barPercentage: 0.3,
          hoverBorderWidth: 6,
          label: 'red',
          hoverBackgroundColor: 'rgba(0, 100, 100, 0.2)',
        },
      ],
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    };
    return data;
  }

  get chartOptions() {
    const options = {
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
          },
        ],
      },
    };

    return options;
  }
}
