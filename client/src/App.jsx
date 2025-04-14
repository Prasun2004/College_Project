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
import Courses from './pages/student/Coures'
import MyLearing from './pages/student/MyLearing'
import Profile from './pages/student/Profile'
import Sidebar from './pages/admin/Sidebar'
import Dashboard from './pages/admin/Dashboard'
import AddCourse from './pages/admin/course/AddCourse'
import CourseTable from './pages/admin/course/CourseTable'

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
           <Courses/>
          </>
          ),
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"my-learing",
          element:<MyLearing/>
        },
        {
          path:"profile",
          element:<Profile/>
        },
        {
          path:"admin",
          element:<Sidebar/>,
          children:[
            {
            path:"dashboard",
            element:<Dashboard/>
            },
            {
              path:"courses",
              element:<CourseTable/>
            }
          ],
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
