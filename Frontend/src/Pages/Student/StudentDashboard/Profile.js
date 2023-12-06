import React, {  useRef, useState } from "react";
import Student_Navbar from "../../../Components/Student_Navbar";
import CornerProfileLogoutSection from "./CornerProfileLogoutSection";

function Profile() {
  const [user, setUser] = useState({
    name: "Yash Chouhan",
    Program: "",
    Roll: "",
    Department: "",
    ERP_Email: "y.chauhan@iitg.ac.in",
    Alt_Email: "",
    ProfileCompletion: 0,
    Profile_url: "",
  });
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
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      // For simplicity, you might want to upload the file to a server and store the URL in the state.
      // Here, we're just storing the file object for now.
      setUser((prevUser) => ({ ...prevUser, Profile_url: previewURL }));
    }
  };

  const handleCompleteProfile = () => {
    // Perform profile completion calculation here
    // Update the points based on the fields you want to include
    let Points = 0;
    if (user.Roll.length>0) Points += 25;
  if (user.Program.length>0) Points += 25;
  if (user.Alt_Email.length>0) Points += 25;
  if (user.Department.length>0) Points += 25;
    // ...

    // Update the user state with new data
    setUser((prevUser) => ({ ...prevUser, ProfileCompletion: Points }));

    // Set isEditing to false to hide the editing fields
    setIsEditing(false);
  };
  const handleCustomButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="relative h-screen w-[100%]">
      <Student_Navbar />
      <div className="lg:absolute h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSection />
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

                {isEditing ? (
                  <div className="flex lg:mt-16 mt-5 flex-col">
                    <label className="text-[#353B47] text-sm">Roll no. </label>
                    <input
                      className=" border border-[#767A81] outline-none px-2 py-1 rounded"
                      placeholder="Enter Roll no."
                      type="number"
                      name="Roll"
                      value={user.Roll}
                      onChange={handleInputChange}
                    />
                  </div>
                ) : (
                  user.Roll.length > 0 && (
                    <div className="flex  lg:mt-16 mt-5 flex-col">
                      <label className="text-[#353B47] text-sm">
                        Roll no.{" "}
                      </label>
                      <div>{user.Roll}</div>
                    </div>
                  )
                )}
                {isEditing ? (
                  <div className="flex  lg:mt-16 mt-5 flex-col">
                    <label className="text-[#353B47] text-sm">Program</label>
                    <select
                      name="Program"
                      className="border px-2 py-[5px] text-black outline-none rounded-md border-[rgba(118,122,129,1)] pl-3"
                      onChange={handleInputChange}
                      value={user.Program}
                    >
                      <option hidden>Select Program</option>
                      <option>{" B.Tech"}</option>
                      <option>{" B.Des"}</option>
                    </select>
                  </div>
                ) : (
                  user.Program.length > 0 && (
                    <div className=" flex flex-col lg:mt-16 mt-5 ">
                      <label className="text-[#353B47] text-sm">Program</label>
                      <div>{user.Program}</div>
                    </div>
                  )
                )}
              </div>
              <div className="lg:w-[28%] w-full flex flex-col">
                <div className="flex  flex-col items-left">
                  <label className="text-[#353B47] text-sm">ERP mail id</label>

                  <div>{user.ERP_Email}</div>
                </div>
                <div className="flex  flex-col items-left">
                  {isEditing ? (
                    <div className="flex   lg:mt-16 mt-5  flex-col items-left">
                      <label className="text-[#353B47] text-sm">
                        Alternate mail id
                      </label>
                      <input
                        className=" border border-[#767A81] outline-none px-2 py-1 rounded"
                        placeholder="Enter Email address"
                        type="email"
                        name="Alt_Email"
                        value={user.Alt_Email}
                        onChange={handleInputChange}
                      />
                    </div>
                  ) : (
                    user.Alt_Email.length > 0 && (
                      <div className="flex  lg:mt-16 mt-5 flex-col items-left">
                        <label className="text-[#353B47] text-sm">
                          Alternate mail id
                        </label>{" "}
                        <div>{user.Alt_Email}</div>
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
                        onChange={handleInputChange}
                        value={user.Department}
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
                    user.Department.length > 0 && (
                      <div className="flex   lg:mt-16 mt-5  flex-col items-left">
                        <label className="text-[#353B47] text-sm">
                          Department
                        </label>
                        <div>{user.Department}</div>
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
                      {user.Profile_url.length > 0 ? (
                        <div className="relative  w-40 object-cover">
                          <img
                            src={user.Profile_url}
                            alt="Profile"
                            className=""
                            style={{ width: "200px" }}
                          />
                          <div className="absolute  inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <img
                          src="/edit_profile.svg"
                          width="50px"
                        />
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
              user.name.trim() !== "" &&
              user.Roll.trim() !== "" &&
              user.Program.trim() !== "" &&
              user.ERP_Email.trim() !== "" &&
              user.Alt_Email.trim() !== "" &&
              user.Department.trim() !== "" &&
              user.Profile_url.trim() !== ""
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
