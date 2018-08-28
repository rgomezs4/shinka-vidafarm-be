import knex from "../../knex.js";

function Shows() {
  return knex("shows");
}

// *** CRUD *** //

export const getAll = () => {
  return Shows().select();
};

export const getSingle = showID => {
  return Shows()
    .where("id", parseInt(showID))
    .first();
};

export const add = show => {
  return Shows().insert(show, "id");
};

export const update = (showID, updates) => {
  return Shows()
    .where("id", parseInt(showID))
    .update(updates);
};

export const deleteItem = showID => {
  return Shows()
    .where("id", parseInt(showID))
    .del();
};
