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
    .where("id", parseInt(showID))
    .first();
};

export const add = show => {
    return Invoice().insert(show, "id");
};

export const update = (showID, updates) => {
    return Invoice()
    .where("id", parseInt(showID))
    .update(updates);
};

export const deleteItem = showID => {
    return Invoice()
    .where("id", parseInt(showID))
    .del();
};
    