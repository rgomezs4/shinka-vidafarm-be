import knex from "../../knex.js";

function Provider() {
    return knex("Provider");
}

// *** CRUD *** //

export const getAll = () => {
    return Provider().select();
};

export const getSingle = showID => {
    return Provider()
    .where("ProviderCode", parseInt(showID))
    .first();
};

export const add = show => {
    return Provider().insert(show, "ProviderCode");
};

export const update = (showID, updates) => {
    return Provider()
    .where("ProviderCode", parseInt(showID))
    .update(updates);
};

export const deleteItem = showID => {
    return Provider()
    .where("ProviderCode", parseInt(showID))
    .del();
};
    