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
import SelectValidation from './Pages/Student/StudentDashboard/RequestPages/SelectValidation';
import CreateRequestStep1 from './Pages/Student/StudentDashboard/RequestPages/ClubPOR/CreateRequestStep1';
import CreateRequestStep2 from './Pages/Student/StudentDashboard/RequestPages/ClubPOR/CreateRequestStep2';
import CreateRequestStep3 from './Pages/Student/StudentDashboard/RequestPages/ClubPOR/CreateRequestStep3';
import SuccessPage from './Pages/Student/StudentDashboard/RequestPages/ClubPOR/SuccessPage';
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
        <Route path="/StudentDashboard/Request/SelectValidation" element={<SelectValidation/>}/>
        <Route path="/StudentDashboard/Request/SelectValidation/ClubPOR/1" element={<CreateRequestStep1/>}/>
        <Route path="/StudentDashboard/Request/SelectValidation/ClubPOR/2" element={<CreateRequestStep2/>}/>
        <Route path="/StudentDashboard/Request/SelectValidation/ClubPOR/3" element={<CreateRequestStep3/>}/>
        <Route path="/StudentDashboard/Request/SelectValidation/ClubPOR/success" element={<SuccessPage/>}/>
        <Route path="/StudentDashboard/RequestsForward" element={<RequestsForward/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
