import { module, test } from 'qunit';
import { setupTest } from 'ember-charts-demo/tests/helpers';

module('Unit | Route | cars', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:cars');
    assert.ok(route);
  });
});
