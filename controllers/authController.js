const express = require("express");
const router = express.Router();
const Signup = require("../models/Signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// router.post("/", (req, res) => {
//   bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
//     console.log(hashedPassword);
//     const newUser = {
//       email: req.body.email,
//       password: hashedPassword,
//     };
//     User.create(newUser)
//       .then((newUser) => {
//         // TODO: Send back token.
//         const token = jwt.sign(
//           { _id: newUser._id },
//           process.env.JWT_SIGNATURE,
//           {
//             expiresIn: 60 * 60,
//           }
//         );
//         console.log(token);
//         res.json({
//           token: token,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).end();
//       });
//   });
// });

router.post("/login", (req, res) => {
  console.log(req.body);
  Signup.findOne({
    email: req.body.email.toLowerCase(),
    password: req.body.password,
  })
    .then((foundUser) => {
      console.log(foundUser);
      // bcrypt.compare(req.body.password, foundUser.password).then((result) => {
      //   console.log(result);
      //   if (result) {
      //     const token = jwt.sign(
      //       { _id: foundUser._id },
      //       process.env.JWT_SIGNATURE,
      //       {
      //         expiresIn: 60 * 60,
      //       }
      //     );
      //     console.log(token);
      //     res.json({
      //       token: token,
      //     });
      //   } else {
      //     res.status(401).end();
      //   }
      // });
      if (foundUser) {
        res.json(foundUser);
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

module.exports = router;
