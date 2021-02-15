import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import FormComponent from "../../components/Form/form";
import "./viewStudent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ViewStudentPage = ({
  _id,
  username,
  firstName,
  lastName,
  starTotal,
  imageUrl,
  classCode,
  tasksCompleted,
  getStudents,
}) => {
  const deleteStudent = () => {
    axios
      .delete(`/api/students/${studentId}`)
      .then(() => {
        getStudents();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const url = window.location.href;
    console.log(url);
    const urlArray = url.split('/');
    const studentId = urlArray[urlArray.length-1];
    console.log(studentId);
  const [student, setStudent] = useState("");
  const [tasks, setTasks] = useState([]);
  const history = useHistory();

  useEffect((props) => {
    axios.get(`/api/students/${props.studentid}`) // add /${props.studentId}?
    .then((response) => {
        console.log('student worked');
        console.log(response.data);
        setStudent(response.data);
    })
    .catch((err) => {
        console.log(err);
    });

    axios.get('/api/students')
    .then((response) => {
        setTasks(response.data);
    })
    .catch((err) => {
        console.log(err);
    });

    }, []);

  return (
    <div>
      <h1>View Student</h1>

      <div className="row">
        <div className="col s3">
          <h1>Student Name</h1>
          <hr></hr>
          <h3 className="display-name">{props.student.firstName} {props.student.lastName}</h3>
          {task.map(( task => (
             <div className="col s12">
             <h5><FontAwesomeIcon icon={faStar} />{task.name} ({task.star} Stars)</h5>
             </div>
             )))}
          <button
            className="waves-effect waves-light btn"
            id="delete-student-btn"
            onClick={() => {
              history.push("/classlist");
              deleteStudent(_id);
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
