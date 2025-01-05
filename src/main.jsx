import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css'
import App from './Pages/App.jsx'
import NotFound from './Pages/NotFound.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<NotFound/>
  },{
    path:'/login',
    element:<Login />
  },{
    path:'/signup',
    element:<SignUp />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
