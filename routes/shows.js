import * as express from 'express';
var router = express.Router();

import { getAll, getSingle, add, update, deleteItem } from '../db/queries/shows';


// *** GET all shows *** //
router.get('/shows', (req, res, next) => {
  getAll()
    .then((shows) => {
      res.status(200).json(shows);
    })
    .catch((error) => {
      next(error);
    });
});

// *** GET single show *** //
router.get('/shows/:id', function (req, res, next) {
  getSingle(req.params.id)
    .then(function (show) {
      res.status(200).json(show);
    })
    .catch(function (error) {
      next(error);
    });
});

// *** add show *** //
router.post('/shows', function (req, res, next) {
  add(req.body)
    .then(function (showID) {
      return getSingle(showID);
    })
    .then(function (show) {
      res.json(show);
    })
    .catch(function (error) {
      next(error);
    });
});

// *** update show *** //
router.put('/shows/:id', function (req, res, next) {
  if (req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'You cannot update the id field'
    });
  }
  update(req.params.id, req.body)
    .then(function () {
      return getSingle(req.params.id);
    })
    .then(function (show) {
      res.status(200).json(show);
    })
    .catch(function (error) {
      next(error);
    });
});

// *** delete show *** //
router.delete('/shows/:id', function (req, res, next) {
  getSingle(req.params.id)
    .then(function (show) {
      deleteItem(req.params.id)
        .then(function () {
          res.status(200).json(show);
        })
        .catch(function (error) {
          next(error);
        });
    }).catch(function (error) {
      next(error);
    });
});


export default router;