import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentProfile from "../../images/school.png";
import "./card.css";

const Card = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("/api/students")
      .then((response) => {
        console.log("Successfully tested");
        setStudents(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {students.map((student) => (
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
              <p className="first-name">First Name:{student.firstName} </p>
              <p className="last-name">Last Name: </p>
              <p className="user-name">User Name: </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
