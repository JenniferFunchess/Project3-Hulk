const express = require("express");
const router = express.Router();
const Signup = require("../models/Signup.js")

router.post("/", (req, res) => {
    console.log(req.body);
    Signup.create(req.body)
    .then((newTeacher) => {
      console.log(newTeacher);
      console.log("Success");
      res.json(newTeacher);
    }).catch(err => {
      console.log(err);
      res.status(500).end();
    })
});

router.get("/:id", (req, res) => {
  Signup.findById(req.params.id)
    .then((foundTeacher) => {
      res.json(foundTeacher);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

module.exports = router;