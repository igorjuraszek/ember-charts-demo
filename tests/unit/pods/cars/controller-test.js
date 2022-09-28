import { module, test } from 'qunit';
import { setupTest } from 'ember-charts-demo/tests/helpers';

module('Unit | Controller | cars', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:cars');
    assert.ok(controller);
  });
});
