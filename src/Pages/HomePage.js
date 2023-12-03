import React from "react";
import Navbar from "../Components/Navbar";
import MainContent from "../Components/HomePageComponents/MainContent";

export default function HomePage() {
  return (
    <div className="flex">
      <Navbar />
      <MainContent />
    </div>
  );
}
