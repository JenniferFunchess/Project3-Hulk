import React, { useState } from "react";
import "./style.css";

const TeacherLogin = ({ handleFormSubmit }) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
        <div className="container">
            <div className = "row">
            <div className="col s10 offset-s1"id ="container">
            <div className="row">
            <form
                className="col s12"
                onSubmit={(e) => {
                 handleFormSubmit(e, {
                 email,
                 password,
                });
             }}
            >
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
      </form>
      <div className="row">
          <div className="col s12">
            <button className="waves-effect red darken-1 btn">
              LOGIN
            </button>
          </div>
        </div>
            </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default TeacherLogin;