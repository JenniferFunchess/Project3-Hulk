const express = require("express");
const router = express.Router();
const Reward = require("../models/Reward.js")

router.post("/", (req, res) => {
    console.log(req.body);
    Reward.create(req.body)
    .then((newRewards) => {
      console.log(newRewards);
      console.log("Success");
      res.json(newRewards);
    }).catch(err => {
      console.log(err);
      res.status(500).end();
    })
});

module.exports = router;