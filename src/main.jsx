import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Project from './Project.jsx'
import Plumb from './Projects/Plumb.jsx'
import Contact from './Contact.jsx'
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<App/>} >
       <Route path='/contact'  index element={<Contact/>}/>
      <Route path='/about'  index element={<About/>}/>
      <Route path='/project' element={<Project/>}>
      <Route  index  element={<Plumb/>} />
      
      </Route>


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
