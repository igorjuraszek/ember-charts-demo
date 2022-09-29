import Component from '@glimmer/component';

export default class DoughnutChartComponent extends Component {
  get chartData() {
    const data = {
      datasets: [
        {
          data: [10, 20, 30, 40, 50, 60],
          borderWidth: 1,
          borderColor: '#000',
          backgroundColor: [
            'rgba(100, 0, 100, 0.7)',
            'rgba(100, 200, 100, 0.8)',
            'rgba(10, 100, 100, 0.9)',
            'rgba(150, 40, 100, 0.3)',
            'rgba(100, 100, 100, 0.6)',
            'rgba(200, 200, 100, 0.6)',
          ],
          hoverBorderWidth: 6,
          hoverBackgroundColor: 'rgba(100, 0, 100, 0.1)',
        },
        {
          data: [10, 20, 70, 40, 10, 20],
          borderWidth: 1,
          borderColor: '#000',
          backgroundColor: [
            'rgba(100, 0, 100, 0.7)',
            'rgba(100, 200, 100, 0.8)',
            'rgba(10, 100, 100, 0.9)',
            'rgba(150, 40, 100, 0.3)',
            'rgba(100, 100, 100, 0.6)',
            'rgba(200, 200, 100, 0.6)',
          ],
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
      cutoutPercentage: 60,
      rotation: 10,
      animation: {
        animateRotate: true,
        animateScale: false,
      },
    };
    return options;
  }
}
