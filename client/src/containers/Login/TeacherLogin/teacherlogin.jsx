import React, { useState } from "react";
import "./teacherloginstyle.css";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import jwt from "jsonwebtoken";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PrivacyPolicy from "../../../components/PrivacyPolicy/PrivacyPolicy";
// import jwt from "jsonwebtoken";

const TeacherLogin = ({ setToken }) => {
  const [teacher, setTeacher] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleFormSubmit = (e) => {
    console.log("Success");
    e.preventDefault();
    axios
      .post("/api/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setTeacher(response.data);
        history.push(`/teacherhome/${response.data._id}`);
        jwt.verify(
          response.data.token,
          process.env.REACT_APP_JWT_SIGNATURE,
          (err, decoded) => {
            if (err) {
              console.log(err);
            } else {
              setToken(response.data.token);
              history.push("/");
            }
          }
        );
      })
      .catch((err) => {
        console.log(err);
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

  const teacherHomeString = "/teacherhome/" + teacher._id;

  return (
    <>
      <Navbar
        teacher={true}
        classcode={teacher.classcode}
        login={false}
      ></Navbar>
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
                <h4 className="form-header">
                  <FontAwesomeIcon icon={faStar} /> Login to Access Your Class
                  <FontAwesomeIcon icon={faStar} />
                </h4>

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
                  </div>
                </div>
                <row className="row">
                  <div className="col s12 scroll-box">
                    {/* <div className="scroll-box"> */}
                    <PrivacyPolicy></PrivacyPolicy>
                    {/* </div> */}
                  </div>
                </row>
                <row className="row">
                  <p>
                    <label>
                      <input
                        type="checkbox"
                        className="validate"
                        required=""
                        aria-required="true"
                      />
                      <span>Check to Agree to Terms</span>
                    </label>
                  </p>
                </row>
                <div className="row center-align">
                  <div className="col s12">
                    <motion.button
                      className="waves-effect red darken-1 btn"
                      type="submit"
                      href={teacherHomeString}
                      whileHover={{
                        scale: 1.5,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                      }}
                    >
                      LOGIN
                    </motion.button>
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

export default TeacherLogin;
