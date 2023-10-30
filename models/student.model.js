const { Schema, model } = require('mongoose');

const studentSchema = Schema({
    name: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        min: 1,
        max: 12,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Not mention"],
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    attendance: {
        type: Number,
        required: true
    },
    marks: {
        type: Number,
        min: 0,
        max: 500,
        required: true
    }
});

const Student = model('students', studentSchema);
module.exports = { Student };
