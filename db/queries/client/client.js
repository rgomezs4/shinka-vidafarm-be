import knex from "../../knex.js";

function Client() {
    return knex("Client");
}

// *** CRUD *** //

export const getAll = () => {
    return Client().select();
};

export const getSingle = showID => {
    return Client()
    .where("ClientCode", parseInt(showID))
    .first();
};

export const add = show => {
    return Client().insert(show, "ClientCode");
};

export const update = (showID, updates) => {
    return Client()
    .where("ClientCode", parseInt(showID))
    .update(updates);
};

export const deleteItem = showID => {
    return Client()
    .where("ClientCode", parseInt(showID))
    .del();
};
    