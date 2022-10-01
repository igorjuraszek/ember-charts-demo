import EmberRouter from '@ember/routing/router';
import config from 'ember-charts-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('charts');
  this.route('not-found', { path: '/*path' });
});
