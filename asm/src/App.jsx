import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer";
function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    <Toaster></Toaster>
    </>
  )
}

export default App
