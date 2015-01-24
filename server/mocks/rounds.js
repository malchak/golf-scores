var rounds = [
  {
    id: 1,
    course: 'Skylinks',
    score: '88',
    datePlayed: '1/12/15',
    golfer: 1
  },
  {
    id: 2,
    course: 'El Dorado',
    score: '91',
    datePlayed: '11/1/14',
    golfer: 1
  },
  {
    id: 3,
    course: 'Skylinks',
    score: '84',
    datePlayed: '10/20/14',
    golfer: 2
  },
  {
    id: 4,
    course: 'Skylinks',
    score: '90',
    datePlayed: '10/20/14',
    golfer: 1
  },
  {
    id: 5,
    course: 'Westchester',
    score: '88',
    datePlayed: '8/17/14',
    golfer: 2
  }

  ];

module.exports = function(app) {
  var express = require('express');
  var roundsRouter = express.Router();

  roundsRouter.get('/', function(req, res) {
    res.send({
      'rounds': rounds
    });
  });

  roundsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  roundsRouter.get('/:id', function(req, res) {
    res.send({
      'rounds': {
        id: req.params.id
      }
    });
  });

  roundsRouter.put('/:id', function(req, res) {
    res.send({
      'rounds': {
        id: req.params.id
      }
    });
  });

  roundsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/rounds', roundsRouter);
};
