import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Qualification from './Pages/Qualification';
import Skills from './Pages/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="Home" element={<Home/>}/>
      <Route path="Qualification" element={<Qualification/>}/>
      <Route path="Skills" element={<Skills/>}/>
      </Routes>
    </div>
  );
}

export default App;
