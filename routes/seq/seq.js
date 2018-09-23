"use strict";

import * as express from "express";
var router = express.Router();

import { getAll, getSingle, add, update, deleteItem, getFor } from '../../db/queries/seq/seq';

// *** get all *** //
router.get("/seq", async (req, res, next) => {
    try {
    let objs = await getAll();
    res.status(200).json(objs);
    } catch (error) {
    next(error);
    }
});

// *** get single *** //
router.get("/seq/:id", async (req, res, next) => {
    try {
    let obj = await getSingle(req.params.id);
    res.status(200).json(obj);
    } catch (error) {
    next(error);
    }
});

// *** get single *** //
router.get("/seq/for/:for", async (req, res, next) => {
    try {
    let obj = await getFor(req.params.for);
    res.status(200).json(obj);
    } catch (error) {
    next(error);
    }
});

// *** insert *** //
router.post("/seq", async (req, res, next) => {
    try {
    let objId = await add(req.body);
    let obj = await getSingle(objId);
    res.json(obj);
    } catch (error) {
    next(error);
    }
});

// *** update *** //
router.put("/seq/:id", async (req, res, next) => {
    try {
    if (req.body.hasOwnProperty("seq_id")) {
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
router.delete("/seq/:id", async (req, res, next) => {
    try {
    let obj = await getSingle(req.params.id);
    await deleteItem(req.params.id);
    res.status(200).json(obj);
    } catch (error) {
    next(error);
    }
});

export default router;
