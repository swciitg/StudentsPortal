import React, { useEffect, useRef, useState } from "react";
import Student_Navbar from "../../../Components/Student_Navbar";
import axios from "axios";
import CornerProfileLogoutSection from "../../../Components/CornerProfileLogoutSection";
import CryptoJS from "crypto-js";
import { useLocation, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const encryptedEmail = new URLSearchParams(location.search).get("e");
  const [user, setuser] = useState({
    name: "",
    roll: "",
    program: "",
    department: "",
    altEmail: "",
    email: "",
    profileCompletion: 0,
    profileUrl: "",
  });
  //These States are going to be updated
  const [Program, setProgram] = useState("");
  const [Department, setDepartment] = useState("");
  const [AltEmail, setAlt_email] = useState("");
  const [ProfileUrl, setProfileURL] = useState("");

  const ENCRYPTION_KEY = "HELLO_WoRLD";
  function decryptEmail(encryptedEmail) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, ENCRYPTION_KEY);
    const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedEmail;
  }

  const Departments = [
    "Biosciences and Bioengineering",
    "Chemical Engineering",
    "Chemical Science and Technology",
    "Civil Engineering",
    "Computer Science and Engineering",
    "Design",
    "Electronics & Electrical Engineering ",
    "Humanities and Social Sciences",
    "Mathematics and Computing",
    "Mechanical Engineering",
    "Engineering Physics",
  ];
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(
          "http://localhost:3002/studentsportal/api/users/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const serverURL = response.data.url; // Assuming the server responds with the file URL
        await axios.post("http://localhost:3002/studentsportal/api/users/user-details", {
          email: decryptEmail(encryptedEmail),
          profileUrl: serverURL,
          token: localStorage.getItem("token"),
        });

        setProfileURL(serverURL);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleCompleteProfile = async () => {
    let Points = 0;
    if (user.program && user.program.length > 0) Points += 25;
    if (user.altEmail && user.altEmail.length > 0) Points += 25;
    if (user.department && user.department.length > 0) Points += 25;
    if (user.profileUrl && user.profileUrl.length > 0) Points += 25;
    try {
      const response = await axios.post(
        "http://localhost:3002/studentsportal/api/users/user-details",
        {
          email: decryptEmail(encryptedEmail),
          program: Program,
          altEmail: AltEmail,
          department: Department,
          profileCompletion: Points,
          token: localStorage.getItem("token"),
        }
      );
      if (response.status === 200) {
        console.log("Profile Update successful");
      } else {
        console.error("Profile Update failed:", response.data.message);
      }
    } catch (error) {
      console.log("Error:" + error);
    }
    setIsEditing(false);
  };

  useEffect(
    () => {
      async function UserDetails() {
        try {
          const response = await axios.post(
            "http://localhost:3002/studentsportal/api/users/user-details",
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
          navigate("/");
        }
      }
      UserDetails();
      let Points = 0;
      if (user.program && user.program.length > 0) Points += 25;
      if (user.altEmail && user.altEmail.length > 0) Points += 25;
      if (user.department && user.department.length > 0) Points += 25;
      if (user.profileUrl && user.profileUrl.length > 0) Points += 25;
      async function UpdateProfileCompletion() {
        try {
          const response = await axios.post(
            "http://localhost:3002/studentsportal/api/users/user-details",
            {
              email: decryptEmail(encryptedEmail),
              token: localStorage.getItem("token"),
              profileCompletion: Points,
            }
          );
          if (response.status === 200) {
            console.log("Profile Update successful");
          } else {
            console.error("Profile Update failed:", response.data.message);
          }
        } catch (error) {
          console.log("Error:" + error);
        }
      }
      UpdateProfileCompletion();
      // eslint-disable-next-line
    },
    [isEditing, handleFileInputChange, user],
    []
  );
  const handleCustomButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="relative h-screen w-[100%]">
      <Student_Navbar encryptedEmail={encryptedEmail} />
      <div className="lg:absolute h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSection encryptedEmail={encryptedEmail} />
        <div className="px-4 py-5 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
          <div className="text-lg font-semibold">My Profile</div>
        </div>
        <div className="p-4 mt-1 px-8 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)] ">
          <div className="  ">
            <div className="lg:flex lg:flex-row flex flex-col  gap-5">
              <div className="lg:w-[28%] w-full flex flex-col ">
                <div className="flex  flex-col items-left">
                  <label className="text-[#353B47] text-sm">Name</label>

                  <div>{user.name}</div>
                </div>

                <div className="flex  lg:mt-16 mt-5 flex-col">
                  <label className="text-[#353B47] text-sm">Roll no. </label>
                  <div>{user.roll}</div>
                </div>
                {isEditing ? (
                  <div className="flex  lg:mt-16 mt-5 flex-col">
                    <label className="text-[#353B47] text-sm">Program</label>
                    <select
                      name="Program"
                      className="border px-2 py-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
                      onChange={(e) => setProgram(e.target.value)}
                      value={user.program}
                    >
                      <option hidden>Select Program</option>
                      <option>{" B.Tech"}</option>
                      <option>{" B.Des"}</option>
                      <option>{" M.Tech"}</option>
                      <option>{" M.Sc"}</option>
                      <option>{" MBA"}</option>
                      <option>{" Phd"}</option>
                    </select>
                  </div>
                ) : (
                  user.program &&
                  user.program.length > 0 && (
                    <div className=" flex flex-col lg:mt-16 mt-5 ">
                      <label className="text-[#353B47] text-sm">Program</label>
                      <div>{user.program}</div>
                    </div>
                  )
                )}
              </div>
              <div className="lg:w-[28%] w-full flex flex-col">
                <div className="flex  flex-col items-left">
                  <label className="text-[#353B47] text-sm">ERP mail id</label>

                  <div>{user.email}@iitg.ac.in</div>
                </div>
                <div className="flex  flex-col items-left">
                  {isEditing ? (
                    <div className="flex   lg:mt-16 mt-5  flex-col items-left">
                      <label className="text-[#353B47] text-sm">
                        Alternate mail id
                      </label>
                      <input
                        className=" border border-[#767A81] outline-none px-2 py-1 rounded"
                        placeholder={
                          !(user.altEmail && user.altEmail.length > 0)
                            ? "Enter Email address"
                            : user.altEmail
                        }
                        type="email"
                        name="Alt_Email"
                        onChange={(e) => setAlt_email(e.target.value)}
                      />
                    </div>
                  ) : (
                    (user.altEmail && user.altEmail.length > 0) > 0 && (
                      <div className="flex  lg:mt-16 mt-5 flex-col items-left">
                        <label className="text-[#353B47] text-sm">
                          Alternate mail id
                        </label>{" "}
                        <div>{user.altEmail}</div>
                      </div>
                    )
                  )}
                </div>
                <div className="flex  flex-col items-left">
                  {isEditing ? (
                    <div className="flex lg:mt-16 mt-5 flex-col items-left">
                      <label className="text-[#353B47] text-sm">
                        Department
                      </label>
                      <select
                        name="Department"
                        className="border px-2 py-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
                        onChange={(e) => setDepartment(e.target.value)}
                        value={user.department}
                      >
                        <option hidden>Select your department</option>
                        {Departments.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    user.department &&
                    user.department.length > 0 && (
                      <div className="flex   lg:mt-16 mt-5  flex-col items-left">
                        <label className="text-[#353B47] text-sm">
                          Department
                        </label>
                        <div>{user.department}</div>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className=" ">
                {
                  <div className="flex flex-col items-center mx-10">
                    <label className="text-[#353B47] text-sm mb-3">
                      Your Id Photograph
                    </label>
                    <button
                      type="button"
                      onClick={handleCustomButtonClick}
                      className="cursor-pointer border flex  justify-center  rounded-full bg-[#D9D9D9] "
                    >
                      {(ProfileUrl && ProfileUrl.length > 0) ||
                      (user.profileUrl && user.profileUrl.length > 0) ? (
                        <div className="relative  w-40 object-cover">
                          <img
                            src={
                              user.profileUrl && user.profileUrl.length > 0
                                ? user.profileUrl
                                : ProfileUrl
                            }
                            alt="Profile"
                            className=""
                            style={{ width: "200px" }}
                          />
                          <div className="absolute  inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <img src="/edit_profile.svg" width="50px" />
                          </div>
                        </div>
                      ) : (
                        <img
                          src="/camera-icon.svg"
                          alt="Camera"
                          className="w-8 h-8 m-10"
                        />
                      )}
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={handleFileInputChange}
                      accept="image/*"
                    />
                  </div>
                }
              </div>
            </div>
          </div>

          {!isEditing &&
            !(
              user.name &&
              user.name.trim() !== "" &&
              user.roll &&
              user.roll.trim() !== "" &&
              user.program &&
              user.program.trim() !== "" &&
              user.email &&
              user.email.trim() !== "" &&
              user.altEmail &&
              user.altEmail.trim() !== "" &&
              user.department &&
              user.department.trim() !== "" &&
              user.profileUrl &&
              user.profileUrl.trim() !== ""
            ) && (
              <div className="mt-3 text-[#D83B01]">
                Your Profile seems to be incomplete!
              </div>
            )}

          {isEditing ? (
            <div className="mt-3 flex gap-4">
              <button
                onClick={handleCompleteProfile}
                className="text-sm mt-1 p-[5px] pl-3 pr-3 bg-[#2164E8] text-white rounded"
              >
                Submit
              </button>
              <button
                type="button"
                className="text-sm mt-1 p-[5px] pl-3 pr-3 border border-[#767A81] rounded"
              >
                Reset
              </button>
            </div>
          ) : (
            <div className=" mt-3 flex gap-4">
              <button
                onClick={() => setIsEditing(true)}
                className="text-sm mt-1 p-[5px] pl-3 pr-3 bg-[#2164E8] text-white rounded"
              >
                Edit Profile
              </button>
              <button className="text-sm mt-1 p-[5px] pl-3 pr-3 border border-[#767A81] rounded">
                Go Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
