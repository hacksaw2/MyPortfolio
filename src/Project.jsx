import React from 'react'
import "./App.css"
import video2 from "./Plumb.mp4"

const Project = () => {
  return (
    <>
    <div className="projects flex justify-center w-[100vw]">
    <div className="container lg:flex w-[60vw] lg:gap-2  ">
      <video src={video2}  className='column1 w-[20vw] h-[40vh]  mt-10 ' autoPlay muted loop/>
      <video src={video2}  className='column1 w-[20vw] h-[40vh]  mt-10 ' autoPlay muted loop/>
      <video src={video2}  className='column1 w-[20vw] h-[40vh]  mt-10 ' autoPlay muted loop/>
    
    </div>
    </div>
    
    
    </>
  )
}

export default Project
