const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a task name",
  },
  stars: {
    type: Number,
    required: "Assign a star value",
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;