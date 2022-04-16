import knex from './knex.js';

//Create
function createMarks(data) {
    return knex("marks").insert(data);
};

//Get
function getMarks() {
    return knex("marks").select("*");
};
function getMarksbyId(id) {
    return knex("marks").where("id", id).select();
}

//Update
function updateMarks(id, marks) {
    return knex("marks").where("id", id).update(marks);
}

//Delete
function deleteMarks(id) {
    return knex("marks").where("id", id).delete();
}

export default {
    createMarks,
    getMarks,
    deleteMarks,
    getMarksbyId,
    updateMarks
}