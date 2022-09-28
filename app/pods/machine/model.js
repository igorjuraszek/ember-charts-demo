import Model, { attr, hasMany } from '@ember-data/model';

export default class MachineModel extends Model {
  @attr('string') name;
  @attr('string') location;
  @hasMany('request') requests;
}
