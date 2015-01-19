import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		var rounds = this.modelFor('golfers/show').get('rounds');

		if (rounds.get('isFulfilled')) {
			rounds.reload();
		}

		return rounds;

	}
});