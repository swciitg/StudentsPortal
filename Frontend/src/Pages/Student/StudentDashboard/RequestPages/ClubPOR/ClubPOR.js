import React, { useState } from "react";
import CreateClubPORStep3 from "./Components/CreateClubPORStep3";
import CreateClubPORStep1 from "./Components/CreateClubPORStep1";
import CreateClubPORStep2 from "./Components/CreateClubPORStep2";
import SuccessClubPOR from "./Components/SuccessClubPOR";
import CryptoJS from 'crypto-js';
import { useLocation } from "react-router-dom";
import Student_Navbar from "../../../../../Components/Student_Navbar";
import CornerProfileLogoutSection from "../../CornerProfileLogoutSection";
import axios from "axios";
const CreateClubPOR = () => {
    const location = useLocation();
    const encryptedEmail = new URLSearchParams(location.search).get("e");
   
    const [formData, setFormData] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleNext = () => {
      setCurrentPage(currentPage + 1);
    };
  
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; 
    const day = currentDate.getDate();
    
    const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
    const ENCRYPTION_KEY = 'HELLO_WoRLD';
  
    
    function decryptEmail(encryptedEmail) {
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, ENCRYPTION_KEY);
      const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);
      return decryptedEmail;
    }
    const handleComplete = async () => {
      try {
        const response = await axios.post('http://localhost:3002/api/request', {
        "Parent Body": formData.ParentBody,
        organisation: formData.Organisation,
        "POR Position": formData.Position,
        Request_sent_date: formattedDate,
        "Year of Tenure":formData.Tenure,
        "Request Validator":formData.Validation ,
        "Sender email":decryptEmail(encryptedEmail),
        "Type of Request":'POR',
        "Document requested":formData.Document,
        Status: 'Pending',
        });
    
       if (response.status === 201) {
          console.log('Request created successfully');
         handleNext()
        } 
        else {
          console.error('Error creating request:', response.data.message);
        }
      } catch (error) {
        console.error('Error:', error.message);
        
      }
    };
   console.log(formData)
  
    return (
         <div className=" relative h-screen w-[100%]">
      <Student_Navbar encryptedEmail={encryptedEmail} />
      <div className=" lg:absolute flex flex-col  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSection  encryptedEmail={encryptedEmail} />
       
      {currentPage === 1 && <CreateClubPORStep1 onNext={handleNext} formData={formData} setFormData={setFormData} />}
      {currentPage === 2 && <CreateClubPORStep2 onNext={handleNext} formData={formData} setFormData={setFormData} />}
      {currentPage === 3 && <CreateClubPORStep3 onComplete={handleComplete} formData={formData} setFormData={setFormData} />}
      {currentPage === 4 && <SuccessClubPOR />}
  
      </div>
    </div>
    );
  };
  
  export default CreateClubPOR;