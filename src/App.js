import React from 'react';
import { Route, Routes} from "react-router-dom";
import Header from "./common_assets/header/header"
import Home from "./pages/home/home.js"
import Footer from "./common_assets/footer/footer"
import Register from "./pages/register/register"
import Login from "./pages/login/login"
import Diagnosis from './pages/diagnosis/diagnosis';
import Contact from "./pages/contactus/contactus"
// import About from "./pages/aboutus/aboutus"
function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path = "/Register" element={<Register />} />
        <Route path = "/diagnosis" element={<Diagnosis/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contactus" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App