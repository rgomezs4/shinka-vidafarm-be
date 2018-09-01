import knex from "../../knex.js";

function Invoicedetail() {
    return knex("Invoicedetail");
}

// *** CRUD *** //

export const getAll = () => {
    return Invoicedetail().select();
};

export const getSingle = showID => {
    return Invoicedetail()
    .where("InvoiceDetailId", parseInt(showID))
    .first();
};

export const add = show => {
    return Invoicedetail().insert(show, "InvoiceDetailId");
};

export const update = (showID, updates) => {
    return Invoicedetail()
    .where("InvoiceDetailId", parseInt(showID))
    .update(updates);
};

export const deleteItem = showID => {
    return Invoicedetail()
    .where("InvoiceDetailId", parseInt(showID))
    .del();
};
    