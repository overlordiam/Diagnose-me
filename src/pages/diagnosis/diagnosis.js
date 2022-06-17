import React, { useState, useEffect } from "react";
import "./diagnosis.css"
import Predict from '../../predict'
import Axios from "axios";

function Diagnosis() {
  const [image, setImage] = useState({ preview: '', data: '', base64: '' })
  const [status, setStatus] = useState('')
  const [getMessage, setGetMessage] = useState('')
  const [img_base64, setImg_base64] = useState('')

  useEffect(() => {
    Axios.post('http://localhost:5000/predict',{}).then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
  })
}, [img_base64])

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
    // formData.append('base64', image.base64)
    await Axios.post("http://localhost:5000/predict", formData)
    .then(response => console.log(response))
    // setStatus(response.statusText)
  //   if (response) {
  //     setStatus(response.statusText)
     
  // }
  }
  const handleFileChange = async (e) => {
    var reader = new FileReader();
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
      base64: img_base64
    }

    setImage(img)
    reader.onloadend = async () => {
      setImg_base64(() => reader.result);
      // console.log(img_base64);
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