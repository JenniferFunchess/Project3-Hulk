import React from "react";
import starIcon from "../../images/star-45px.png";
import schoolIcon from "../../images/school.png";
import "./homestyle.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const home = () => {
  return (
    <div className="container" id="homebackground">
      <div className="row">
        <motion.div className="col s6" animate={{ rotate: 360, scale: 3, x:200, y:350 }}>
          <img src={schoolIcon} className="school" alt="yellow school" />
        </motion.div>
        <div className="col s6" id="homeRight">
          <div className="row" id="homeStars">
            <img src={starIcon} class="stars" alt="gold star" />
            <img src={starIcon} class="stars" alt="gold star" />
            <img src={starIcon} class="stars" alt="gold star" />
            <img src={starIcon} class="stars" alt="gold star" />
            <img src={starIcon} class="stars" alt="gold star" />
          </div>
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
            <Link to="/signup"
            class="waves-effect waves-light btn"
             id="signUpButtonTwo"> SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
