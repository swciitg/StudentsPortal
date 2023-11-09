import React from 'react'
import Student_Navbar from '../../../Components/Student_Navbar'
import CornerProfileLogoutSection from './CornerProfileLogoutSection'

function History() {
  return (
    <div className=" relative h-screen w-[100%]">
    <Student_Navbar />
  <div className=" absolute  h-screen w-[82%] ml-[18%] p-5 ">
     {/*Corner Profile Option*/}
     <CornerProfileLogoutSection />
    </div></div>
  )
}

export default History
