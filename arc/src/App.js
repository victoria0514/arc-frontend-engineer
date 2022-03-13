import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AcademicsPage } from "./Academics/AcademicsPage";
import { HomePage } from "./Home/HomePage";
import { ResumePage } from "./Resume/ResumePage";
import { LinkedIn } from "./LinkedIn/LinkedInPage";
import { GitHub } from "./GitHub/GitHubPage";
import { Internship } from "./Internship/InternshipPage";
import { Jobs } from "./Jobs/JobsPage";

import React from "react";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* Routing all pages together */}
      {/* not sure whats better, this or navbar. would like someone to test
      and tell me what is better and what we should fix */}
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Academics" element={<AcademicsPage/>}></Route>
          <Route path="/Resume" element={<ResumePage/>}></Route>
          <Route path="/LinkedIn" element={<LinkedInPage/>}></Route>
          <Route path="/GitHub" element={<GitHubPage/>}></Route>
          <Route path="/Internship" element={<InternshipPage/>}></Route>
          <Route path="/Jobs" element={<JobsPage/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
