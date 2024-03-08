import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import PropTypes from "prop-types";
import Student_Navbar from "../../../../Components/Student_Navbar";
import Select from "react-select";
import axios from "axios";
import CornerProfileLogoutSection from "../../../../Components/CornerProfileLogoutSection";

function AddNewRequest({ SERVER_URL }) {
  AddNewRequest.propTypes = {
    SERVER_URL: PropTypes.string.isRequired,
  };
  const location = useLocation();
  const navigate = useNavigate();
  const encryptedEmail = new URLSearchParams(location.search).get("e");
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState("");
  const [toemail, SetToemail] = useState("");
  const ENCRYPTION_KEY = "HELLO_WoRLD";
  const [user, setuser] = useState("");

  function decryptEmail(encryptedEmail) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, ENCRYPTION_KEY);
    const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedEmail;
  }

  const options = [
    { value: "m.geetanjay@iitg.ac.in", label: "m.geetanjay@iitg.ac.in" },
    { value: "vineet.mech22@iitg.ac.in", label: "vineet.mech22@iitg.ac.in" },
    { value: "k.dishant@iitg.ac.in", label: "k.dishant@iitg.ac.in" },
    { value: "Three", label: "Three" },
    { value: "Four", label: "Four" },
  ];
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const formattedDate = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;
  useEffect(() => {
    async function UserDetails() {
      try {
        const response = await axios.post(
          `${SERVER_URL}/studentsportal/api/users/user-details`,
          {
            email: decryptEmail(encryptedEmail),
            token: localStorage.getItem("token"),
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
      }
    }
    UserDetails();
    // eslint-disable-next-line
  }, []);
  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${SERVER_URL}/studentsportal/api/request`, {
        Request_sent_date: formattedDate,
        "Sender Name": user.name,
        "Sender Roll no": user.roll,
        "Sender email": `${decryptEmail(encryptedEmail)}@iitg.ac.in`,
        Status: "Pending",
        "Request sent to": toemail.value,
        subject: subject,
        body: body,
      });

      if (response.status === 201) {
        console.log("Request created successfully");
        navigate(
          `/StudentDashboard/CreateRequest/success?e=${encodeURIComponent(
            encryptedEmail
          )}`
        );
      } else {
        console.error("Error creating request:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div className=" relative h-screen w-[100%]">
      <Student_Navbar encryptedEmail={encryptedEmail}  SERVER_URL={SERVER_URL} />
      <div className=" lg:absolute flex flex-col  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        <CornerProfileLogoutSection encryptedEmail={encryptedEmail} SERVER_URL={SERVER_URL}  />
        <div className="flex justify-center items-center h-full">
          <div className="bg-white px-10 w-[400px] pb-9 pt-9 shadow-[0_4px_8px_2px_rgba(0,0,0,0.16)] ">
            <div className="flex flex-col gap-2 items-center ">
              <p className="text-[rgb(27,33,45)] font-semibold text-2xl mb-3">
                Create New Request
              </p>
            </div>
            <div>
              <label className="flex flex-col gap-1 my-6">
                <span className="font-medium text-base">To</span>
                <Select
                  options={options}
                  placeholder="Enter Mail"
                  onChange={SetToemail}
                  noOptionsMessage={() => "No Mails Found"}
                />
              </label>
              <label className="flex flex-col gap-1 my-6">
                <span className="font-medium text-base">Subject</span>
                <input
                  className="border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
                  type="text"
                  placeholder="Add Subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>
              <label className="flex flex-col gap-1 my-6">
                <span className="font-medium text-base">Body</span>
                <textarea
                  placeholder="Add Body"
                  className="border p-2 pt-[5px] pb-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
                  rows={4}
                  cols={40}
                  onChange={(e) => setBody(e.target.value)}
                />
              </label>
            </div>
            <div className="flex justify-end mt-10">
              {body.length > 0 && subject.length > 0 ? (
                <button
                  onClick={handleSubmit}
                  className=" inline-flex items-center p-1 bg-[#2164E8] text-white rounded-sm pl-4 pr-4"
                >
                  Submit
                </button>
              ) : (
                <div>
                  <button className=" inline-flex items-center p-1 bg-[rgba(188,190,194,1)] text-[rgba(141,144,150,1)] rounded-sm pl-4 pr-4">
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewRequest;
