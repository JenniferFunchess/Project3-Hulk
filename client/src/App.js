import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar login={false}/>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
