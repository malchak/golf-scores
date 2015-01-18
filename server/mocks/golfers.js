module.exports = function(app) {
  var express = require('express');
  var golfersRouter = express.Router();

  golfersRouter.get('/', function(req, res) {
    res.send({
      'golfers': [
        { 
          id: 1,
          name: 'Shaner',
          handicap: '18.6',
          updated: '12 days ago'
        },
        { 
          id: 2,
          name: 'LongDavid',
          handicap: '15.9',
          updated: '19 days ago'
        },
        { 
          id: 3,
          name: 'Robo',
          handicap: '18.1',
          updated: '2 days ago'
        }
      ]
    });
  });

  golfersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  golfersRouter.get('/:id', function(req, res) {
    res.send({
      'golfers': {
        id: req.params.id
      }
    });
  });

  golfersRouter.put('/:id', function(req, res) {
    res.send({
      'golfers': {
        id: req.params.id
      }
    });
  });

  golfersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/golfers', golfersRouter);
};
