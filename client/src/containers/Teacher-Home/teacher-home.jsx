import React, { useEffect, useState } from "react";
import Backpack from "../../images/backpack-icon.png";
import Medal from "../../images/medal-icon.png";
import School from "../../images/school-icon.png";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import "./teacher-home.css";

const TeacherHome = () => {
  const url = window.location.href;
  const urlArray = url.split("/");
  const teacherId = urlArray[urlArray.length - 1];
  console.log(teacherId);

  const [teacher, setTeacher] = useState("");

  useEffect(() => {
    axios
      .get(`/api/signup/${teacherId}`)
      .then((response) => {
        console.log("Teacher get route worked");
        setTeacher(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
              <div className="card-image addstudent-cat">
                <img
                  src={Backpack}
                  className="addstudent-card"
                  alt="Student Profile"
                  // style={{ width: "100%" }}
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
              <div className="card-content">
                <p className="student-name">Add A Student</p>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image studentlist-cat">
                <img
                  src={School}
                  alt="Student Profile"
                  style={{ width: "100%" }}
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
              <div className="card-content">
                <p className="student-name">Class List</p>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image reward-cat">
                <img
                  src={Medal}
                  alt="Student Profile"
                  style={{ width: "100%" }}
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
              <div className="card-content">
                <p className="student-name">Class Rewards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherHome;
