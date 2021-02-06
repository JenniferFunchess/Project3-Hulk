import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./containers/Home/home";
import signup from "./containers/Signup/signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
         <Route exact path="/" component={Home} />
         <Route exact path="/signup" component={signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
