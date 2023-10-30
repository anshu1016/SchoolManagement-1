const {Student} = require ('../models/student.model.js')

const getAllStudents = async () =>{
  try{
    const allStudents = await Student.find({});
    return allStudents
  }
  catch(error){
    console.error(error)
    throw error
  }
}

const addStudent = async (studentData) =>{
  console.log(studentData)
  try{
    const newStudent = new Student(studentData);
    const savedStudent = await newStudent.save();
    return savedStudent
  }catch(error){
    console.log(error)
    throw error
  }
}

const deleteStudent = async (studentId) =>{
  try{
     await Student.findByIdAndDelete(studentId);
    const updatedData = Student.find({})
    return updatedData
  }catch(error){
    console.log(error)
    throw error
  }
}

const updateStudent = async (studentId, studentData) =>{
  try{    console.log(studentId, studentData)
     const res = await Student.findByIdAndUpdate(studentId, studentData, {new:true});
    const updatedData =await Student.find({})

    return updatedData

  }catch(error){
    console.log(error)
    throw error
  }
}

module.exports = {addStudent,updateStudent,deleteStudent,getAllStudents}