import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InstagramIcon from './Svgs/InstagramIcon'
import GitHubIcon from './Svgs/GithubIcon'
import MernIcon from './Svgs/MernIcon'
import { Outlet,NavLink } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container min-w-full">
      <div className="navbar bg-gradient-to-l from-slate-700 to-slate-500 text-white lg:h-16 h-10 p-2 lg:p-4  flex gap-[30vw]">
        <ul className='flex justify-around text-[14px] gap-3 w-[40vw]'>
          <NavLink to='/about' className={({isActive}) => `${isActive ? "border-2  button1 border-yellow-400 rounded lg:p-1 transition-all duration-200 ease-in-out bg-gradient-to-r from-white via-yellow-500 to-purple-500 bg-clip-text text-transparent lg:font-bold  ": ""}`}><li>ABOUT</li></NavLink>
         <NavLink to='/contact'> <li>CONTACT</li></NavLink>
         <NavLink to='/project' className={({isActive})=> `${isActive ? "border-2  border-yellow-400 rounded lg:p-1 transition-all duration-200 ease-in-out bg-gradient-to-r from-white via-yellow-500 to-purple-500 bg-clip-text text-transparent font-bold " : ""}`}> <li>PROJECTS</li></NavLink>
        </ul>
        <ul className='w-[10vw] flex  justify-around gap-4 '>
          <li className=''><a href='https://www.instagram.com/saurabhverma_2807/profilecard/?igsh=a3FpdmQ0bzhlNHVh'><InstagramIcon/></a></li>
          <li><a href='https://github.com/hacksaw2'><GitHubIcon/></a></li>
        </ul>
      </div>
      <Outlet/>
    </div>
    </>
  )
}

export default App
