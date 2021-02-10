const express = require("express");
const router = express.Router();
const Task = require("../models/Task.js")


router.get("/", (req, res) => {
  Task.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.get("/:id", (req, res) => {
  Task.findById(req.params.id)
    .then((foundTask) => {
      res.json(foundTask);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

router.post("/", (req, res) => {
    console.log(req.body);
    Task.create(req.body)
    .then((newTasks) => {
      console.log(newTasks);
      console.log("Success");
      res.json(newTasks);
    }).catch(err => {
      console.log(err);
      res.status(500).end();
    })
});

router.put("/:id", (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedObject) => {
      res.json(updatedObject);
    }
  );
});

router.delete("/:id", (req, res) => {
  Task.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;