import React, { useEffect, useState } from "react";
import CreateProjValStep3 from "./Components/CreateProjValStep3";
import CreateProjValStep1 from "./Components/CreateProjValStep1";
import CreateProjValStep2 from "./Components/CreateProjValStep2";
import SuccessProjVal from "./Components/SuccessProjVal";
import CryptoJS from 'crypto-js';
import { useLocation, useNavigate } from "react-router-dom";
import Student_Navbar from "../../../../../Components/Student_Navbar";
import CornerProfileLogoutSection from "../../CornerProfileLogoutSection";
import axios from "axios";
const CreateProjVal = () => {
    const location = useLocation();
    const navigate=useNavigate();
    const encryptedEmail = new URLSearchParams(location.search).get("e");
    const [user, setuser] = useState("")
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
    useEffect(() => {
        async function UserDetails() {
          try {
            const response = await axios.post(
              "http://localhost:3002/api/users/user-details",
              {
                email: decryptEmail(encryptedEmail),
                role: "student",
                token:localStorage.getItem('token')
              }
            );
    
            if (response.status === 200) {
              const user = response.data;
              setuser(user);
            } else {
              console.error(response.data.message);
            }
          } catch (error) {
            console.error("Error:", error.message);
        navigate(`/`);
          }
        }
        UserDetails();
        // eslint-disable-next-line
      }, []);
    const handleComplete = async () => {
      try {
        const response = await axios.post('http://localhost:3002/api/request', {
        "Parent Body": formData.ParentBody,
        organisation: formData.Organisation,
        project:formData.Project,
        projectRole:formData.ProjectRole,
        Request_sent_date: formattedDate,
        mentor:formData.Mentor,
        "Sender Name":user.name,
        "Sender Roll no.":user.roll,
        "Year of Tenure":formData.Tenure,
        "Request Validator":formData.Validation ,
        "Sender email":`${decryptEmail(encryptedEmail)}@iitg.ac.in`,
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
  
    return (
         <div className=" relative h-screen w-[100%]">
      <Student_Navbar encryptedEmail={encryptedEmail} />
      <div className=" lg:absolute flex flex-col  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSection  encryptedEmail={encryptedEmail} />
       
      {currentPage === 1 && <CreateProjValStep1 onNext={handleNext} formData={formData} setFormData={setFormData} />}
      {currentPage === 2 && <CreateProjValStep2 onNext={handleNext} formData={formData} setFormData={setFormData} />}
      {currentPage === 3 && <CreateProjValStep3 onComplete={handleComplete} formData={formData} setFormData={setFormData} />}
      {currentPage === 4 && <SuccessProjVal />}
  
      </div>
    </div>
    );
  };
  
  export default CreateProjVal;