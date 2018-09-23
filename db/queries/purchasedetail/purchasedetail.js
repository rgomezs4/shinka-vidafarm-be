import knex from "../../knex.js";

function Purchasedetail() {
    return knex("Purchasedetail");
}

// *** CRUD *** //

export const getAll = () => {
    return Purchasedetail().select();
};

export const getSingle = id => {
    return Purchasedetail()
    .where("PurchaseDetailId", parseInt(id))
    .first();
};

export const add = show => {
    return Purchasedetail().insert(show, "PurchaseDetailId");
};

export const update = (id, updates) => {
    return Purchasedetail()
    .where("PurchaseDetailId", parseInt(id))
    .update(updates);
};

export const deleteItem = id => {
    return Purchasedetail()
    .where("PurchaseDetailId", parseInt(id))
    .del();
};
    