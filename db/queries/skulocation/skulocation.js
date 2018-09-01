import knex from "../../knex.js";

function Skulocation() {
    return knex("Skulocation");
}

// *** CRUD *** //

export const getAll = () => {
    return Skulocation().select();
};

export const getSingle = showID => {
    return Skulocation()
    .where("Id", parseInt(showID))
    .first();
};

export const add = show => {
    return Skulocation().insert(show, "Id");
};

export const update = (showID, updates) => {
    return Skulocation()
    .where("Id", parseInt(showID))
    .update(updates);
};

export const deleteItem = showID => {
    return Skulocation()
    .where("Id", parseInt(showID))
    .del();
};
    