import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./containers/Home/home";
import signup from "./containers/Signup/signup";
import Navbar from "../src/components/Navbar/Navbar";
import TeacherLogin from "./containers/Login/TeacherLogin/teacherlogin";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar login={false} />
        <Switch> 
         <Route exact path="/" component={home} />
         <Route exact path="/signup" component={signup} />
         <Route exact path="/teacherlogin" component={TeacherLogin} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
