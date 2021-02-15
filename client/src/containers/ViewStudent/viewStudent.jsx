import React, { useEffect, useState } from "react";
import axios from "axios";
import FormComponent from "../../components/Form/form";
import "./viewStudent.css";
import Navbar from '../../components/Navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ViewStudentPage = () => {

  const url = window.location.href;
  const urlArray = url.split('/');
  const studentId = urlArray[urlArray.length-1];
  console.log(studentId);
  const [student, setStudent] = useState("");

  useEffect(() => {
    axios.get(`/api/students/${studentId}`)
    .then((response) => {
      console.log('View Student get route worked');
      setStudent(response.data);
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
}, []);

//   ({
//   _id,
//   username,
//   firstName,
//   lastName,
//   starTotal,
//   imageUrl,
//   classCode,
//   tasksCompleted,
//   getStudents,
// }) => {
  const deleteStudent = (id) => {
    axios
      .delete(`/api/students/${id}`)
      .then((result) => {
        // res.json(result);
        // getStudents();
        // redirect to class list page
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar/>
      <h1>View Student</h1>

      <div className="row">
        <div className="col s3">
          <h1>{student.firstName} {student.lastName}</h1>
          <hr></hr>
          <h3 className="display-name">{student.username}</h3>
          <h1>
          <FontAwesomeIcon icon={faStar} />{student.starTotal}
          </h1>
          <button
            className="waves-effect waves-light btn"
            id="delete-student-btn"
            onClick={() => {
              deleteStudent(studentId); //might be easier to just reference the studentId variable?
            }}
          >
            Delete
          </button>
        </div>

        <div className="col s9">
          <FormComponent>
            <div class="row">
              <div className="col s6">
                <ul>
                  <li className="star-categories">ASKING A TOUGH QUESTION</li>
                  <li className="star-categories">Zoom Camera on All Class</li>
                  <li className="star-categories">
                    Submitting Homework on Time
                  </li>
                  <li className="star-categories">Extra Credit</li>
                  <li className="star-categories">Listening in Class</li>
                </ul>
              </div>

              <div className="col s6">
                <h4 className="add-star-header">Add Star</h4>
                <label>Select Category</label>
                <select class="browser-default">
                  <option value="" disabled selected>
                    Choose your Category
                  </option>
                  <option value="1">ASKING A TOUGH QUESTION</option>
                  <option value="2">Zoom Camera on All Class</option>
                  <option value="3">Submitting Homework on Time</option>
                  <option value="4">Extra Credit</option>
                  <option value="5">Listening in Class</option>
                </select>
                <button class="waves-effect waves-light btn" id="add-star-btn">
                  Add Star
                </button>
              </div>
            </div>
          </FormComponent>
        </div>
      </div>
    </div>
  );
};

export default ViewStudentPage;
