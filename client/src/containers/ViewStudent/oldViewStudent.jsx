import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import FormComponent from "../../components/Form/form";
import "./viewStudent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../../components/Navbar/Navbar';

const ViewStudentPage = ({
  studentid,
  username,
  firstName,
  lastName,
  starTotal,
  tasksCompleted,
  getStudents,
}) => {
  const { id } = useParams();
  const history = useHistory();
  console.log(id);
  const deleteStudent = (studentid) => {
    axios
      .delete(`/api/students/${studentid}`)
      .then(() => {
        history.push("/classlist");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const url = window.location.href;
  console.log(url);
  const urlArray = url.split("/");
  const studentId = urlArray[urlArray.length - 1];
  console.log(studentId);

  const [student, setStudent] = useState({});
  const [starsArray, setStarsArray] = useState([0,0,0,0,0]);

  const getStudent = () => {
    axios
      .get(`/api/students/${id}`) // add /${props.studentId}?
      .then((response) => {
        console.log("student worked");
        console.log(response.data);
        setStudent(response.data);
        // setStarsArray(response.data.tasksCompleted);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getStars = () => {
    axios
      .get(`/api/students/${id}`) // add /${props.studentId}?
      .then((response) => {
        console.log("student worked");
        console.log(response.data);
        // setStudent(response.data);
        setStarsArray(response.data.tasksCompleted);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
   getStudent();
   getStars();
  }, []);

  const addStar = (index) => {
    console.log(index);
    const tempArray = [...starsArray]
    tempArray[index] = starsArray[index]+1;
    setStarsArray([...tempArray]);

    axios
      .put(`/api/students/${id}/stars`, starsArray)
      .then((response) => {
        console.log(response.data);
        getStudent();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <Navbar teacher={true} login={false} classCode={studentId.classCode}/>
      <div>
        <h1>View Student</h1>
        <div className="row">
          <div className="col s3">
            <h1>{student.username}</h1>
            <hr></hr>
            <h3 className="display-name">
              {student.firstName} {student.lastName}
            </h3>
            <div className="col s12">
              <FontAwesomeIcon icon={faStar} />
              <span>{starsArray.reduce((total, index) => total+index, 0)}</span>
            </div>
            <button
              className="waves-effect waves-light btn"
              id="delete-student-btn"
              onClick={() => {
                history.push("/classlist");
                deleteStudent(student._id);
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
                    <li className="star-categories">
                      ASKING A TOUGH QUESTION{" "}
                      <button
                        class="waves-effect waves-light btn"
                        id="add-star-btn"
                        onClick={() => addStar(0)}
                      >
                        Add Star
                      </button>
                    </li>
                    <li className="star-categories">
                      Zoom Camera on All Class
                      <button
                        class="waves-effect waves-light btn"
                        id="add-star-btn"
                        onClick={() => addStar(1)}
                      >
                        Add Star
                      </button>
                    </li>
                    <li className="star-categories">
                      Submitting Homework on Time
                      <button
                        class="waves-effect waves-light btn"
                        id="add-star-btn"
                        onClick={() => addStar(2)}
                      >
                        Add Star
                      </button>
                    </li>
                    <li className="star-categories">
                      Extra Credit
                      <button
                        class="waves-effect waves-light btn"
                        id="add-star-btn"
                        onClick={() => addStar(3)}
                      >
                        Add Star
                      </button>
                    </li>
                    <li className="star-categories">
                      Listening in Class
                      <button
                        class="waves-effect waves-light btn"
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
      </div>
    </>
  );
};

export default ViewStudentPage;
