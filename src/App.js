import React, {useState} from 'react';
import { Route, Routes} from "react-router-dom";
import Header from "./common_assets/header/header"
import Home from "./pages/home/home.js"
import Footer from "./common_assets/footer/footer"
import Register from "./pages/register/register"
import Login from "./pages/login/login"
import Diagnosis from './pages/diagnosis/diagnosis';
import Contact from "./pages/contactus/contactus"
import Result from "./pages/result/result"
import {ImageContext} from "./Contexts/ImageContext"

function App() {
  const [image, setImage] = useState({ preview: '', data: ''})
  const [resolvedData, setResolvedData] = useState(null)

  return (
    <div className='App'>
      <Header/>
      <ImageContext.Provider value={{image, setImage, resolvedData, setResolvedData}}>
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path = "/Register" element={<Register />} />
          <Route path = "/diagnosis" element={<Diagnosis/>} />
          <Route path="/result" element={<Result />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contactus" element={<Contact />} />
      </Routes>
      </ImageContext.Provider>
      <Footer/>
    </div>
  );
}

export default App