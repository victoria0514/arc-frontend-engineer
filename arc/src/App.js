import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AcademicsPage } from "./Academics/AcademicsPage";
import { HomePage } from "./Home/HomePage";
import React from "react";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Academics" element={<AcademicsPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
