import knex from "../../knex.js";
import * as _ from "lodash";

function Seq() {
    return knex("seq");
}

// *** CRUD *** //

export const getAll = () => {
    return Seq().select();
};

export const getSingle = id => {
    return Seq()
        .where("seq_id", parseInt(id))
        .first();
};

export const add = show => {
    return Seq().insert(show, "seq_id");
};

export const update = (id, updates) => {
    return Seq()
        .where("seq_id", parseInt(id))
        .update(updates);
};

export const deleteItem = id => {
    return Seq()
        .where("seq_id", parseInt(id))
        .del();
};

export const getFor = async (fr) => {
    let seq = await Seq()
        .where("for", fr)
        .first();

    let upd = _.clone(seq);
    upd.current_number++;
    
    let u = await Seq()
        .where("seq_id", parseInt(upd.seq_id))
        .update(upd);

    return Promise.resolve(seq);
}