import React from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ProfileSelection from './Pages/ProfileSelection';
import StudentsSignUp from './Pages/Student/StudentsSignUp';
import Otp from './Pages/Student/otp';
import CreatePass from './Pages/Student/CreatePass';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ProfileSelection" element={<ProfileSelection/>}/>
        <Route path="/StudentsSignUp" element={<StudentsSignUp/>}/>
        <Route path="/Otp" element={<Otp/>}/>
        <Route path="/CreatePass" element={<CreatePass/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
