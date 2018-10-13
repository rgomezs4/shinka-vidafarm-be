import knex from "../../knex.js";

function Provider() {
  return knex("Provider");
}

// *** CRUD *** //

export const getAll = () => {
  return Provider().select();
};

export const getSingle = id => {
  return Provider()
    .where("ProviderCode", id)
    .first();
};

export const add = show => {
  console.log(show);
  return Provider().insert(show);
};

export const update = (id, updates) => {
  return Provider()
    .where("ProviderCode", id)
    .update(updates);
};

export const deleteItem = id => {
  return Provider()
    .where("ProviderCode", id)
    .del();
};

export const search = criteria => {
  return Provider()
    .where("ProviderCode", criteria)
    .orWhere("Name", "like", `%${criteria}%`)
    .first();
};
