var express = require('express');
var router = express.Router();

var shows = require('../db/queries/shows');


// *** GET all shows *** //
router.get('/shows', function(req, res, next) {
  shows.getAll()
  .then(function(shows) {
    res.status(200).json(shows);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** GET single show *** //
router.get('/shows/:id', function(req, res, next) {
  shows.getSingle(req.params.id)
  .then(function(show) {
    res.status(200).json(show);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** add show *** //
router.post('/shows', function(req, res, next) {
  shows.add(req.body)
  .then(function(showID) {
    return shows.getSingle(showID);
  })
  .then(function(show) {
    res.json(show);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** update show *** //
router.put('/shows/:id', function(req, res, next) {
  if(req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'You cannot update the id field'
    });
  }
  shows.update(req.params.id, req.body)
  .then(function() {
    return shows.getSingle(req.params.id);
  })
  .then(function(show) {
    res.status(200).json(show);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** delete show *** //
router.delete('/shows/:id', function(req, res, next) {
  shows.getSingle(req.params.id)
  .then(function(show) {
    shows.deleteItem(req.params.id)
    .then(function() {
      res.status(200).json(show);
    })
    .catch(function(error) {
      next(error);
    });
  }).catch(function(error) {
    next(error);
  });
});


module.exports = router;