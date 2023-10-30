const { model, Schema } = require('mongoose');

const teacherSchema = Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
});

const Teacher = model('teachers', teacherSchema);
module.exports = { Teacher };
