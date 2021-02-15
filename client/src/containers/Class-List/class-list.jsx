import React from "react";
import Card from "../../components/Card/card";

const ViewClass = () => {
  return (
    <div>
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
