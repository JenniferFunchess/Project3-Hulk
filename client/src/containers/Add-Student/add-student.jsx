import React, { useState, useEffect } from "react";
import axios from "axios";
import FormComponent from "../../components/Form/form";
import "./add-student.css";
import Navbar from "../../components/Navbar/Navbar";

const AddStudent = () => {
  const url = window.location.href;
  const urlArray = url.split("/");
  const teacherId = urlArray[urlArray.length - 1];
  console.log(teacherId);
  const history = useHistory();
  const [teacher, setTeacher] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setusername] = useState("");
  // const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/signup/${teacherId}`)
      .then((response) => {
        console.log("Teacher get route worked");
        setTeacher(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const classCode = teacher.classCode;

  const handleFormSubmit = (e, students) => {
    console.log("Success");
    e.preventDefault();
    axios
      .post("/api/students", students)
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
      <Navbar teacher={true} classCode={teacher.classCode} login={false} />
      <div>
        <div className="row">
          <h1>Add a Student</h1>
        </div>
        <div className="container">
          <FormComponent>
          <div className="row">
            <form
              className="col s12"
              id="white-form"
              onSubmit={(e) => {
                handleFormSubmit(e, {
                  firstName,
                  lastName,
                  username,
                  classCode,
                });
              }}
            >
              <div className="row">
                <div classNames="input-field col s12">
                  <input
                  placeholder="First Name"
                    id="firstName"
                    type="text"
                    className="validate"
                    value={firstName}
                    onChange={(e) => {
                      setfirstName(e.target.value);
                    }}
                  />
                  <label htmlFor="firstName"></label>
                </div>
                <div className="input-field col s12">
                  <input
                  placeholder="Last Name"
                    id="lastName"
                    type="text"
                    className="validate"
                    value={lastName}
                    onChange={(e) => {
                      setlastName(e.target.value);
                    }}
                  />
                  <label htmlFor="lastName"></label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    placeholder="Username"
                    id="username"
                    type="text"
                    className="validate"
                    value={username}
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
                  />
                  <label htmlFor="username"></label>
                  <div className="helper-text">
                    {/* (Student will login with this) */}
                  </div>
                </div>
              </div>
              <a
                type="submit"
                href="/teacherhome"
                className="btn halfway-fab waves-effect waves-light red"
                // style={styles.button}
              >
                Home
                <i className="material-icons">home</i>
              </a>
              <button
                type="submit"
                href= "/classlist" // FIX FOR LATER
                className="btn halfway-fab waves-effect waves-light red"
                // style={styles.button}
              >
                Submit
                <i className="material-icons">check</i>
              </button>
            </form>
          </div>
          </FormComponent>
        </div>
      </div>
    </>
  );
};

// const styles = {
//   button: {
//     background:
//       "url(https://lh3.googleusercontent.com/O_O0RDSM62-zVSWViayDPWPQFhHom3N648OVvhuzvYycvETeWPKr-Uo4c7_ChM7z5a2zEyzv8rZnfALXKpxNOi335gm-bvdhCYrBm5_lDaxgX6fTzs4GdYmUW-Y_kuv0JAz-TH8NSrks9_6b3KWEt6myl2T7ZN8E--E4LQHynXC7T502X99R9MvP-o4UciAT6XHIV49BZJVyddObTLWCcgFN8NG7J41dWYatJripuVC1fPZOFjYyv6eUKTosIwfvqWWE28pE2idpghPjxvyuLilLGnwz6BXkQ7JDmoMUQ4YqSYQ7ELVFPyG8jJFbgKbSb93W1HEJ91Uj02wIwCBc0nv0Zc_asmKFRj9cp_ztS0YvEFWLj_28ECvlXOt965Rg45Lan6wckmKiGesyDxON8L_dVe7XCEQ_DnynsrjpQNDdiycCwXAXwyLmSuEjADVrGk-8POjQ61fwqjAIBBqovzpxklPh2R-YQJk150bFk4HXPOA-Tp2KUnxIZLpFaJJbyeVi1AGD5HkuS7cen2yh0djFwGa4XfE6PlALPsTMUaR9iG9yqGlLONNBUmCMMkmvlbngVh14Q6EusdRUXIaurMwJadCOfATpWAoyRNM8u3WGnB3kw_o7_b69QNZKcm25Bj3ChFe239jmY8zrw-7VVtztIY27oECXCEpjNQ9qFdORfutctjmuZi350Ebb=w162-h59-no?authuser=0)",
//   },
// };

export default AddStudent;
