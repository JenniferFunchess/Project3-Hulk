import React, { useState } from "react";
import "./signupstyle.css";
import axios from "axios";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [teacherNickname, setTeacherNickname] = useState("");

  const handleFormSubmit = (e, newTeacher) => {
    console.log("Success");
    e.preventDefault();
    axios
      .post("/api/signup", newTeacher)
      .then((response) => {
        console.log(response.data);
        // history.push("/rewards");
      })
      .catch((err) => {
        console.log(err);
        // alert.setAlert({
        //   message: "Failed to create new category.",
        //   type: "danger",
        // });
      });
  };

  return (
    <>
      <div className="row">
        <div className="col m12" id="teachersignup">
          <h1>Teacher Signup</h1>
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
                    firstName,
                    lastName,
                    email,
                    password,
                    teacherNickname,
                  });
                }}
              >
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      placeholder="First Name"
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                    <label htmlFor="firstName">First Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input
                      placeholder="Last Name"
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter Email"
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <label htmlFor="email">Enter Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter Password"
                      id="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label htmlFor="password">Enter Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Name Students Call You"
                      id="teacherNickname"
                      type="text"
                      name="teacherNickname"
                      value={teacherNickname}
                      onChange={(e) => {
                        setTeacherNickname(e.target.value);
                      }}
                    />
                    <label htmlFor="teacherNickname">Teacher Nickname</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <button className="waves-effect red darken-1 btn">
                      SIGN UP
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
