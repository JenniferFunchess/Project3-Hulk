import React from 'react';
import { Link } from "react-router-dom";
import StudentProfile from "../../images/school.png";
import "./card.css";

const Card = () => {
    return (
        <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img
                  src={StudentProfile}
                  alt="Student Profile Picture"
                  style={{ width: "100%" }}
                />
                <Link
                  to="/view-student"
                  className="btn-floating halfway-fab waves-effect waves-light red"
                >
                  <i className="material-icons">add</i>
                </Link>
              </div>
              <div className="card-content">
                <p className="first-name">First Name: </p>
                <p className="last-name">Last Name: </p>
                <p className="user-name">User Name: </p>
              </div>
            </div>
        </div>
    );
};

export default Card;