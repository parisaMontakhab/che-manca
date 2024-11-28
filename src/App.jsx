import React from "react";
import { BrowserRouter as Router, Route, NavLink,Routes, BrowserRouter } from 'react-router-dom'

import "./styles/App.css";
import HomePage from "./pages/HomePage";
import AdsPage from "./pages/AdsPage";


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Ads" element={<AdsPage/>}/>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
