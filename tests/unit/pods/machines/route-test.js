import { module, test } from 'qunit';
import { setupTest } from 'ember-charts-demo/tests/helpers';

module('Unit | Route | machines', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:machines');
    assert.ok(route);
  });
});
