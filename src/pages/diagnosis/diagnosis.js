import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {ImageContext} from "../../Contexts/ImageContext"
import "./diagnosis.css"
import Axios from "axios";

function Diagnosis() {
  const navigate = useNavigate();
  const {image, setImage, setResolvedData} = useContext(ImageContext)


  const handleSubmit = async (e) => {
    e.preventDefault()    
    let formData = new FormData()
    formData.append('file', image.data)
    
    const res = await Axios.post("http://localhost:5000/predict", formData, {
      "Content-Type": "multipart/form-data",
      'Accept': 'multipart/form-data'
    })
    console.log(res.data);
    setResolvedData(res.data)
    navigate('/result');

  }
  
  const handleFileChange = async (e) => {
    var reader = new FileReader();
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0]
    }

    setImage(img)
    reader.onloadend = async () => {
       const res = reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);
    
  }

  return (
  <div className='App'>
  <h1>Upload to server</h1>
  {image.preview && <img src={image.preview} width='100' height='100' />}
  <hr></hr>
  <form onSubmit={handleSubmit}>
    <input type='file' name='file' onChange={handleFileChange}></input>
    <button type='submit'>Submit</button>
  </form>
</div>
  )
}

export default Diagnosis;