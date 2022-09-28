import Model, { attr, belongsTo } from '@ember-data/model';

export default class RequestModel extends Model {
  @attr('string') type;
  @attr('string') title;
  @attr('string') description;
  @attr('string') status;
  @attr('number') downtime;
  @attr('date') createdAt;
  @attr('date') closedAt;
  @belongsTo('machine') machine;
}
