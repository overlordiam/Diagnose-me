import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {ImageContext} from "../../Contexts/ImageContext"
import "./diagnosis.css"
import Axios from "axios";

function Diagnosis() {
  const navigate = useNavigate();
  const {imageDR, setImageDR, setResolvedDataDR, imageGlaucoma, setImageGlaucoma, setResolvedDataGlaucoma} = useContext(ImageContext)

  const handleSubmitDR = async (e) => {
    e.preventDefault()    
    let formData = new FormData()
    formData.append('file', imageDR.data)
    
    const res = await Axios.post("http://localhost:5000/predictDR", formData, {
      "Content-Type": "multipart/form-data",
      'Accept': 'multipart/form-data'
    })
    console.log(res.data);
    setResolvedDataDR(res.data)
    navigate('/result');

  }

  const handleSubmitGlaucoma = async (e) => {
    e.preventDefault()    
    let formData = new FormData()
    formData.append('file', imageDR.data)
    
    const res = await Axios.post("http://localhost:5000/predictGlaucoma", formData, {
      "Content-Type": "multipart/form-data",
      'Accept': 'multipart/form-data'
    })
    console.log(res.data);
    setResolvedDataGlaucoma(res.data)
    navigate('/result');

  }
  
  const handleFileChangeDR = async (e) => {
    var reader = new FileReader();
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0]
    }

    setImageDR(img)
    reader.onloadend = async () => {
       const res = reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);
    
  }

  const handleFileChangeGlaucoma = async (e) => {
    var reader = new FileReader();
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0]
    }

    setImageGlaucoma(img)
    reader.onloadend = async () => {
       const res = reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);

    
  }

  return (
  <div className='App1'>
  <h1 style={{"margin": "2% 2% 2% 0"}}>Upload to server:</h1>
  <h1 style={{'color': 'black'}}>Diabetic Retinopathy</h1>
  {imageDR.preview && <img src={imageDR.preview} width='100' height='100' />}
  <hr></hr>
  <form onSubmit={handleSubmitDR}>
    <input type='file' name='file' onChange={handleFileChangeDR}></input>
    <button type='submit'>Submit</button>
  </form>
   {/* line break  */}
  {/* <h1 style={{'color': 'black', "marginTop": '2%'}}>Glaucoma</h1>
  <form onSubmit={handleSubmitGlaucoma} style={{marginBottom: '4%'}}>
    <input type='file' name='file' onChange={handleFileChangeGlaucoma}></input>
    <button type='submit'>Submit</button>
  </form>
   {imageGlaucoma.preview && <img src={imageGlaucoma.preview} width='100' height='100' />}
  <hr></hr> */}
</div>
  )
}

export default Diagnosis;