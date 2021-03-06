import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("golfers", function() {
    this.route("show", { path: ':golfer_id' }, function () {
    	this.resource('rounds', function () {
    		this.route('new');
    	});
    });
  });
});

export default Router;
