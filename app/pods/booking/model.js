import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class BookingModel extends Model {
  @belongsTo('car') car;
  @attr('string') customerName;
  @attr('string') customerSurname;
  @attr('string') documentNumber;
  @attr('number') price;
  @attr('number') insurance;
  @attr('number') additionalCosts;
  @attr('string') currency;
  @hasMany('booked-day') daysOfRent;
}
