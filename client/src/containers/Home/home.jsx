import React from 'react';

const home = () => {
    return (
        <>
            <div class="row">
            <div class="col s6"><img id ="school" src="./icons/school.png"></div>
            <div class="col s6" id ="homeRight">
                <div class="row" id = "homeStars">
                    <img id ="stars" src="./icons/star-45px.png">
                    <img id ="stars" src="./icons/star-45px.png">
                    <img id ="stars" src="./icons/star-45px.png">
                    <img id ="stars" src="./icons/star-45px.png">
                    <img id ="stars" src="./icons/star-45px.png">
                </div>
                <div class="row" id="homeName">
                    ON TRACK APP
                </div>
                <div class="row" id="rowTagline">
                    REWARD STUDENTS FOR POSITIVE BEHAVIOR IN CLASS
                </div>
                <div class="row" id="signUpButton">
                    <a class="waves-effect red darken-1 btn">SIGN UP</a>
                </div>
            </div>
          </div>
        <>
    );
};

export default home;