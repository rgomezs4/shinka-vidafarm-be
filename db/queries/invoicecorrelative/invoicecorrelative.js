import knex from "../../knex.js";

function Invoicecorrelative() {
    return knex("Invoicecorrelative");
}

// *** CRUD *** //

export const getAll = () => {
    return Invoicecorrelative().select();
};

export const getSingle = id => {
    return Invoicecorrelative()
    .where("CorrelativeId", parseInt(id))
    .first();
};

export const add = show => {
    return Invoicecorrelative().insert(show);
};

export const update = (id, updates) => {
    return Invoicecorrelative()
    .where("CorrelativeId", parseInt(id))
    .update(updates);
};

export const deleteItem = id => {
    return Invoicecorrelative()
    .where("CorrelativeId", parseInt(id))
    .del();
};
    