import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/dashboard/dashboard";
import Products from "../pages/Products/Products";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../pages/profile/Profile";


const router = createBrowserRouter([
    {
        path: '/', 
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    },
])

export default router;

