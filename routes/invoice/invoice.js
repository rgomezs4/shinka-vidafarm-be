"use strict";

import * as express from "express";
var router = express.Router();

import {
  getAll,
  getSingle,
  add,
  update,
  deleteItem,
  limit
} from "../../db/queries/invoice/invoice";

// *** get all *** //
router.get("/invoice", async (req, res, next) => {
  try {
    let objs = await getAll();
    res.status(200).json(objs);
  } catch (error) {
    next(error);
  }
});

// *** limit *** //
router.get("/invoice/limit/:limit", async (req, res, next) => {
  try {
    let objs = await limit(req.params.limit);
    res.status(200).json(objs);
  } catch (error) {
    next(error);
  }
});

// *** get single *** //
router.get("/invoice/:id", async (req, res, next) => {
  try {
    let obj = await getSingle(req.params.id);
    res.status(200).json(obj);
  } catch (error) {
    next(error);
  }
});

// *** insert *** //
router.post("/invoice", async (req, res, next) => {
  try {
    let objId = await add(req.body);
    let obj = await getSingle(objId);
    res.json(obj);
  } catch (error) {
    next(error);
  }
});

// *** update *** //
router.put("/invoice/:id", async (req, res, next) => {
  try {
    if (req.body.hasOwnProperty("InvoiceId")) {
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
router.delete("/invoice/:id", async (req, res, next) => {
  try {
    let obj = await getSingle(req.params.id);
    await deleteItem(req.params.id);
    res.status(200).json(obj);
  } catch (error) {
    next(error);
  }
});

export default router;
