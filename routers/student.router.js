


const { addStudent, deleteStudent, updateStudent ,getAllStudents} = require('../query/student.query.js');

const { Router } = require('express');

const studentRoute = Router();

studentRoute.post('/', async (req, res) => {
  try {
    const addedStudent = await addStudent(req.body);
    res.status(201).json({ message: "Student data added successfully", data: addedStudent })
  } catch (error) {
    res.status(400).json({ message: "Check the request body and try again", error })
    throw error
  }

})

studentRoute.delete('/:stuId', async (req, res) => {
  try {
    const updatedData = await deleteStudent(req.params.stuId);
    res.json({ message: "Data deleted Successfully", data: updatedData })
  } catch (error) {
    res.status(400).json({ message: 'check the request param and try again', error })
  }
})
studentRoute.post('/:studentId', async (req, res) => {
  try {
    const updatedData = await updateStudent(req.params.studentId, req.body);
    res.json({ message: "Data updated Successfully", data: updatedData })
  } catch (error) {
    res.status(400).json({ message: 'check the request body and try again', error })
  }
})

studentRoute.get('/', async(req, res)=>{
  try{
    const data= await getAllStudents();
    if(data.length >0){
      res.json({message:"Found All Students Data", data })
    }else res.json({message:"Student Database is empty", data})
  }catch(error){
    console.error(error)
    res.status(404).json({message:"Something is not write", error})
  }
})
module.exports = { studentRoute }