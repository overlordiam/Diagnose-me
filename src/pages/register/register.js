import React,{useState} from 'react';
import "./register.css";
import {auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';


function register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const history = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
    
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
          const register = await auth.createUserWithEmailAndPassword(
            email,
            password
          ).then(auth => history("/")
          )   
        } catch (error) {
            alert(error);
          }

          setEmail("");
          setPassword(""); 
          setConfirmPassword('');


          
};  
return (

        <div className="sign__up">
             <h3 style={{marginLeft:"-6.5%"}} >I Don't Have An Account</h3>
             <span style={{marginLeft: "-4.5%"}}>Sign Up With Your Email And Password</span>
            <form className="form" >
                <input autoComplete="off" className="form-control" placeholder="Email" value={email} type="email" name="email" onChange={e => setEmail(e.target.value)}  />
                <input autoComplete="off" className=" form-control" placeholder="password" value={password} type="password" name="password" onChange={e => setPassword(e.target.value)}  />
                <input autoComplete="off" className=" form-control" placeholder="Confirm password" value={confirmPassword} type="password" name="confirm-password" onChange={e => setConfirmPassword(e.target.value)}  />
            </form>
            <button onClick={handleSubmit} className="button">
                    SIGN UP
            </button>
        </div>
    )
}



export default register;