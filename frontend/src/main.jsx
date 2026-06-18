import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './App.jsx'
import { Hero, About, Skill, Project, Contact } from './Components/index.js'
import { ThemeProvider } from './Context/themeContext.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout />} >
    <Route path='' element={<Hero />}/>
    <Route path='about' element={<About />}/>
    <Route path='skill' element={<Skill />}/>
    <Route path='project' element={<Project />}/>
    <Route path='contact' element={<Contact />}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)
