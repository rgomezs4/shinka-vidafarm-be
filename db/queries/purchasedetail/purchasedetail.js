import knex from "../../knex.js";

function Purchasedetail() {
    return knex("Purchasedetail");
}

// *** CRUD *** //

export const getAll = () => {
    return Purchasedetail().select();
};

export const getSingle = showID => {
    return Purchasedetail()
    .where("PurchaseDetailId", parseInt(showID))
    .first();
};

export const add = show => {
    return Purchasedetail().insert(show, "PurchaseDetailId");
};

export const update = (showID, updates) => {
    return Purchasedetail()
    .where("PurchaseDetailId", parseInt(showID))
    .update(updates);
};

export const deleteItem = showID => {
    return Purchasedetail()
    .where("PurchaseDetailId", parseInt(showID))
    .del();
};
    