import knex from "../../knex.js";

function Invoice() {
    return knex("Invoice");
}

// *** CRUD *** //

export const getAll = () => {
    return Invoice().select();
};

export const getSingle = id => {
    return Invoice()
    .where("InvoiceId", parseInt(id))
    .first();
};

export const add = show => {
    return Invoice().insert(show, "InvoiceId");
};

export const update = (id, updates) => {
    return Invoice()
    .where("InvoiceId", parseInt(id))
    .update(updates);
};

export const deleteItem = id => {
    return Invoice()
    .where("InvoiceId", parseInt(id))
    .del();
};
    