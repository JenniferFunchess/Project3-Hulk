import React from "react";
import Card from "../../components/Card/card";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const ViewClass = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <h1>Class List</h1>
          <Link
            to={`/teacherhome`}
            className="btn halfway-fab waves-effect waves-light red"
          >Home
            <i className="material-icons">home</i>
          </Link>
          <Link
            to={`/add-student`}
            className="btn halfway-fab waves-effect waves-light red"
          >Add Student
            <i className="material-icons">group_add</i>
          </Link>
        </div>
        <div className="row">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ViewClass;
