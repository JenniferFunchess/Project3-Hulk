import React, { useEffect, useState } from "react";
import Backpack from "../../images/backpack-icon.png";
import Medal from "../../images/medal-icon.png";
import School from "../../images/school-icon.png";
import "./teacher-home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const TeacherHome = () => {
  const url = window.location.href;
  const urlArray = url.split("/");
  const teacherId = urlArray[urlArray.length - 1];
  // console.log(teacherId);

  const [teacher, setTeacher] = useState("");

  useEffect(() => {
    axios
      .get(`/api/signup/${teacherId}`)
      .then((response) => {
        // console.log("Teacher get route worked");
        setTeacher(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [teacherId]);
  const classListString = "/classlist/" + teacher._id;
  const addStudentString = "/add-student/" + teacher._id;
  const addRewardString = "/rewards/" + teacher._id;

  return (
    <>
      <Navbar
        teacher={true}
        classCode={teacher.classCode}
        login={false}
      ></Navbar>
      <div className="container">
        <div className="row">
          <h1>Teacher Home Page</h1>
        </div>
        <div className="row">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image valign-wrapper addstudent-cat">
                <img
                  src={Backpack}
                  className="img-icon"
                  alt="Student Profile"
                  style={{ width: "150px" }}
                />
                <button
                  onClick={() => {
                    window.location.href = addStudentString;
                  }}
                  className="btn-floating halfway-fab waves-effect waves-light red"
                >
                  <i className="material-icons">add</i>
                </button>
              </div>
              <div className="card-content teacher-card">
                <h5 className="student-name flow-text">
                  <FontAwesomeIcon icon={faStar} />
                  Add Student
                  <FontAwesomeIcon icon={faStar} />{" "}
                </h5>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image valign-wrapper studentlist-cat">
                <img
                  src={School}
                  className="img-icon"
                  alt="Student Profile"
                  style={{ width: "150px" }}
                />
                <button
                  onClick={() => {
                    window.location.href = classListString;
                  }}
                  href={classListString}
                  className="btn-floating halfway-fab waves-effect waves-light red"
                >
                  <i className="material-icons">add</i>
                </button>
              </div>
              <div className="card-content teacher-card">
                <h5 className="student-name flow-text">
                  <FontAwesomeIcon icon={faStar} />
                  Class List <FontAwesomeIcon icon={faStar} />{" "}
                </h5>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image valign-wrapper reward-cat">
                <img
                  src={Medal}
                  className="img-icon"
                  alt="Student Profile"
                  style={{ width: "150px" }}
                />
                <button
                  onClick={() => {
                    window.location.href = addRewardString;
                  }}
                  className="btn-floating halfway-fab waves-effect waves-light red"
                >
                  <i className="material-icons">add</i>
                </button>
              </div>
              <div className="card-content teacher-card">
                <h5 className="student-name flow-text">
                  <FontAwesomeIcon icon={faStar} />
                  Class Rewards <FontAwesomeIcon icon={faStar} />{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherHome;
