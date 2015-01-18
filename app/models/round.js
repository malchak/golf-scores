import DS from 'ember-data';

export default DS.Model.extend({
	course: DS.attr('string'),
  score: DS.attr('number'),
  date: DS.attr('date'),
  golfer: DS.belongsTo('golfer')
});
