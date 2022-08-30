import React,{useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Axios from "axios";
import "./login.css";
import {auth} from "../../firebase.js"
// import CustomButton from "../../custombutton/custombutton";
// import CustomInput from "../../customInput/customInputs";
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalid, setInvalid] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [disable, setDisable] = useState(false)
    const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  setEmail('');
  setPassword('');

  auth
  .signInWithEmailAndPassword(email,password)
  .then(auth => {
      navigate('/upload')
  })
  .catch(error => alert(error.message))
}

const handleChange = (e) => {
  setEmail(e.target.value)
} 
const handlepassChange = (e) => {
  setPassword(e.target.value)
}

return (
  <html><head>
  </head>
  <body>
  <div class="wrapper">
  <div class="containers">
    <div class="sign-in-container">
    <form class="form">
        <h1>LOGIN</h1>
        <div class="login_headline">
          <h3>Welcome back.</h3> 
        </div>
        <div style={{"marginBottom": "3%"}}>
          <input type="email" placeholder="Email" className="custom_input" name="name" onChange={handleChange}  />
          <p class="error_warning">{emailError}</p>
        </div>
        <div style={{"marginBottom": "3%"}} >
          <input type="password" placeholder="Password" className="custom_input" name="password" onChange={handlepassChange} />
          <p class="error_warning">{passwordError}</p>
        </div>
    
        <div>
        {email && password?
            <div onClick={handleSubmit}> 
            <button className="form_btn dt" >
               SIGN IN
            </button> 
            </div>
           :
        <div>   
        <button className="form_btn df" disable={true}>
           SIGN IN
        </button> 
        </div>
        }  
      
        </div>
       
      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay-right">
        <h1>REACH TO MILLIONS IN A BLINK</h1>
        
      </div>
    </div>
    </div>
    </div>
    </body>
    </html>


    )
}


export default Login