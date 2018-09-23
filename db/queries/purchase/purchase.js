import knex from "../../knex.js";

function Purchase() {
    return knex("Purchase");
}

// *** CRUD *** //

export const getAll = () => {
    return Purchase().select();
};

export const getSingle = id => {
    return Purchase()
    .where("PurchaseId", parseInt(id))
    .first();
};

export const add = show => {
    return Purchase().insert(show, "PurchaseId");
};

export const update = (id, updates) => {
    return Purchase()
    .where("PurchaseId", parseInt(id))
    .update(updates);
};

export const deleteItem = id => {
    return Purchase()
    .where("PurchaseId", parseInt(id))
    .del();
};
    