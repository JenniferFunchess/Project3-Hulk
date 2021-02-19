import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import FormComponent from "../../components/Form/form";
import "./viewStudent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";

const ViewStudentPage = () => {
  const url = window.location.href;
  const urlArray = url.split("/");
  const studentId = urlArray[urlArray.length - 1];
  // console.log(teacherId);
  const [student, setStudent] = useState({
    username: "",
    firstName: "",
    lastName: "",
    tasksCompleted: [],
  });
  const history = useHistory();
  const deleteStudent = (studentId) => {
    console.log(studentId);
    axios
      .delete(`/api/students/${studentId}`)
      .then(() => {
        history.push("/classlist");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getStudent = useCallback(() => {
    axios
      .get(`/api/students/${studentId}`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [studentId]);
  useEffect(() => {
    getStudent();
  }, [getStudent]);
  const addStar = (index) => {
    const newStudent = {};

    const tempArray = [...student.tasksCompleted];
    tempArray[index] = tempArray[index] + 1;

    newStudent.username = student.username;
    newStudent.firstName = student.firstName;
    newStudent.lastName = student.lastName;
    newStudent.starTotal = student.starTotal + 1;
    newStudent.imageUrl = student.imageUrl;
    newStudent.classCode = student.classCode;
    newStudent.tasksCompleted = tempArray;
    axios
      .put(`/api/students/${studentId}`, newStudent)
      .then(() => {
        getStudent();
      })
      .catch((err) => {
        console.log(err);
      });
    // axios
    //   .put(`/api/students/${id}/stars`, tempArray)
    //   .then(() => {
    //     getStudent();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <>
      <Navbar teacher={true} login={false} classCode={student.classCode} />
      <div>
        <h1>View Student</h1>
        <div className="row">
          <div className="col s12 m3">
            <h3 className="display-name redColor">
              {student.firstName} {student.lastName}
            </h3>
            <hr></hr>

            <h3 className="redColor">{student.username}</h3>
            <div className="col s12 center-align">
              <FontAwesomeIcon icon={faStar} className="reward-star" />
              <span className="rewards-length">
                {student.tasksCompleted.reduce(
                  (total, index) => total + index,
                  0
                )}
              </span>
            </div>
          </div>
          <div className="col s12 m9">
            <FormComponent>
              <div className="row">
                <div className="col s12">
                  <h4 className="form-header">
                    <FontAwesomeIcon icon={faStar} /> Add Stars for Student
                    <FontAwesomeIcon icon={faStar} />
                  </h4>
                  <ul>
                    <li className="star-categories descriptionText">
                      ASKING A TOUGH QUESTION{" "}
                      <button
                        className="waves-effect red darken-1 btn"
                        id="add-star-btn"
                        onClick={() => addStar(0)}
                      >
                        Add Star
                      </button>
                    </li>
                    <li className="star-categories descriptionText">
                      Zoom Camera on All Class
                      <button
                        className="waves-effect red darken-1 btn"
                        id="add-star-btn"
                        onClick={() => addStar(1)}
                      >
                        Add Star
                      </button>
                    </li>
                    <li className="star-categories descriptionText">
                      Submitting Homework on Time
                      <button
                        className="waves-effect red darken-1 btn"
                        id="add-star-btn"
                        onClick={() => addStar(2)}
                      >
                        Add Star
                      </button>
                    </li>
                    <li className="star-categories descriptionText">
                      Extra Credit
                      <button
                        className="waves-effect red darken-1 btn"
                        id="add-star-btn"
                        onClick={() => addStar(3)}
                      >
                        Add Star
                      </button>
                    </li>
                    <li className="star-categories descriptionText">
                      Listening in Class
                      <button
                        className="waves-effect red darken-1 btn"
                        id="add-star-btn"
                        onClick={() => addStar(4)}
                      >
                        Add Star
                      </button>
                    </li>
                  </ul>
                </div>
                {/* <div className="col s6">
                  <h4 className="add-star-header">Add Star</h4>
                  <label>Select Category</label>
                  <select class="browser-default" onChange={setCategory}>
                    <option value="" disabled selected>
                      Choose your Category
                    </option>
                    <option value={0}>ASKING A TOUGH QUESTION</option>
                    <option value={1}>Zoom Camera on All Class</option>
                    <option value={2}>Submitting Homework on Time</option>
                    <option value={3}>Extra Credit</option>
                    <option value={4}>Listening in Class</option>
                  </select>
                  <button
                    class="waves-effect waves-light btn"
                    id="add-star-btn"
                    onClick={() => addStar(category)}
                  >
                    Add Star
                  </button>
                </div> */}
              </div>
            </FormComponent>
          </div>
        </div>
        <button
          className="waves-effect red darken-1 btn"
          id="delete-student-btn"
          onClick={() => {
            deleteStudent(student._id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default ViewStudentPage;
