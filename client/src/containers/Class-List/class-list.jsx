import React from "react";
import "./class-list.css";
import StudentProfile from "../../images/school.png";
import { Link } from "react-router-dom";

const ViewClass = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>Class List</h1>
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
                <span className="card-title">Title</span>
                <Link to="/view-student" className="btn-floating halfway-fab waves-effect waves-light red">
                  <i className="material-icons">add</i>
                </Link>
              </div>
              <div className="card-content">
                <p className="student-name">Student Name</p>
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
                <span className="card-title">Title</span>
                <Link to="/view-student" className="btn-floating halfway-fab waves-effect waves-light red">
                  <i className="material-icons">add</i>
                </Link>
              </div>
              <div className="card-content">
                <p className="student-name">Student Name</p>
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
                <span className="card-title">Title</span>
                <Link to="/view-student" className="btn-floating halfway-fab waves-effect waves-light red">
                  <i className="material-icons">add</i>
                </Link>
              </div>
              <div className="card-content">
                <p className="student-name">Student Name</p>
              </div>
            </div>
          </div>
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
                <span className="card-title">Title</span>
                <Link to="/view-student" className="btn-floating halfway-fab waves-effect waves-light red">
                  <i className="material-icons">add</i>
                </Link>
              </div>
              <div className="card-content">
                <p className="student-name">Student Name</p>
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
                <span className="card-title">Title</span>
                <Link to="/view-student" className="btn-floating halfway-fab waves-effect waves-light red">
                  <i className="material-icons">add</i>
                </Link>
              </div>
              <div className="card-content">
                <p className="student-name">Student Name</p>
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
                <span className="card-title">Title</span>
                <Link to="/view-student" className="btn-floating halfway-fab waves-effect waves-light red">
                  <i className="material-icons">add</i>
                </Link>
              </div>
              <div className="card-content">
                <p className="student-name">Student Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewClass;
