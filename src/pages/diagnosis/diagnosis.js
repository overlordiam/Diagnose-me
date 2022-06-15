import React, { useState, useEffect } from "react";
import "./diagnosis.css"
import Predict from '../../predict'
import Axios from "axios";

function Diagnosis() {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const [img_base64, setImg_base64] = useState('')

  useEffect(() => {}, [img_base64])

  // function encodeImageFileAsURL(e) {
  //   var file = e.target.files[0];
  //   var reader = new FileReader();
  //   reader.onloadend = function() {
  //     console.log('RESULT', reader.result)
  //   }
  //   return reader.readAsDataURL(file);
  // }

  
  const handleSubmit = async (e) => {
    e.preventDefault()    
    
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:4000/image', {
      method: 'POST',
      body: formData,
    })
    setStatus(response.statusText)
  //   if (response) {
  //     setStatus(response.statusText)
     
  // }
  }
  const handleFileChange = async (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }

    setImage(img)
    var reader = new FileReader();

    reader.onload = () => {
      const temp = reader.result;
      setImg_base64(temp);
    }
    reader.readAsText(e.target.files[0]);
  }

  return (
    <div className='App'>
      <h1>Upload to server</h1>
      {image.preview && <img src={image.preview} width='100' height='100' />}
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type='file' name='file' onChange={handleFileChange}></input>
        <button type='submit'>Submit</button>
        <p>{status}</p>
        <Predict img_base64={img_base64} img={image} />
      </form>
    </div>
  )
}

export default Diagnosis;