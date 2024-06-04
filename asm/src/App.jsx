import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { Toaster } from 'react-hot-toast';
function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Toaster></Toaster>
    </>
  )
}

export default App
