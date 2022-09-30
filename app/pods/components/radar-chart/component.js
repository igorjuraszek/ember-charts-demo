import Component from '@glimmer/component';

export default class RadarChartComponent extends Component {
  get chartData() {
    const data = {
      datasets: [
        {
          data: [4, 10, 7, 10, 4, 3],
          borderWidth: 1,
          borderColor: '#000',
          hoverBorderWidth: 3,
          label: 'cars fleet',
          backgroundColor: 'rgba(200, 0, 100, 0.3)',
          pointHoverRadius: 7,
        },
        {
          data: [7, 3, 5, 10, 10, 11],
          borderWidth: 1,
          borderColor: '#000',
          hoverBorderWidth: 3,
          label: 'cars fleet 2',
          backgroundColor: 'rgba(0, 0, 200, 0.3)',
          pointHoverRadius: 7,
        },
      ],
      labels: ['Kombi', 'Hatchback', 'Sedan', 'SUV', 'Van', 'Professional'],
    };
    return data;
  }

  get chartOptions() {
    const options = {
      scale: {
        angleLines: {
          display: false,
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 12,
        },
      },
    };

    return options;
  }
}
