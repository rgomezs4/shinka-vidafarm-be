import knex from "../../knex.js";

function Pricelist() {
    return knex("Pricelist");
}

// *** CRUD *** //

export const getAll = () => {
    return Pricelist().select();
};

export const getSingle = id => {
    return Pricelist()
    .where("PriceListCode", parseInt(id))
    .first();
};

export const add = show => {
    return Pricelist().insert(show, "PriceListCode");
};

export const update = (id, updates) => {
    return Pricelist()
    .where("PriceListCode", parseInt(id))
    .update(updates);
};

export const deleteItem = id => {
    return Pricelist()
    .where("PriceListCode", parseInt(id))
    .del();
};
    