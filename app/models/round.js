import DS from 'ember-data';

export default DS.Model.extend({
	course: DS.attr('string'),
  score: DS.attr('number'),
  datePlayed: DS.attr('string'),
  golfer: DS.belongsTo('golfer')
});
