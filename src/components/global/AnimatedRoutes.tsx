import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";
import HomePage from "../../pages/Home";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location} >
        <Route path='/' element={<HomePage key='home'/>}/>
        <Route path='/home' element={<HomePage/>} />
        <Route path='/skills' element={<Skills />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;