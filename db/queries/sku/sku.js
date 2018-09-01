import knex from "../../knex.js";

function Sku() {
    return knex("Sku");
}

// *** CRUD *** //

export const getAll = () => {
    return Sku().select();
};

export const getSingle = showID => {
    return Sku()
    .where("SkuCode", parseInt(showID))
    .first();
};

export const add = show => {
    return Sku().insert(show, "SkuCode");
};

export const update = (showID, updates) => {
    return Sku()
    .where("SkuCode", parseInt(showID))
    .update(updates);
};

export const deleteItem = showID => {
    return Sku()
    .where("SkuCode", parseInt(showID))
    .del();
};
    