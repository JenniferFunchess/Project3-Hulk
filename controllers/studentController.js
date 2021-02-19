const express = require("express");
const router = express.Router();
const Student = require("../models/Student.js");

// router.get("/", (req, res) => {
//   Student.find()
//     .then((students) => {
//       res.json(students);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).end();
//     });
// });

router.get("/:id", (req, res) => {
  Student.findById(req.params._id)
    .then((foundStudent) => {
      res.json(foundStudent);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

router.post("/", (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
    console.log(hashedPassword);
    const newUser = {
      email: req.body.email,
      password: hashedPassword,
    };
  console.log(req.body);
  Student.create(req.body)
    .then((newStudents) => {
      console.log(newStudents);
      console.log("Success");
      res.json(newStudents);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.put("/:id", (req, res) => {
  Student.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedObject) => {
      res.json(updatedObject);
    }
  );
});

router.put("/:id/stars", (req, res) => {
  Student.findByIdAndUpdate(
    req.params.id,
    { $set: { tasksCompleted: req.body } },
    { new: true }
  ).then((updatedObject) => {
    console.log(updatedObject);
    res.json(updatedObject);
  });
});

// router.delete("/:id", (req, res) => {
//   Student.findByIdAndDelete(req.params.id).then((result) => {
//     res.json(result);
//   });
// });

module.exports = router;
