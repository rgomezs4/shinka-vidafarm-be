import knex from "../../knex.js";

function Invoice() {
    return knex("Invoice");
}

// *** CRUD *** //

export const getAll = () => {
    return Invoice().select();
};

export const getSingle = showID => {
    return Invoice()
    .where("InvoiceId", parseInt(showID))
    .first();
};

export const add = show => {
    return Invoice().insert(show, "InvoiceId");
};

export const update = (showID, updates) => {
    return Invoice()
    .where("InvoiceId", parseInt(showID))
    .update(updates);
};

export const deleteItem = showID => {
    return Invoice()
    .where("InvoiceId", parseInt(showID))
    .del();
};
    