import knex from "../../knex.js";

function User() {
    return knex("User");
}

// *** CRUD *** //

export const getAll = () => {
    return User().select();
};

export const getSingle = showID => {
    return User()
    .where("UserCode", parseInt(showID))
    .first();
};

export const add = show => {
    return User().insert(show, "UserCode");
};

export const update = (showID, updates) => {
    return User()
    .where("UserCode", parseInt(showID))
    .update(updates);
};

export const deleteItem = showID => {
    return User()
    .where("UserCode", parseInt(showID))
    .del();
};
    