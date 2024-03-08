import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileSelection from "./Components/ProfileSelection";
import StudentsSignUp from "./Pages/Student/SignUpPage/StudentsSignUp";
import Otp from "./Pages/Student/SignUpPage/otp";
import CreatePass from "./Pages/Student/SignUpPage/CreatePass";
import Home from "./Pages/Student/HomePage/Home";
import Profile from "./Pages/Student/ProfilePage/Profile";
import History from "./Pages/Student/HistoryPage/History";
import StudentLogin from "./Pages/Student/LogInPage/StudentLogin";
import RequestReceived from "./Pages/Student/RequestReceivdPage/RequestReceived";
import RequestSent from "./Pages/Student/RequestSentPage/RequestSent";
import CreateRequest from "./Pages/Student/CreateNewReqPage/CreateRequest";
import AddNewRequest from "./Pages/Student/CreateNewReqPage/RequestPages/AddNewRequest";
import SuccessPage from "./Pages/Student/CreateNewReqPage/RequestPages/SuccessPage";
import ForgotPassword from "./Pages/Student/LogInPage/ForgotPassword";
function App() {
  return (
    <BrowserRouter basename={"/studentsportal"}>
      <Routes>
        {/* Student Side Routes*/}
        <Route path="*" element={<ProfileSelection />} />
        <Route path="/StudentsSignUp" element={<StudentsSignUp />} />
        <Route path="/StudentsLogIn" element={<StudentLogin />} />
        <Route path="/" element={<StudentLogin />} />
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
        <Route path="/Student/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
