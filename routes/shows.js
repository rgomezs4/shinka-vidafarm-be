"use strict";

import * as express from 'express';
var router = express.Router();

import { getAll, getSingle, add, update, deleteItem } from '../db/queries/shows';


// *** GET all shows *** //
router.get('/shows', async (req, res, next) => {
  try {
    let shows = await getAll();
    res.status(200).json(shows)
  } catch (error) {
    next(error);
  }
});

// *** GET single show *** //
router.get('/shows/:id', async (req, res, next) => {
  try {
    let show = await getSingle(req.params.id);
    res.status(200).json(show);
  } catch (error) {
    next(error);
  }
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
router.put('/shows/:id', async (req, res, next) => {
  try {
    if (req.body.hasOwnProperty('id')) {
      return res.status(422).json({
        error: 'You cannot update the id field'
      });
    }
    await update(req.params.id, req.body);
    let show = await getSingle(req.params.id);

    res.status(200).json(show);
  } catch (error) {
    next(error);
  }
});

// *** delete show *** //
router.delete('/shows/:id', async (req, res, next) => {
  try {
    let show = await getSingle(req.params.id);
    await deleteItem(req.params.id);
    res.status(200).json(show);
  } catch (error) {
    next(error)
  }
});


export default router;