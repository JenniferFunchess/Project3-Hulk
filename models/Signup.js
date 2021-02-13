const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teacherSignupSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "Enter a first name",
  },
  lastName: {
    type: String,
    trim: true,
    required: "Enter a last name",
  },
  email: {
    type: String,
    required: "Enter an email",
  },
  password: {
    type: String,
    required: "Enter a password",
  },
  teacherNickname: {
    type: String,
    trim: true,
    required: "Enter a first name",
  },
  classCode: {
    type: Number,
  },
});

const Signup = mongoose.model("Teacher Signup", teacherSignupSchema);

module.exports = Signup;