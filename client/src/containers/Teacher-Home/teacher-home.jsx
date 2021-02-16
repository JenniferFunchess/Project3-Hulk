import React, { useEffect, useState } from 'react';
import StudentProfile from "../../images/school.png";
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';

const TeacherHome = () => {

    const url = window.location.href;
    const urlArray = url.split('/');
    const teacherId = urlArray[urlArray.length-1];
    console.log(teacherId);

    const [teacher, setTeacher] = useState("");

    useEffect(() => {
        axios.get(`/api/signup/${teacherId}`)
        .then((response) => {
          console.log('Teacher get route worked');
          setTeacher(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        })
    }, []);
  return (
    <>
    <Navbar teacher={true} classCode={teacher.classCode} login={false}></Navbar>
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
                alt="Student Profile"
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
                alt="Student Profile"
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
                alt="Student Profile"
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
    </>
  );
};

export default TeacherHome;
