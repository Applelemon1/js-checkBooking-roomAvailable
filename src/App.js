import React from "react";
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Page404 from './components/404';
import About from './components/About';


function App() {

  return (
   <div>
      <Routes>
        <Route path='/bookings/:roomId' element={<Home/>}  />    
        <Route path="about" element={<About />} />
        <Route path="*" element={<Page404 />} />       
      </Routes>
    
      </div>
    
  );
}

export default App;
