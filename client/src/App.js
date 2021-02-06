import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./containers/Home/home";
import signup from "./containers/Signup/signup";
import Navbar from "../src/components/Navbar/Navbar";
import TeacherLogin from "./containers/Login/TeacherLogin/teacherlogin";
import StudentLogin from "./containers/Login/StudentLogin/studentlogin";
import AddStudent from "./containers/Add-Student/add-student";
import ViewStudent from "./containers/ViewStudent/viewStudent";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar login={false} />
        <Switch> 
         <Route exact path="/" component={home} />
         <Route exact path="/signup" component={signup} />
         <Route exact path="/teacherlogin" component={TeacherLogin} />
         <Route exact path="/studentlogin" component={StudentLogin} />
          <Route path="/add-student" component={AddStudent} />
          <Route path="/view-student" component={ViewStudent}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
