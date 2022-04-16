//import connected version of knex
//SQL QUERIES

import knex from './knex.js';

//Create
function createStudent(student) {
    return knex("students").insert(student);
};

//Read
function getAllStudents() {
    return knex("students").select("*");
}
function getStudentbyId(id) {
    return knex("students").where("id", id).select();
}

//Update
function updateStudent(id, student) {
    return knex("students").where("id", id).update(student);
}

//Delete
function deleteStudent(id) {
    return knex("students").where("id", id).delete();
}

export default {
    createStudent,
    getAllStudents,
    updateStudent,
    deleteStudent,
    getStudentbyId
}