import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileSelection from "./Components/ProfileSelection";
import StudentsSignUp from "./Pages/Student/SignUpPage/StudentsSignUp";
import Otp from "./Pages/Student/SignUpPage/otp";
import CreatePass from "./Pages/Student/SignUpPage/CreatePass";
import Home from "./Pages/Student/HomePage/Home";
import Profile from "./Pages/Student/ProfilePage/Profile";
import StudentLogin from "./Pages/Student/LogInPage/StudentLogin";
import RequestReceived from "./Pages/Student/RequestReceivdPage/RequestReceived";
import History_Page from "./Pages/Student/HistoryPage/History";
import RequestSent from "./Pages/Student/RequestSentPage/RequestSent";
import CreateRequest from "./Pages/Student/CreateNewReqPage/CreateRequest";
import AddNewRequest from "./Pages/Student/CreateNewReqPage/RequestPages/AddNewRequest";
import SuccessPage from "./Pages/Student/CreateNewReqPage/RequestPages/SuccessPage";
import ForgotPassword from "./Pages/Student/LogInPage/ForgotPassword";
// import {config} from 'dotenv';x

function App() {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  // keep the REACT_APP_SERVER_URLl in .env file as 'https://swc.iitg.ac.in/porportal/api
  return (
    <BrowserRouter basename={"/por_portal"}>
      <Routes>
        {/* Student Side Routes*/}
        <Route path="*" element={<ProfileSelection SERVER_URL={SERVER_URL}/>} />
        <Route path="/StudentsSignUp" element={<StudentsSignUp SERVER_URL={SERVER_URL} />} />
        <Route path="/studentslogin" element={<StudentLogin SERVER_URL={SERVER_URL}  />} />
        <Route path="/" element={<StudentLogin  SERVER_URL={SERVER_URL} />} />
        {/* Private Routes--Cannot be accessed without authentication or previous step*/}
        <Route path="/otp" element={<Otp  SERVER_URL={SERVER_URL} />} />
        <Route path="/createpass" element={<CreatePass  SERVER_URL={SERVER_URL} />} />
        <Route path="/studentdashboard/home" element={<Home  SERVER_URL={SERVER_URL} />} />
        <Route path="/studentdashboard/profile" element={<Profile  SERVER_URL={SERVER_URL} />} />
        <Route path="/studentdashboard/history" element={<History_Page SERVER_URL={SERVER_URL}  />} />
        <Route
          path="/studentdashboard/createrequest"
          element={<CreateRequest  SERVER_URL={SERVER_URL} />}
        />
        <Route
          path="/studentdashboard/receivedrequest"
          element={<RequestReceived SERVER_URL={SERVER_URL}  />}
        />
        <Route path="/studentdashboard/SentRequest" element={<RequestSent  SERVER_URL={SERVER_URL} />} />
        <Route
          path="/studentdashboard/createrequest/add"
          element={<AddNewRequest  SERVER_URL={SERVER_URL} />}
        />
        <Route
          path="/studentdashboard/createrequest/success"
          element={<SuccessPage  SERVER_URL={SERVER_URL} />}
        />
        <Route path="/student/forgotpassword" element={<ForgotPassword  SERVER_URL={SERVER_URL} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
