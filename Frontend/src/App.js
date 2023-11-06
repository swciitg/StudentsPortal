import React from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ProfileSelection from './Pages/ProfileSelection';
import StudentsSignUp from './Pages/Student/StudentsSignUp';
import Otp from './Pages/Student/otp';
import CreatePass from './Pages/Student/CreatePass';
import AdminSignUp from './Pages/Admin/AdminSignUp';
import Home from './Pages/Student/StudentDashboard/Home';
import Profile from './Pages/Student/StudentDashboard/Profile';
import History from './Pages/Student/StudentDashboard/History';
import Request from './Pages/Student/StudentDashboard/Request';
import RequestsForward from './Pages/Student/StudentDashboard/RequestsForward';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ProfileSelection" element={<ProfileSelection/>}/>
        <Route path="/StudentsSignUp" element={<StudentsSignUp/>}/>
        <Route path="/Otp" element={<Otp/>}/>
        <Route path="/CreatePass" element={<CreatePass/>}/>
        <Route path="/AdminSignUp" element={<AdminSignUp/>}/>
        <Route path="/StudentDashboard/Home" element={<Home/>}/>
        <Route path="/StudentDashboard/Profile" element={<Profile/>}/>
        <Route path="/StudentDashboard/History" element={<History/>}/>
        <Route path="/StudentDashboard/Request" element={<Request/>}/>
        <Route path="/StudentDashboard/RequestsForward" element={<RequestsForward/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
