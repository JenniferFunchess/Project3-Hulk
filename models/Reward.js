const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const rewardSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a reward name",
  },
  requiredStars: {
    type: Number,
    required: "Assign a star value",
  },
  classCode: {
    type: Number,
  },
});

const Reward = mongoose.model("Reward", rewardSchema);

module.exports = Reward;