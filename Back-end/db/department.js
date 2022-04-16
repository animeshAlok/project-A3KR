import knex from './knex.js';

//Create
function createDepartment(data) {
    return knex("department").insert(data);
};

//Get
function getDepartment() {
    return knex("department").select("*");
};
function getDepartmentbyId(id) {
    return knex("department").where("id", id).select();
}

//Update
function updateDepartment(id, department) {
    return knex("department").where("id", id).update(department);
}

//Delete
function deleteDepartment(id) {
    return knex("department").where("id", id).delete();
}

export default {
    createDepartment,
    getDepartment,
    deleteDepartment,
    getDepartmentbyId,
    updateDepartment
}