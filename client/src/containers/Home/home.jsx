import React from 'react';
import starIcon from "../../images/star-45px.png";
import schoolIcon from "../../images/school.png";
import "./style.css";

const home = () => {
    return (
        <div className= "container">
            <div className="row">
            <div className="col s6"><img src={schoolIcon} className="school" alt="yellow school"/>
            </div>
            <div className="col s6" id ="homeRight">
                <div className="row" id = "homeStars">
                    <img src={starIcon} class="stars" alt="gold star"/>
                    <img src={starIcon} class="stars" alt="gold star"/>
                    <img src={starIcon} class="stars" alt="gold star"/>
                    <img src={starIcon} class="stars" alt="gold star"/>
                    <img src={starIcon} class="stars" alt="gold star"/>
                </div>
                <div className="row" id="homeName">
                ON TRACK APP
                </div>
                <div className="row" id="rowTagline">
                    REWARD STUDENTS FOR POSITIVE BEHAVIOR IN CLASS
                </div>
                <div className="row" id="signUpButton">
                    <button className = "waves-effect red darken-1 btn">SIGN UP</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default home;