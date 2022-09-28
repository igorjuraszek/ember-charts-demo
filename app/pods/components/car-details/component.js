import Component from '@glimmer/component';

export default class CarDetailsComponent extends Component {
  get currentCar() {
    return this.args.car;
  }
  //   get bookingsByMonth() {
  //     const months = Array.from({ length: 12 }, (_, i) => i);
  //     return months.map((indexOfMonth) => {
  //       return this.currentCar.bookedRents.filter((rent) => {
  //         return rent.daysOfRent.filter((dateInRent) => {
  //           return new Date(dateInRent).getMonth() === indexOfMonth;
  //         }).length;
  //       }).length;
  //     });
  //     //   this.currentCar.bookedRents.map(())
  //   }
  //   get unavailableDays() {
  //     const months = Array.from({ length: 12 }, (_, i) => i);
  //     return months.map((indexOfMonth) => {
  //       return this.currentCar.bookedRents.map((rent) => {
  //         return rent.daysOfRent.filter((date) => {
  //           return new Date(date).getMonth() === indexOfMonth;
  //         });
  //       });
  //     });
  //   }
  //   get unavailableDays2() {
  //     const months = Array.from({ length: 12 }, (_, i) => i);
  //     return months.map((indexOfMonth) => {
  //       return this.currentCar.bookedRents
  //         .map((rent) => {
  //           return rent.daysOfRent
  //             .map((dayOfRent) => new Date(dayOfRent))
  //             .filter((dayOfRent) => {
  //               return dayOfRent.getMonth() === indexOfMonth;
  //             });
  //         })
  //         .filter((month) => {
  //           return month.length;
  //         })
  //         .flat();
  //     });
  //   }
}
