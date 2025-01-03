import React from 'react'
import { useRef } from 'react'
import "./App.css"
import video2 from "./Plumb.mp4"
import video3 from "./Todos.mp4"
import video4 from "./Blogged.mp4"
import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

const Project = () => {

  
  const scroller1 = useRef()
 

  
  const scrollbar1 = ()=>{
   
    scroller1.current.scrollTop += window.innerHeight * 1;

}

  

  return (
    <> 
    <div className="containerss min-w-full h-[100vh] overflow-y-auto shadow-orange-500   "  ref={scroller1}>
      <div className="x bg-gradient-to-br from-blue-600 via-purple-400 to-gray-500 p-4  ">
     <h1 className=' heading text-center text-4xl  p-2 font-bold text-red-700 shadow-2xl hover:text-5xl transition-all duration-400 ease-in-out hover:text-red-600  '>Projects</h1>
    <div className="projects flex justify-center ">
  
    <div className="container lg:flex w-[50vw]  lg-w-[70vw] lg:gap-20  ">
     
     <NavLink to='/project/Plumb'><div > <video src={video2}  className='column1 w-[50vw] lg:w-[20vw]   mt-10 ' autoPlay muted loop/><p className='pName  text-center text-xl font-bold text-green-900'>Plumb</p></div></NavLink>
      <div ><video src={video3}  className='column1 w-[50vw] lg:w-[20vw]    mt-10 ' autoPlay muted loop/><p className='pName text-center text-xl font-bold text-red-700' >Todos</p></div>
      <div ><video src={video4}  className='column1 w-[50vw] lg:w-[20vw]   mt-10 ' autoPlay muted loop/><p className=' pName text-center text-xl font-bold text-red-700'>Blogged</p></div>
    
    </div>
    
    </div>
    <div className="n flex items-center justify-center mt-10">
    <button className='bg-gradient-to-b from-green-700 to-green-400 text-white text-lg p-4 lg:w-[15vw] border-2 rounded-lg shadow-slate-500 shadow-lg' onClick={scrollbar1}>GoTo bottom</button>
    </div>
    </div>
    <div className="outlet  ">
    <Outlet />
    </div>
    </div>
    
    </>
  )
}

export default Project
