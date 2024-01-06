import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import {  Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;