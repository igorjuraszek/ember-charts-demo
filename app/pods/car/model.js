import Model, { attr, hasMany } from '@ember-data/model';

export default class CarModel extends Model {
  @attr('string') photoURL;
  @attr('string') vin;
  @attr('string') plates;
  @attr('string') brand;
  @attr('string') model;
  @attr('string') year;
  @attr('string') power;
  @attr('string') color;
  @attr('number') seats;
  @attr('number') doors;
  @attr('string') bodyType;
  @attr('string') fuelType;
  @hasMany('bookings') bookedRents;
}
