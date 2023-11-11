import React from 'react'
import Student_Navbar from '../../../Components/Student_Navbar'
import CornerProfileLogoutSection from './CornerProfileLogoutSection'

function History() {
  return (
    <div className=" relative h-screen w-[100%]">
    <Student_Navbar />
  <div className=" lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
     {/*Corner Profile Option*/}
     <CornerProfileLogoutSection />
    </div></div>
  )
}

export default History
