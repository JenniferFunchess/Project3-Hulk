import React from "react";
import Card from "../../components/Card/card";
import Navbar from "../../components/Navbar/Navbar";

const ViewClass = () => {
  return (
    <div>
      <Navbar />
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
