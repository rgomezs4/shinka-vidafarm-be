import knex from "../../knex.js";

function Invoicecorrelative() {
    return knex("Invoicecorrelative");
}

// *** CRUD *** //

export const getAll = () => {
    return Invoicecorrelative().select();
};

export const getSingle = showID => {
    return Invoicecorrelative()
    .where("CorrelativeId", parseInt(showID))
    .first();
};

export const add = show => {
    return Invoicecorrelative().insert(show, "CorrelativeId");
};

export const update = (showID, updates) => {
    return Invoicecorrelative()
    .where("CorrelativeId", parseInt(showID))
    .update(updates);
};

export const deleteItem = showID => {
    return Invoicecorrelative()
    .where("CorrelativeId", parseInt(showID))
    .del();
};
    