import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Modal from "./components/modal/modal";

function App() {
  return (
    <div>
        <Navbar login={false} />
        <h1>Hello world</h1>
        <Modal />
    </div>
  );
}

export default App;
