import knex from "../../knex.js";

function Pricebysku() {
    return knex("Pricebysku");
}

// *** CRUD *** //

export const getAll = () => {
    return Pricebysku().select();
};

export const getSingle = id => {
    return Pricebysku()
    .where("SkuCode", id);
};

export const add = show => {
    return Pricebysku().insert(show);
};

export const update = (updates) => {
    return Pricebysku()
    .where("PriceListCode", updates.PriceListCode)
    .where("SkuCode", updates.SkuCode)
    .update({
        Price: updates.Price
    });
};

export const deleteItem = id => {
    return Pricebysku()
    .where("SkuCode", id)
    .del();
};

export const getBySkuAndPriceList = (sku, pricelist) => {
    return Pricebysku()
    .where("SkuCode", sku)
    .where("PriceListCode", pricelist)
    .first();
}

export const getByPriceList = pricelist => {
    return Pricebysku()
    .where("PriceListCode", pricelist)
    .select();
};

export const getBySku = sku => {
    return Pricebysku()
    .where("SkuCode", sku)
    .select();
};