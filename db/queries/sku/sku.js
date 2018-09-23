import knex from "../../knex.js";

function Sku() {
    return knex("Sku");
}

// *** CRUD *** //

export const getAll = () => {
    return Sku().select();
};

export const getSingle = id => {
    return Sku()
    .where("SkuCode", parseInt(id))
    .first();
};

export const add = show => {
    return Sku().insert(show, "SkuCode");
};

export const update = (id, updates) => {
    return Sku()
    .where("SkuCode", parseInt(id))
    .update(updates);
};

export const deleteItem = id => {
    return Sku()
    .where("SkuCode", parseInt(id))
    .del();
};
    