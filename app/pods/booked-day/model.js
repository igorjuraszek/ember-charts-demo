import Model, { attr, belongsTo } from '@ember-data/model';

export default class BookedDayModel extends Model {
  @belongsTo('booking') booking;
  @attr('date') day;
}
