import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Modal from "./components/modal/modal";
import AddStudent from "./containers/Add-Student/add-student";
import ViewStudent from "./containers/ViewStudent/viewStudent";

function App() {
  return (
    <div>
      <Navbar login={false} />
      <Router>
        <Switch>
          <Route path="/add-student" component={AddStudent} />
          <Route path="/view-student" component={ViewStudent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
