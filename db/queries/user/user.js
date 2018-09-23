import knex from "../../knex.js";

function User() {
    return knex("User");
}

// *** CRUD *** //

export const getAll = () => {
    return User().select();
};

export const getSingle = id => {
    return User()
    .where("UserCode", parseInt(id))
    .first();
};

export const add = show => {
    return User().insert(show, "UserCode");
};

export const update = (id, updates) => {
    return User()
    .where("UserCode", parseInt(id))
    .update(updates);
};

export const deleteItem = id => {
    return User()
    .where("UserCode", parseInt(id))
    .del();
};

export const login = (username, password) => {
    return User()
    .where("Username", username)
    .where("Password", password)
    .first();
};