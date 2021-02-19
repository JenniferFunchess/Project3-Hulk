const express = require("express");
const router = express.Router();
const Signup = require("../models/Signup.js");

router.post("/", (req, res) => {
  console.log(req.body);
  Signup.create(req.body)
    .then((newTeacher) => {
      console.log(newTeacher);
      console.log("Success");
      res.json(newTeacher);
      const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SIGNATURE, {
        expiresIn: 60 * 60,
      });
      console.log(token);
      res.json({
        token: token,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.get("/", (req, res) => {
  Signup.find()
    .then((teachers) => {
      res.json(teachers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
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

router.get("/teacher/:classCode", (req, res) => {
  Signup.find({classCode: req.params.classCode})
    .then((teachers) => {
      res.json(teachers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

module.exports = router;

