import React, { useState } from "react";
import "./teacherloginstyle.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TeacherLogin = ({ handleFormSubmit }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
      <div className="row">
        <div className="col m12" id="teacherlogin">
          <h1>Teacher Login</h1>
        </div>
      </div>
      <motion.div
        className="container"
        id="teacherlogincontainer"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="row">
          <div className="col s10 offset-s1">
            <div className="row">
              <form
                className="col s12"
                onSubmit={(e) => {
                  handleFormSubmit(e, {
                    email,
                    password,
                  });
                }}
              >
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
              </form>
              <div className="row center-align">
                <div className="col s12">
                  <Link to="/teacher/id:">
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
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TeacherLogin;
