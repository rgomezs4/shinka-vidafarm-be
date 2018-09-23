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
    .where("SkuCode", parseInt(id))
    .first();
};

export const add = show => {
    return Pricebysku().insert(show, "SkuCode");
};

export const update = (id, updates) => {
    return Pricebysku()
    .where("SkuCode", parseInt(id))
    .update(updates);
};

export const deleteItem = id => {
    return Pricebysku()
    .where("SkuCode", parseInt(id))
    .del();
};
    