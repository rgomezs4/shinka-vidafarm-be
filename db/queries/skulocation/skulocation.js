import knex from "../../knex.js";

function Skulocation() {
    return knex("Skulocation");
}

// *** CRUD *** //

export const getAll = () => {
    return Skulocation().select();
};

export const getSingle = id => {
    return Skulocation()
    .where("Id", parseInt(id))
    .first();
};

export const add = show => {
    return Skulocation().insert(show, "Id");
};

export const update = (id, updates) => {
    return Skulocation()
    .where("Id", parseInt(id))
    .update(updates);
};

export const deleteItem = id => {
    return Skulocation()
    .where("Id", parseInt(id))
    .del();
};
    