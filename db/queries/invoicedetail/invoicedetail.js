import knex from "../../knex.js";

function Invoicedetail() {
    return knex("Invoicedetail");
}

// *** CRUD *** //

export const getAll = () => {
    return Invoicedetail().select();
};

export const getSingle = id => {
    return Invoicedetail()
    .where("InvoiceId", parseInt(id))
    .select();
};

export const add = show => {
    return Invoicedetail().insert(show, "InvoiceDetailId");
};

export const update = (id, updates) => {
    return Invoicedetail()
    .where("InvoiceDetailId", parseInt(id))
    .update(updates);
};

export const deleteItem = id => {
    return Invoicedetail()
    .where("InvoiceDetailId", parseInt(id))
    .del();
};
    