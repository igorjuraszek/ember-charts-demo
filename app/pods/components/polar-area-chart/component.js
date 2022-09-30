import Component from '@glimmer/component';

export default class PolarAreaChartComponent extends Component {
  get chartData() {
    const data = {
      datasets: [
        {
          data: [10, 20, 30, 40, 50, 60],
          borderWidth: 1,
          borderColor: '#000',
          hoverBorderWidth: 6,
          hoverBackgroundColor: 'rgba(100, 0, 100, 0.1)',
        },
      ],
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    };
    return data;
  }

  get chartOptions() {
    const options = {
      startAngle: 0,
      animation: {
        animateRotate: false,
        animateScale: false,
      },
    };

    return options;
  }
}
