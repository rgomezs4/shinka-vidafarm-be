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
    .where("SkuCode", id)
    .first();
};

export const add = show => {
    console.log(show);
    return Sku().insert(show);
};

export const update = (id, updates) => {
    return Sku()
    .where("SkuCode", id)
    .update(updates);
};

export const deleteItem = id => {
    return Sku()
    .where("SkuCode", id)
    .del();
};
    