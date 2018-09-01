import knex from "../../knex.js";

function Pricelist() {
    return knex("Pricelist");
}

// *** CRUD *** //

export const getAll = () => {
    return Pricelist().select();
};

export const getSingle = showID => {
    return Pricelist()
    .where("PriceListCode", parseInt(showID))
    .first();
};

export const add = show => {
    return Pricelist().insert(show, "PriceListCode");
};

export const update = (showID, updates) => {
    return Pricelist()
    .where("PriceListCode", parseInt(showID))
    .update(updates);
};

export const deleteItem = showID => {
    return Pricelist()
    .where("PriceListCode", parseInt(showID))
    .del();
};
    