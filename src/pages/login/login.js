import React,{useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Axios from "axios";
import "./login.css";
import CustomButton from "../../customButton/customButton";
import CustomInput from "../../customInput/customInput";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalid, setInvalid] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [tryAgain, setTryAgain] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
      setEmail("")
      setPassword("")
    }, [])

    const emailCallback = (value) => {
      setEmail(value);
    }

    const passwordCallback = (value) => {
      setPassword(value);
    }

    // const toggleInvalid = () => setInvalid((state) => !state);

    const handleSubmit = async e => {
        // e.preventDefault();
        setInvalid("false")
        let a = false

        if (!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)))
            {      
              // toggleInvalid()
              setInvalid("true")
              a = true
              setEmailError("You have entered an invalid email address!")
              setTryAgain(true)
            }
        if (!a) {
          if (password.length < 6) {
                setInvalid(true)
                a = true
                setPasswordError("The password must be at least 6 character")
                // toggleInvalid()
                setTryAgain(true)
            }
          }
          // alert(a)
        if (!a) {

          navigate('/upload', { replace: true });

          try {
            await Axios.post("http://localhost:8000/login", {
                email: email,
                password: password
            })
          } catch (error) {
            console.log(error)
          }
        
        }
        const  handleLoginApi= () => {
          return(
           Axios.post('https://vr4cxb4qhb.execute-api.us-west-2.amazonaws.com/prod/getusercred',{
            "username": email,
            "password": password
           }).then(result =>{
               var res = JSON.stringify(result['data'])
               var final_res = JSON.parse(res)
               var resp = final_res[0]['p_out_mssg_flg']
  
               if ( resp  === 'S') {
                   window.alert("Successfully SIgned In");
               }
               else {
                   window.alert("You dont exist")
               }
           })
           .catch(error =>{
               console.log(error)
           })
          );
        }
      
        // setInvalid("false")
}

return (
  <html>
  <head>
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
          <CustomInput type="email" placeholder="Email" className="custom_input" name="name" callback={emailCallback}/>
          <p class="error_warning">{emailError}</p>
        </div>
        <div style={{"marginBottom": "3%"}}>
          <CustomInput type="password" placeholder="Password" className="custom_input" name="password" callback={passwordCallback}/>
          <p class="error_warning">{passwordError}</p>
        </div>
    
        <div onClick={handleSubmit}>
          <CustomButton className="form_btn" >
            SIGN IN
          </CustomButton>
        </div>
        {tryAgain ? 
        <CustomButton className="form_btn">
            TRY AGAIN
          </CustomButton>
         : <></> }
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