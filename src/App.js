import React from 'react';
import { Route, Routes} from "react-router-dom";
import Header from "./common_assets/header/header"
import Home from "./pages/home/home.js"
import Footer from "./common_assets/footer/footer"
import Register from "./pages/register/register"
import Login from "./pages/login/login"
// import About from "./pages/aboutus/aboutus"
function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path = "/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/About" element={<About />} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App