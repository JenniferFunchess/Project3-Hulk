import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./containers/Home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
         <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
