import React, { useState } from "react";
import "./studentloginstyle.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { useHistory } from "react-router-dom";

const StudentLogin = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [classcode, setClassCode] = useState("");
  // const history = useHistory();

  const handleFormSubmit = (e) => {
    console.log("Success");
    e.preventDefault();
    axios
      .post("/api/auth/studentlogin", {
        username: username,
        classcode: classcode,
      })
      .then((response) => {
        console.log(response.data);
        // jwt.verify(
        //   response.data.token,
        //   process.env.REACT_APP_JWT_SIGNATURE,
        //   (err, decoded) => {
        //     if (err) {
        //       console.log(err);
        //     } else {
        //       setToken(response.data.token);
        //       history.push("/");
        //     }
        //   }
        // );
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

  return (
    <>
      <div className="row">
        <div className="col m12" id="studentlogin">
          <h1>Student Login</h1>
        </div>
      </div>
      <motion.div
        className="container"
        id="studentlogincontainer"
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
                    username,
                    classcode,
                  });
                }}
              >
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter Username"
                      id="username"
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                    <label htmlFor="username">Enter Username</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter Classcode"
                      id="classcode"
                      type="text"
                      name="classcode"
                      value={classcode}
                      onChange={(e) => {
                        setClassCode(e.target.value);
                      }}
                    />
                    <label htmlFor="classcode">Enter Classcode</label>
                  </div>
                </div>
                <div className="row center-align">
                <div className="col s12">
                  <Link to="/student/id:">
                    <motion.button
                      className="waves-effect red darken-1 btn"
                      whileHover={{
                        scale: 1.5,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                      }}
                    >
                      LOGIN
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

export default StudentLogin;
