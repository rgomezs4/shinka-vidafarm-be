"use strict";

import * as express from "express";
var router = express.Router();

import {
  getAll,
  getSingle,
  add,
  update,
  deleteItem,
  search
} from "../../db/queries/provider/provider";

// *** get all *** //
router.get("/provider", async (req, res, next) => {
  try {
    let objs = await getAll();
    res.status(200).json(objs);
  } catch (error) {
    next(error);
  }
});

// *** get single *** //
router.get("/provider/:id", async (req, res, next) => {
  try {
    let obj = await getSingle(req.params.id);
    console.log(req.params.id);
    res.status(200).json(obj);
  } catch (error) {
    next(error);
  }
});

// *** search single *** //
router.get("/provider/search/:criteria", async (req, res, next) => {
  try {
    let obj = await search(req.params.criteria);
    res.status(200).json(obj);
  } catch (error) {
    next(error);
  }
});

// *** insert *** //
router.post("/provider", async (req, res, next) => {
  try {
    let objId = await add(req.body);
    let obj = await getSingle(objId);
    res.json(obj);
  } catch (error) {
    next(error);
  }
});

// *** update *** //
router.put("/provider/:id", async (req, res, next) => {
  try {
    if (req.body.hasOwnProperty("ProviderCode")) {
      return res.status(422).json({
        error: "You cannot update the id field"
      });
    }
    await update(req.params.id, req.body);
    let obj = await getSingle(req.params.id);

    res.status(200).json(obj);
  } catch (error) {
    next(error);
  }
});

// *** delete *** //
router.delete("/provider/:id", async (req, res, next) => {
  try {
    let obj = await getSingle(req.params.id);
    await deleteItem(req.params.id);
    res.status(200).json(obj);
  } catch (error) {
    next(error);
  }
});

export default router;
