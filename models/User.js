const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "Enter your First Name.",
  },
  lastName: {
    type: String,
    trim: true,
    required: "Enter your Last Name.",
  },
  email: {
    type: String,
    trim: true,
    required: "Enter an email address.",
  },
  password: {
    type: String,
    trim: true,
    required: "Enter a password",
  },
  teacherNickname: {
    type: String,
    trim: true,
    required: "Enter a Teacher Nickname.",
  },
});
userSchema.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;