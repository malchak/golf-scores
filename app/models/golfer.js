import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	handicap: DS.attr('number'),
	updated: DS.attr('string'),
	rounds: DS.hasMany('round', { async: true })
});
