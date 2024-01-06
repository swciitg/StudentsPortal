import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileSelection from "./Pages/ProfileSelection";
import StudentsSignUp from "./Pages/Student/StudentsSignUp";
import Otp from "./Pages/Student/otp";
import CreatePass from "./Pages/Student/CreatePass";
import Home from "./Pages/Student/StudentDashboard/Home";
import Profile from "./Pages/Student/StudentDashboard/Profile";
import History from "./Pages/Student/StudentDashboard/History";
import StudentLogin from "./Pages/Student/StudentLogin";
import RequestReceived from "./Pages/Student/StudentDashboard/RequestReceived";
import RequestSent from "./Pages/Student/StudentDashboard/RequestSent";
import CreateRequest from "./Pages/Student/StudentDashboard/CreateRequest";
import AddNewRequest from "./Pages/Student/StudentDashboard/RequestPages/AddNew";
import SuccessPage from "./Pages/Student/StudentDashboard/RequestPages/SuccessPage";
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
        <Route
          path="/StudentDashboard/CreateRequest"
          element={<CreateRequest />}
        />
        <Route
          path="/StudentDashboard/ReceivedRequest"
          element={<RequestReceived />}
        />
        <Route path="/StudentDashboard/SentRequest" element={<RequestSent />} />
        <Route
          path="/StudentDashboard/CreateRequest/add"
          element={<AddNewRequest />}
        />
        <Route
          path="/StudentDashboard/CreateRequest/success"
          element={<SuccessPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
