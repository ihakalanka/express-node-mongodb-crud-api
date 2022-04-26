const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name:{
    type: 'string',
    required: true
  },
  age:{
    type: 'number',
    required: true
  },
  gender: {
    type: 'string',
    required: true
  }
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
