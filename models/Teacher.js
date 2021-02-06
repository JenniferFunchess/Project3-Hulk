const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: "Enter an email address",
  },
  students: {
    type: Array,
  },
  tasks: {
    type: Array,
  },
  rewards: {
    type: Array,
  },
  classCode: {
    type: Number,
    trim: true,
    required: "Enter a class code",
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;