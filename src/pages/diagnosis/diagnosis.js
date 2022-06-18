import React, { useState, useEffect } from "react";
import "./diagnosis.css"
import Predict from '../../predict'
import Axios from "axios";

function Diagnosis() {
  const [image, setImage] = useState({ preview: '', data: ''})
  const [status, setStatus] = useState('')
  const [getMessage, setGetMessage] = useState('')

//   useEffect(() => {
// }, [img_base64])


  const handleSubmit = async (e) => {
    e.preventDefault()    
    let formData = new FormData()
    formData.append('file', image.data)
    
    const res = await Axios.post("http://localhost:5000/predict", formData, {
      "Content-Type": "multipart/form-data"
    })
    console.log(res);
  }
  
  const handleFileChange = async (e) => {
    var reader = new FileReader();
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0]
    }

    setImage(img)
    reader.onloadend = async () => {
       reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);
    
  }

  return (
    <div className='App'>
      <h1>Upload to server</h1>
      {image.preview && <img src={image.preview} width='100' height='100' />}
      <hr></hr>
      <div>{getMessage.status === 200 ? 
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}</div>
      <form onSubmit={handleSubmit}>
        <input type='file' name='file' onChange={handleFileChange}></input>
        <button type='submit'>Submit</button>
        <p>{status}</p>
        {/* <Predict img_base64={img_base64} img={image} /> */}
      </form>
    </div>
  )
}

export default Diagnosis;