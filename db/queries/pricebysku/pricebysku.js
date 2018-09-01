import knex from "../../knex.js";

function Pricebysku() {
    return knex("Pricebysku");
}

// *** CRUD *** //

export const getAll = () => {
    return Pricebysku().select();
};

export const getSingle = showID => {
    return Pricebysku()
    .where("SkuCode", parseInt(showID))
    .first();
};

export const add = show => {
    return Pricebysku().insert(show, "SkuCode");
};

export const update = (showID, updates) => {
    return Pricebysku()
    .where("SkuCode", parseInt(showID))
    .update(updates);
};

export const deleteItem = showID => {
    return Pricebysku()
    .where("SkuCode", parseInt(showID))
    .del();
};
    