const express = require("express");
const router = express.Router();
const Teacher = require("../models/Teacher.js");
const jwt = require("jsonwebtoken");



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

// router.get("/classCode/:classCode", (req, res) => {
//   Teacher.find({classCode: req.params.classCode})
//     .then((teachers) => {
//       res.json(teachers);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).end();
//     });
// });

router.post("/", (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      console.log(hashedPassword);
      const newUser = {
        email: req.body.email,
        password: hashedPassword,
      };
      console.log(req.body);
      Teacher.create(req.body).then((newTeachers) => {
        console.log(newTeachers);
        console.log("Success");
        res.json(newTeachers);
        // const token = jwt.sign(
        //   { _id: newUser._id },
        //   process.env.JWT_SIGNATURE,
        //   {
        //     expiresIn: 60 * 60,
        //   }
        // );
        // console.log(token);
        // res.json({
        //   token: token,
        // });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
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
