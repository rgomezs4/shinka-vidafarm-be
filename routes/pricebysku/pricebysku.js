"use strict";

import * as express from "express";
var router = express.Router();

import { getAll, getSingle, add, update, deleteItem } from '../../db/queries/pricebysku/pricebysku';

// *** get all *** //
router.get("/pricebysku", async (req, res, next) => {
    try {
    let objs = await getAll();
    res.status(200).json(objs);
    } catch (error) {
    next(error);
    }
});

// *** get single *** // // TODO: Cambiar porque tiene que buscar por Pricelist y por sku
router.get("/pricebysku/:id", async (req, res, next) => {
    try {
    let obj = await getSingle(req.params.id);
    res.status(200).json(obj);
    } catch (error) {
    next(error);
    }
});

// *** insert *** //
router.post("/pricebysku", async (req, res, next) => {
    try {
    let objId = await add(req.body);
    let obj = await getSingle(objId);
    res.json(obj);
    } catch (error) {
    next(error);
    }
});

// *** update *** //
router.put("/pricebysku/:id", async (req, res, next) => {
    try {
    if (req.body.hasOwnProperty("SkuCode")) {
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
router.delete("/pricebysku/:id", async (req, res, next) => {
    try {
    let obj = await getSingle(req.params.id);
    await deleteItem(req.params.id);
    res.status(200).json(obj);
    } catch (error) {
    next(error);
    }
});

export default router;
