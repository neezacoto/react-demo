import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Other from './components/Other';
import Nav from './components/Nav';
import BlueOrRed from './components/BlueOrRed';
import { useState } from 'react';

function App() {
  const [blueOrRed, setBlueOrRed] = useState("black");
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home colorToUse={ blueOrRed } />}/>
          <Route path="/other" element={<Other />}/>
        </Routes>
        <BlueOrRed toggleColor={setBlueOrRed}/>
      </Router>

  );
}

export default App;
