import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../../components/Navbar/Navbar';
import Modal from "../../components/modal/modal";


function StudentHome(props) {
  const [student, setStudent] = useState("");
  const [rewards, setRewards] = useState([]);


  const url = window.location.href;
  console.log(url);
  const urlArray = url.split("/");
  const studentId = urlArray[urlArray.length - 1];
  console.log(studentId);


  useEffect(() => {
    axios
      .get(`/api/students/${studentId}`) 
      .then((response) => {
        console.log("student worked");
        console.log(response.data);
        setStudent(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    

    axios
      .get("/api/rewards")
      .then((response) => {
        setRewards(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const redeemable = (studentObj, rewardObj) => {
    const newStudent = {};
    newStudent.username = studentObj.username;
    newStudent.firstName = studentObj.firstName;
    newStudent.lastName = studentObj.lastName;
    newStudent.starTotal = studentObj.starTotal - rewardObj.starCount;
    newStudent.imageUrl = studentObj.imageUrl;
    newStudent.classCode = studentObj.classCode;
    newStudent.tasksCompleted = studentObj.tasksCompleted;
    
    // setStudent(newStudent);
    return studentObj.starTotal - rewardObj.starCount >= 0 ? true: false;
  }

  return (
    <div>
      {/* <Navbar teacher={false} login={false} classCode={student.classCode}/> */}
      {/* <div className="container"> */}
      <div className="row">
        <div className="col s12">
          <h1 className="redColor centered">Student Home</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s3">
          <div className="row">
            <div className="col s12 second-row">
              <h3 className="redColor second-row">
                {student.firstName} {student.lastName}
              </h3>{" "}
              {/*insert prop for student id in the h3 tag*/}
              <hr></hr>
            </div>
          </div>
          <div className="row">
            <div className="col s12 second-row">
              <h5 className="redColor second-row">{student.username}</h5>{" "}
              {/*insert prop for student id in the h5 tag*/}
            </div>
          </div>
        </div>
        <div className="col m7 blueBox">
          <div className="col s6">
            {/* <div className="row"> */}
            <div className="col s12">
              <button className="waves-effect waves-light btn uploadButton">
                Upload Image
              </button>
            </div>
            {/* </div> */}
            {/* <div className="row"> */}
            <div className="col s12">
              <h5>My Stars!!!</h5>
            </div>
            {/* </div> */}
            <div className="col s12 greenColor">
              <span className="descriptionText">ASKING A TOUGH QUESTION</span>
              <FontAwesomeIcon icon={faStar} />
              <span>2</span>
            </div>
            <div className="col s12 greenColor">
              <span className="descriptionText">Zoom Camera on All Class</span>
              <FontAwesomeIcon icon={faStar} />
              <span>2</span>
            </div>
            <div className="col s12 greenColor">
              <span className="descriptionText">
                Submitting Homework on Time
              </span>
              <FontAwesomeIcon icon={faStar} />
              <span>1</span>
            </div>
            <div className="col s12 greenColor">
              <span className="descriptionText">Extra Credit</span>
              <FontAwesomeIcon icon={faStar} />
              <span>3</span>
            </div>
            <div className="col s12 greenColor">
              <span className="descriptionText">Listening in Class</span>
              <FontAwesomeIcon icon={faStar} />
              <span>3</span>
            </div>
          </div>
          <div className="col s6">
            <div className="col s12">
              <FontAwesomeIcon icon={faStar} />
              <span className="rewards-length">{student.starTotal}</span>
            </div>
            <div className="col s12">
              <h5>Use Stars!!!</h5>
              <hr></hr>
            </div>
            {rewards.map((reward) => (
              <div className="col s12">
                <h5>
                  <FontAwesomeIcon icon={faStar} />
                  {reward.rewardCategory} ({reward.starCount} Stars)
                  <Modal redeemValue={redeemable(student, reward)} reward={reward} student={student}></Modal>
                  {/* redeemable(student, reward) */}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>     
  );
}

export default StudentHome;
