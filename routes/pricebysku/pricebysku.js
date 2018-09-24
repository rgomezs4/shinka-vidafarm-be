"use strict";

import * as express from "express";
var router = express.Router();

import { getAll, getSingle, add, update, deleteItem, getBySkuAndPriceList, getByPriceList, getBySku } from '../../db/queries/pricebysku/pricebysku';

// *** get all *** //
router.get("/pricebysku", async (req, res, next) => {
    try {
        let objs = await getAll();
        res.status(200).json(objs);
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
router.put("/pricebysku", async (req, res, next) => {
    try {
        await update(req.body);
        let obj = await getBySkuAndPriceList(req.body.SkuCode, req.body.PriceListCode);

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

// *** get single *** //
router.get("/pricebysku/single/:sku/:pricelist", async (req, res, next) => {
    try {
        let obj = await getBySkuAndPriceList(req.params.sku, req.params.pricelist);
        res.status(200).json(obj);
    } catch (error) {
        next(error);
    }
});


// *** get by sku *** //
router.get("/pricebysku/sku/:sku", async (req, res, next) => {
    try {
        let obj = await getBySku(req.params.sku);
        res.status(200).json(obj);
    } catch (error) {
        next(error);
    }
});

// *** get by pricelist *** //
router.get("/pricebysku/pricelist/:pricelist", async (req, res, next) => {
    try {
        let obj = await getByPriceList(req.params.pricelist);
        res.status(200).json(obj);
    } catch (error) {
        next(error);
    }
});

export default router;
