import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";
// import Modal from "../../components/Modal/modal";

function StudentHome(props) {
  // const initialMap = new Map();
  const [student, setStudent] = useState("");
  const [rewards, setRewards] = useState([]);
  //   const [map, setMap] = useState();
  const [teacher, setTeacher] = useState("");

  const url = window.location.href;
  // console.log(url);
  const urlArray = url.split("/");
  const studentId = urlArray[urlArray.length - 1];
  // console.log(studentId);

  useEffect(() => {
    axios
      .get(`/api/students/${studentId}`)
      .then((response) => {
        // console.log("student worked");
        // console.log(response.data);
        setStudent(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/api/rewards")
      .then((response) => {
        console.log(response.data);
        setRewards(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(student.classCode);
    axios
      .get(`/api/signup/teacher/${student.classCode}`) //add get route for teacher w/classcode
      .then((response) => {
        // console.log("student worked");
        console.log("Teacher info:");
        console.log(response.data);
        setTeacher(response.data[0]);
        // console.log(teacher);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleButtonClick = (rewardStarCount, reward) => {
    const newStudent = student;
    const newStarTotal = newStudent.starTotal - rewardStarCount;
    if (newStarTotal < 0) {
      alert("You don't have enough stars");
      return;
    }
    newStudent.starTotal = newStarTotal;
    console.log(newStarTotal);
    axios
      .put(`/api/students/${newStudent._id}`, newStudent)
      .then((response) => {
        console.log(response.data);
        setStudent(response.data); //make sure it updates star count
      })
      .catch((err) => {
        console.log(err);
      });

    const mailOptions = {
      from: "ontrackteacher@gmail.com",
      to: "ontrackteacher@gmail.com",
      subject:
        student.firstName + " " + student.lastName + " is Requesting a Reward through On-Track-App",
      text: "Please talk to " + student.firstName + " " + student.lastName + " to give them their reward!",
    };
    axios.post(`/api/sendEmail`, mailOptions).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <Navbar teacher={false} login={false} classCode={student.classCode} />
      {/* <div className="container"> */}
      <div className="row">
        <div className="col s12">
          <h1 className="redColor centered">Student Home</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m3">
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
        <div className="col m8 blueBox">
          <div className="col s12 m6">
            <div className="col s12">
              <FontAwesomeIcon icon={faStar} className="reward-star" />
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
                  {/* {map.get(reward._id) &&  */}
                  <button
                    onClick={() => handleButtonClick(reward.starCount)}
                    key={reward._id}
                    rewardStarCount={reward.starCount}
                    reward={reward}
                    studentObj={student}
                    className="waves-effect red darken-1 btn"
                  >
                    REDEEM
                  </button>
                  {/* } */}
                </h5>
              </div>
            ))}
          </div>
          <div className="col s12 m6">
            {/* <div className="row"> */}
            {/* <div className="col s12">
              <button className="waves-effect waves-light btn uploadButton">
                Upload Image
              </button>
            </div> */}
            {/* </div> */}
            {/* <div className="row"> */}
            <div className="col s12">
              <h5 className="my-stars">My Stars!!!</h5>
            </div>
            {/* </div> */}
            <div className="col s12 greenColor">
              <span className="descriptionText">Asking a Tough Question </span>
              <FontAwesomeIcon icon={faStar} className="my-stars" />
              <span className="my-stars"></span>
            </div>
            <div className="col s12 greenColor">
              <span className="descriptionText">Zoom Camera on All Class </span>
              <FontAwesomeIcon icon={faStar} className="my-stars" />
              <span className="my-stars"></span>
            </div>
            <div className="col s12 greenColor">
              <span className="descriptionText">
                Submitting Homework on Time
              </span>
              <FontAwesomeIcon icon={faStar} className="my-stars" />
              <span className="my-stars"></span>
            </div>
            <div className="col s12 greenColor">
              <span className="descriptionText">Extra Credit </span>
              <FontAwesomeIcon icon={faStar} className="my-stars" />
              <span className="my-stars"></span>
            </div>
            <div className="col s12 greenColor">
              <span className="descriptionText">Listening in Class </span>
              <FontAwesomeIcon icon={faStar} className="my-stars" />
              <span className="my-stars"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHome;
