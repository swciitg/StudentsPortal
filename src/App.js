import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RequestPage from "./Pages/RequestPage";
import DetailsPage from "./Components/RequestPageComponents/DetailsPage/DetailsPage";
import ApprovePage from "./Components/RequestPageComponents/DetailsPage/ApprovePage";
import DenyPage from "./Components/RequestPageComponents/DetailsPage/DenyPage";
import ForwardPage from "./Components/RequestPageComponents/DetailsPage/ForwardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/request/details" element={<DetailsPage />} />
        <Route path="/request/details/approve" element={<ApprovePage />} />
        <Route path="/request/details/deny" element={<DenyPage />} />
        <Route path="/request/details/forward" element={<ForwardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
