const { addTeacher, deleteTeacher, updateTeacher, getAllTeachers } = require('../query/teacher.query.js'); 

const { Router } = require('express');

const teacherRoute = Router();

teacherRoute.post('/', async (req, res) => {
  try {
    const addedTeacher = await addTeacher(req.body);
    res.status(201).json({ message: "Teacher data added successfully", data: addedTeacher });
  } catch (error) {
    res.status(400).json({ message: "Check the request body and try again", error });
  }
});

teacherRoute.delete('/:teacherId', async (req, res) => {
  try {
    const updatedData = await deleteTeacher(req.params.teacherId);
    res.json({ message: "Teacher data deleted successfully", data: updatedData });
  } catch (error) {
    res.status(400).json({ message: 'Check the request param and try again', error });
  }
});

teacherRoute.put('/:teacherId', async (req, res) => { 
  try {
    const updatedData = await updateTeacher(req.params.teacherId, req.body);
    res.json({ message: "Teacher data updated successfully", data: updatedData });
  } catch (error) {
    res.status(400).json({ message: 'Check the request body and try again', error });
  }
});

teacherRoute.get('/', async (req, res) => {
  try {
    const data = await getAllTeachers();
    if (data.length > 0) {
      res.json({ message: "Found All Teachers Data", data });
    } else {
      res.json({ message: "Teacher Database is empty", data });
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Something is not right", error });
  }
});

module.exports = { teacherRoute };
