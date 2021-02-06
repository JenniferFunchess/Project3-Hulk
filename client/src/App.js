import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/home";
import signup from "./containers/Signup/signup";
import Modal from "./components/modal/modal";
import Navbar from "../src/components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar login={false} />
      <Modal />
        <Switch> 
         <Route exact path="/" component={Home} />
         <Route exact path="/signup" component={signup} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
