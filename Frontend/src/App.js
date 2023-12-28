import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileSelection from "./Pages/ProfileSelection";
import StudentsSignUp from "./Pages/Student/StudentsSignUp";
import Otp from "./Pages/Student/otp";
import CreatePass from "./Pages/Student/CreatePass";
import AdminSignUp from "./Pages/Admin/AdminSignUp";
import Home from "./Pages/Student/StudentDashboard/Home";
import Profile from "./Pages/Student/StudentDashboard/Profile";
import History from "./Pages/Student/StudentDashboard/History";
import Request from "./Pages/Student/StudentDashboard/Request";
import RequestsForward from "./Pages/Student/StudentDashboard/RequestsForward";
import SelectValidation from "./Pages/Student/StudentDashboard/RequestPages/SelectValidation";
import CreateLORStep1 from "./Pages/Student/StudentDashboard/RequestPages/LOR/CreateLORStep1";
import CreateLORStep2 from "./Pages/Student/StudentDashboard/RequestPages/LOR/CreateLORStep2";
import CreateLORStep3 from "./Pages/Student/StudentDashboard/RequestPages/LOR/CreateLORStep3";
import Home_admin from "./Pages/Admin/AdminDashboard/Home";
import Request_admin from "./Pages/Admin/AdminDashboard/Request";
import RequestsForwardadmin from "./Pages/Admin/AdminDashboard/RequestsForward";
import AdminProfile from "./Pages/Admin/AdminDashboard/Profile";
import AdminHistory from "./Pages/Admin/AdminDashboard/History";
import Otpadmin from "./Pages/Admin/otp";
import CreatePassadmin from "./Pages/Admin/CreatePass";
import StudentLogin from "./Pages/Student/StudentLogin";
import AdminLogin from "./Pages/Admin/AdminLogIn";
import CreateClubPOR from "./Pages/Student/StudentDashboard/RequestPages/ClubPOR/ClubPOR";
import CreateProjectVal from "./Pages/Student/StudentDashboard/RequestPages/ProjectValidation/ProjectValidation";
import CreateBRPOR from "./Pages/Student/StudentDashboard/RequestPages/BR/BRPOR";
import CreateInterIITPOR from "./Pages/Student/StudentDashboard/RequestPages/InterIIT/InterIIT"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Student Side Routes*/}
        <Route path="*" element={<ProfileSelection />} />
        <Route path="/StudentsSignUp" element={<StudentsSignUp />} />
        <Route path="/StudentsLogIn" element={<StudentLogin />} />
        {/* Private Routes--Cannot be accessed without authentication or previous step*/}
        <Route path="/Otp" element={<Otp />} />
        <Route path="/CreatePass" element={<CreatePass />} />
        <Route path="/StudentDashboard/Home" element={<Home />} />
        <Route path="/StudentDashboard/Profile" element={<Profile />} />
        <Route path="/StudentDashboard/History" element={<History />} />
        <Route path="/StudentDashboard/Request" element={<Request />} />
        <Route
          path="/StudentDashboard/Request/SelectValidation"
          element={<SelectValidation />}
        />
        <Route
          path="/StudentDashboard/Request/ClubPOR"
          element={<CreateClubPOR />}
        />
        <Route
          path="/StudentDashboard/Request/ProjectValidation"
          element={<CreateProjectVal />}
        />
        <Route
          path="/StudentDashboard/Request/LOR/1"
          element={<CreateLORStep1 />}
        />
        <Route
          path="/StudentDashboard/Request/LOR/2"
          element={<CreateLORStep2 />}
        />
        <Route
          path="/StudentDashboard/Request/LOR/3"
          element={<CreateLORStep3 />}
        />

        <Route
          path="/StudentDashboard/Request/InterIIT"
          element={<CreateInterIITPOR/>}
        />
        <Route path="/StudentDashboard/Request/BR" element={<CreateBRPOR />} />
        <Route
          path="/StudentDashboard/ForwardRequest"
          element={<RequestsForward />}
        />

        {/* Admin Side Routes*/}
        <Route path="/AdminSignUp" element={<AdminSignUp />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        {/* Private Routes--Cannot be accessed without authentication or previous step*/}
        <Route path="/Otp-admin" element={<Otpadmin />} />
        <Route path="/CreatePass-admin" element={<CreatePassadmin />} />
        <Route path="/AdminDashboard/Home" element={<Home_admin />} />
        <Route path="/AdminDashboard/Request" element={<Request_admin />} />
        <Route
          path="/AdminDashboard/ForwardRequest"
          element={<RequestsForwardadmin />}
        />
        <Route path="/AdminDashboard/Profile" element={<AdminProfile />} />
        <Route path="/AdminDashboard/History" element={<AdminHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
