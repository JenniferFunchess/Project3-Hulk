const express = require("express");
const router = express.Router();
const Reward = require("../models/Reward.js")


router.get("/", (req, res) => {
  Reward.find()
    .then((rewards) => {
      res.json(rewards);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.get("/:id", (req, res) => {
  Reward.findById(req.params.id)
    .then((foundReward) => {
      res.json(foundReward);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

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

router.put("/:id", (req, res) => {
  Reward.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedObject) => {
      res.json(updatedObject);
    }
  );
});

router.delete("/:id", (req, res) => {
  Reward.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;