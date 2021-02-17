import axios from "axios";
import React, { useEffect, useState } from "react";
// import Star from "../../components/Star/star";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Navbar from '../../components/Navbar/Navbar';

import Modal from "../../components/Modal/Modal";


function StudentHome(props) {
  const [student, setStudent] = useState("");
  const [rewards, setRewards] = useState([]);
  // const [tasks, setTasks] = useState([]);
  // const [canRedeem, setCanRedeem] = useState([]);

  const url = window.location.href;
  console.log(url);
  const urlArray = url.split("/");
  const studentId = urlArray[urlArray.length - 1];
  console.log(studentId);

  // const [students, setStudents] = useState("");
  // const [rewards, setRewards] = useState([]);
  // const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/students/${studentId}`) // add /${props.studentId}? 602733e29197bd23a47b8872
      .then((response) => {
        console.log("student worked");
        console.log(response.data);
        setStudent(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //might be wrong, but running a for loop through the tasks id array
    //to run a get route for each task
    //hoping the "...response.data" appends to the tasks useState array
    // for (let i = 0; i < student.tasks.length; i++) {
    //     axios.get(`/api/tasks/${student.tasks[i]}`)
    //     .then((response) => {
    //         setTasks(...response.data);
    //     })
    // }

    axios
      .get("/api/rewards")
      .then((response) => {
        setRewards(response.data);
        setBooleanArray(student, response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const setBooleanArray = (studentStarTotal, rewardObj) => {
    // const booleanArray = [];
    // for (let i = 0; i < rewardArray.length; i++) {
    //   if (rewardArray[i] - studentStarTotal >= 0) {
    //     booleanArray.push(true);
    //   } else {
    //     booleanArray.push(false);
    //   }
    // }
    return studentStarTotal - rewardObj.starCount >= 0 ? true: false

    // setCanRedeem(booleanArray);
  }

  return (
    <div>
      <Navbar teacher={false} login={false} classCode={student.classCode}/>
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
                  <Modal redeemValue={setBooleanArray(student.starTotal, reward.starCount)} reward={reward} student={student}></Modal>
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
