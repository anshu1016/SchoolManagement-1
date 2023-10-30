const { Teacher } = require('../models/teacher.model.js');

const getAllTeachers = async () => {
  try {
    const allTeachers = await Teacher.find({});
    return allTeachers;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const addTeacher = async (teacherData) => {
  try {
    const newTeacher = new Teacher(teacherData);
    const savedTeacher = await newTeacher.save();
    return savedTeacher;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const deleteTeacher = async (teacherId) => {
  try {
    await Teacher.findByIdAndDelete(teacherId);
    const updatedData = Teacher.find({});
    return updatedData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const updateTeacher = async (teacherId, teacherData) => {
  try {
    await Teacher.findByIdAndUpdate(teacherId, teacherData);
    const updatedData = Teacher.find({});
    return updatedData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { addTeacher, updateTeacher, deleteTeacher, getAllTeachers };
