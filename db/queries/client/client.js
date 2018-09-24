import knex from "../../knex.js";

function Client() {
    return knex("Client");
}

// *** CRUD *** //

export const getAll = () => {
    return Client().select();
};

export const getSingle = id => {
    return Client()
        .where("ClientCode", id)
        .first();
};

export const add = show => {
    return Client().insert(show);
};

export const update = (id, updates) => {
    return Client()
        .where("ClientCode", id)
        .update(updates);
};

export const deleteItem = id => {
    return Client()
        .where("ClientCode", id)
        .del();
};
