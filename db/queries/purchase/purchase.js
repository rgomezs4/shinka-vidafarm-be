import knex from "../../knex.js";

function Purchase() {
    return knex("Purchase");
}

// *** CRUD *** //

export const getAll = () => {
    return Purchase().select();
};

export const getSingle = showID => {
    return Purchase()
    .where("PurchaseId", parseInt(showID))
    .first();
};

export const add = show => {
    return Purchase().insert(show, "PurchaseId");
};

export const update = (showID, updates) => {
    return Purchase()
    .where("PurchaseId", parseInt(showID))
    .update(updates);
};

export const deleteItem = showID => {
    return Purchase()
    .where("PurchaseId", parseInt(showID))
    .del();
};
    