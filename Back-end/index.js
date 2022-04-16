import express from 'express';
import db from './db/students.js';
import db2 from './db/department.js';
import db3 from './db/marks.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//Create
app.post("/students", async (req, res) => {
    const results = await db.createStudent(req.body);
})
app.post("/department", async (req, res) => {
    await db2.createDepartment(req.body);
})
app.post("/marks", async (req, res) => {
    await db3.createMarks(req.body);
})

//Read
app.get("/students", async (req, res) => {
    const students = await db.getAllStudents();
    res.status(200).json({ students })
})
app.get("/students/:id", async (req, res) => {
    const students = await db.getStudentbyId(req.params.id);
    res.status(200).json({ students })
})
app.get("/department", async (req, res) => {
    const department = await db2.getDepartment();
    res.status(200).json({ department })
})
app.get("/department/:id", async (req, res) => {
    const department = await db2.getDepartmentbyId(req.params.id);
    res.status(200).json({ department })
})
app.get("/marks", async (req, res) => {
    const marks = await db3.getMarks();
    res.status(200).json({ marks })
})
app.get("/marks/:id", async (req, res) => {
    const marks = await db3.getMarksbyId(req.params.id);
    res.status(200).json({ marks })
})

//Update
app.patch("/students/:id", async (req, res) => {
    await db.updateStudent(req.params.id, req.body);
    res.status(200).json({ success: true });
})
app.patch("/department/:id", async (req, res) => {
    await db2.updateDepartment(req.params.id, req.body);
    res.status(200).json({ success: true });
})
app.patch("/marks/:id", async (req, res) => {
    await db3.updateMarks(req.params.id, req.body);
    res.status(200).json({ success: true });
})

//Delete
app.delete("/students/:id", async (req, res) => {
    await db.deleteStudent(req.params.id);
    res.status(200).json({ success: true });
})
app.delete("/department/:id", async (req, res) => {
    await db2.deleteDepartment(req.params.id);
    res.status(200).json({ success: true });
})
app.delete("/marks/:id", async (req, res) => {
    await db3.deleteMarks(req.params.id);
    res.status(200).json({ success: true });
})


app.listen(3003, () => {
    console.log("Server is running at port 3003");
})