import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './pages/Login'
import Navbar from './components/Navbar'
import HeroSection from './pages/student/HeroSection'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import { RouterProvider } from 'react-router'

function App() {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          path:"/",
          element:(
          <>
           <HeroSection/>
          </>
          ),
        },
        {
          path:"login",
          element:<Login/>
        }
      ],
    },
  ]);
 
  return (
    <main>
       <RouterProvider router={appRouter}/>
    </main>
  )
}

export default App
