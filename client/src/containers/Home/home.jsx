import React from "react";
import starIcon from "../../images/star-45px.png";
import schoolIcon from "../../images/school.png";
// import loginBtnIcon from "../../images/login-btn.png";
import "./homestyle.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 2,
      ease: "easeInOut",
    }
  }
};

const home = () => {
  return (
    <div className="container" id="homebackground">
      <div className="row">
        <motion.div
          className="col s6"
          animate={{ rotate: 360, scale: 3, x: 200, y: 350 }}
        >
          <img src={schoolIcon} className="school" alt="yellow school" />
        </motion.div>
        <div className="col s6" id="homeRight">
          <motion.div
            className="row"
            id="homeStars"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          >
            <img src={starIcon} class="stars" alt="gold star" />
            <img src={starIcon} class="stars" alt="gold star" />
            <img src={starIcon} class="stars" alt="gold star" />
            <img src={starIcon} class="stars" alt="gold star" />
            <img src={starIcon} class="stars" alt="gold star" />
          </motion.div>
          <div className="row center-align" id="homeWelcome">
            Welcome to
          </div>
          <div className="row center-align" id="homeName">
            ON-TRACK
          </div>
          <div className="row center-align" id="rowTagline">
            Reward students for positive behavior in class
          </div>
          <div className="row center-align" id="signUpButton">
            <Link to="/signup">
              <motion.button
                class="waves-effect orange darken-1 btn"
                id="signUpButtonTwo"
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
  );
};

export default home;
