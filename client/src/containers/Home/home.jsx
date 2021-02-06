import React from 'react';
import htmlIcon from "../../images/html-icon.png";

const home = () => {
    return (
        <div className= "container">
            <div className="row">
            <div className="col s6"><img src={htmlIcon} class="school" alt="yellow school"/>
            <div className="col s6" id ="homeRight">
                <div className="row" id = "homeStars">
                    <img src={htmlIcon} class="stars" alt="gold star"/>
                    <img src={htmlIcon} class="stars" alt="gold star"/>
                    <img src={htmlIcon} class="stars" alt="gold star"/>
                    <img src={htmlIcon} class="stars" alt="gold star"/>
                    <img src={htmlIcon} class="stars" alt="gold star"/>
                </div>
                <div className="row" id="homeName">
                    ON TRACK APP
                </div>
                <div className="row" id="rowTagline">
                    REWARD STUDENTS FOR POSITIVE BEHAVIOR IN CLASS
                </div>
                <div className="row" id="signUpButton">
                    <a className="waves-effect red darken-1 btn">SIGN UP</a>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default home;