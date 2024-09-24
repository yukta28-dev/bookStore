import React from 'react'
import Navbar from '../Compoents/Navbar'
import Footer from '../Compoents/Footer'
import Course from '../Compoents/Course'
 const Courses = () => {
  return (
   <>
   <Navbar/>
   <div className="min-h-screen  dark:bg-slate-900 dark:text-white">
   <Course/>
   </div>
   <Footer/>
   </>
  )
}

export default Courses;