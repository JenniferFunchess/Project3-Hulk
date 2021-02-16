const express = require("express");
const router = express.Router();
const Reward = require("../models/Reward.js");
const Student = require("../models/Student");

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
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
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

router.post("/redeem/:id/student/:studentId", (req, res) => {
  // find the reward by its id
  Reward.findById(req.params.id).then((foundReward) => {
    // pull the students star amount from the database
    // todo: Change findOne when authentication is added
    Student.findById(req.params.studentId).then((student) => {
      student.starTotal;
      // compare the two (verify that the students star amount is greater than or equal to the reward star amount)
      if (student.starTotal >= foundReward.starCount) {
        //We will send email to teacher
        //Deduct star amount from student
        Student.findByIdAndUpdate(
          student._id,
          {
            starTotal: student.starTotal - foundReward.starCount,
          },
          { new: true }
        ).then((updatedStudent) => {
          res.json(updatedStudent);
        });
      } else {
        res.status(500).send("Student does not have enough stars");
      }
    });
  });

  // if it is email the teacher
  // update the student star amount in the database
  // you're done
  // res.json(foundReward);
});

module.exports = router;
