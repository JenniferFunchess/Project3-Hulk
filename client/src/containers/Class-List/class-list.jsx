import React, { useState, useEffect } from "react";
import Card from "../../components/Card/card";
import Navbar from "../../components/Navbar/Navbar";
import axios from 'axios';

const ViewClass = () => {

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
}, [teacherId]);

  return (
    <div>
      <Navbar teacher={true} classCode={teacher.classCode} login={false}/>
      <div className="container">
        <div className="row">
          <h1>Class List</h1>
        </div>
        <div className="row">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ViewClass;
