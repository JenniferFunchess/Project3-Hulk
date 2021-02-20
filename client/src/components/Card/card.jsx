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
                alt="Student Profile"
                style={{ width: "100%" }}
              />
              <Link
                to={`/view-student/${student._id}`}
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="material-icons">add</i>
              </Link>
            </div>
            <div className="card-content class-list-card">
              <p className="first-name student-name">
                First Name: {student.firstName}
              </p>
              <p className="last-name student-name">
                Last Name: {student.lastName}
              </p>
              <p className="user-name student-name">
                User Name: {student.username}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
