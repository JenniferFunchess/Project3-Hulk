import React from "react";
import StudentProfile from "../../images/school.png";
import { Link } from "react-router-dom";

const TeacherHome = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Teacher Home Page</h1>
      </div>
      <div className="row">
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img
                src={StudentProfile}
                alt="Student Profile Picture"
                style={{ width: "100%" }}
              />
              <Link
                to="/add-student"
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="material-icons">add</i>
              </Link>
            </div>
            <div className="card-content">
              <p className="student-name">Add A Student</p>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img
                src={StudentProfile}
                alt="Student Profile Picture"
                style={{ width: "100%" }}
              />
              <Link
                to="/classlist"
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="material-icons">add</i>
              </Link>
            </div>
            <div className="card-content">
              <p className="student-name">Class List</p>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img
                src={StudentProfile}
                alt="Student Profile Picture"
                style={{ width: "100%" }}
              />
              <Link
                to="/rewards"
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="material-icons">add</i>
              </Link>
            </div>
            <div className="card-content">
              <p className="student-name">Class Rewards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
