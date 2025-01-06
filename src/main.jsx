import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css'
import NotFound from './Pages/NotFound.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import AppContext, { MainContext } from './Contexts/AppContext.jsx'
import TaskList from './Pages/TaskList.jsx'
import Notes from './Pages/Notes.jsx'
import Profile from './Pages/Profile.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Notes />,
    errorElement:<NotFound/>
  },{
    path:'/login',
    element:<Login />
  },{
    path:'/signup',
    element:<SignUp />
  },{
    path:'/note/:id',
    element:<TaskList />
  },{
    path:'/profile',
    element:<Profile />
  }
])

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <AppContext>
      <RouterProvider router={router}/>
    </AppContext>
  </StrictMode>,
)
