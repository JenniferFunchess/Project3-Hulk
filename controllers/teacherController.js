const express = require("express");
const router = express.Router();
const Teacher = require("../models/Teacher.js")


// router.get("/", (req, res) => {
//   Teacher.find()
//     .then((teachers) => {
//       res.json(teachers);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).end();
//     });
// });

router.get("/:id", (req, res) => {
  Teacher.findById(req.params.id)
    .then((foundTeacher) => {
      res.json(foundTeacher);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

router.post("/", (req, res) => {
    console.log(req.body);
    Teacher.create(req.body)
    .then((newTeachers) => {
      console.log(newTeachers);
      console.log("Success");
      res.json(newTeachers);
    }).catch(err => {
      console.log(err);
      res.status(500).end();
    })
});

router.put("/:id", (req, res) => {
  Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedObject) => {
      res.json(updatedObject);
    }
  );
});

// router.delete("/:id", (req, res) => {
//   Teacher.findByIdAndDelete(req.params.id).then((result) => {
//     res.json(result);
//   });
// });



module.exports = router;