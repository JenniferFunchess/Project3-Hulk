import React, { useState } from "react";
import "./signupstyle.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [teacherNickname, setTeacherNickname] = useState("");

  const generateClasscode = () => {
    const code = Math.floor(Math.random() * 90000) + 10000;
    return code;
  };

  const classCode = generateClasscode();

  const handleFormSubmit = (e, newTeacher) => {
    console.log("Success");
    e.preventDefault();
    axios
      .post("/api/signup", newTeacher)
      .then((response) => {
        console.log(response.data);
        // history.push("/rewards");
      })
      .catch((err) => {
        console.log(err);
        // alert.setAlert({
        //   message: "Failed to create new category.",
        //   type: "danger",
        // });
      });
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
      transition: {
        staggerChildren: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        staggerChildren: 0.4,
        when: "beforeChildren",
      },
    },
  };

  return (
    <>
      <div className="row" id="teachersignup">
        <div className="col m12">
          <h1>Teacher Signup</h1>
        </div>
      </div>
      <motion.div
        className="container"
        id="signupcontainer"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="row">
          <div
            // className="col s10 offset-s1"
            className="no-borderRadiusImportant"
          >
            <div className="row">
              <form
                onSubmit={(e) => {
                  handleFormSubmit(e, {
                    firstName,
                    lastName,
                    email,
                    password,
                    teacherNickname,
                    classCode,
                  });
                }}
              >
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      placeholder="First Name"
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                    <label htmlFor="firstName">First Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input
                      placeholder="Last Name"
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter Email"
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <label htmlFor="email">Enter Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter Password"
                      id="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label htmlFor="password">Enter Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Name Students Call You"
                      id="teacherNickname"
                      type="text"
                      name="teacherNickname"
                      value={teacherNickname}
                      onChange={(e) => {
                        setTeacherNickname(e.target.value);
                      }}
                    />
                    <label htmlFor="teacherNickname">Teacher Nickname</label>
                  </div>
                </div>
                <div className="row center-align">
                  <div className="col s12">
                    <Link to="/teacher/:id">
                      <motion.button
                        className="waves-effect red darken-1 btn"
                        whileHover={{
                          scale: 1.5,
                          textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        SIGN UP
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SignUp;
