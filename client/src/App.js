import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./containers/Home/home";
// import Navbar from "../src/components/Navbar/Navbar";
import TeacherLogin from "./containers/Login/TeacherLogin/teacherlogin";
import StudentLogin from "./containers/Login/StudentLogin/studentlogin";
import AddStudent from "./containers/Add-Student/add-student";
import ViewStudent from "./containers/ViewStudent/viewStudent";
import Rewards from "./containers/Rewards/rewards";
import ViewList from "./containers/Class-List/class-list";
import TeacherHome from "./containers/Teacher-Home/teacher-home";
import StudentHome from "./containers/StudentHome/StudentHome";
import React, { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Signup from "./containers/Signup/signup";

function App() {
  const [token, setToken] = useState("");

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={home}
            // token={token}
            // setToken={setToken}
          />
          <Route
            exact
            path="/signup"
            component={(props) => <Signup {...props} setToken={setToken} />}
          />
          <Route
            exact
            path="/teacherlogin"
            component={(props) => (
              <TeacherLogin {...props} setToken={setToken} />
            )}
          />
          <Route exact path="/studentlogin" component={StudentLogin} />
          <Route path="/teacherhome" component={TeacherHome} token={token} />
          <Route path="/classlist" component={ViewList} />
          <Route path="/student-home" component={StudentHome} />
          <Route path="/add-student" component={AddStudent} />
          <Route path="/view-student/" component={ViewStudent} />
          <Route path="/rewards" component={Rewards} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
