import React, { useState } from "react";
import "./studentloginstyle.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";

const StudentLogin = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [classcode, setClassCode] = useState("");
  const history = useHistory();

  const handleFormSubmit = (e) => {
    console.log("Success");
    e.preventDefault();
    axios
      .post("/api/auth/studentlogin", {
        username: username,
        classcode: classcode,
      })
      .then((response) => {
        console.log(response.data);
        jwt.verify(
          response.data.token,
          process.env.REACT_APP_JWT_SIGNATURE,
          (err, decoded) => {
            if (err) {
              console.log(err);
            } else {
              setToken(response.data.token);
              history.push("/");
            }
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });

    return (
      <>
        <div className="row">
          <div className="col m12" id="teacherlogin">
            <h1>Student Login</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s10 offset-s1" id="container">
              <div className="row">
                <form
                  className="col s12"
                  onSubmit={(e) => {
                    handleFormSubmit(e, {
                      username,
                      classcode,
                    });
                  }}
                >
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        placeholder="Enter Username"
                        id="username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                      <label htmlFor="username">Enter Username</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        placeholder="Enter Classcode"
                        id="classcode"
                        type="text"
                        name="classcode"
                        value={classcode}
                        onChange={(e) => {
                          setClassCode(e.target.value);
                        }}
                      />
                      <label htmlFor="classcode">Enter Classcode</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <button className="waves-effect red darken-1 btn">
                        LOGIN
                      </button>
                    </div>
                  </div>
                </form>
                <div id="forgotpassword">Forgot Classcode?</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
};

export default StudentLogin;
