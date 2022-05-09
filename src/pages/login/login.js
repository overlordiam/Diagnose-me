import React,{useState} from 'react';
import "./login.css";
import {auth } from "../../firebase";
import {useNavigate} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    const handleSubmit = (e) => {
         e.preventDefault();

         setEmail("");
         setPassword("");

         auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history('/')
            })
            .catch(error => alert(error.message))

            
    }

   
    
    return (
        <div className="sign__in" style={{textAlign:'center'}}>
           <h3 style ={{marginLeft: "-7%" }}>I already have an account</h3>
           <span style={{marginLeft: "-5%"}}>Sign In With Your Email And Password</span>
            <form  className="form"  >
                <input autoComplete="off" className="signIn form-control" auto placeholder="Email" value={email} type="email" name="email" onChange={e => setEmail(e.target.value)}/>
                <input autoComplete="off" className="signIn form-control" placeholder="password" value={password} type="password" name="password" onChange={e => setPassword(e.target.value)}/>
                
            </form>
            <button onClick={handleSubmit} className="button">
                    SIGN IN
            </button>
        </div>
    )
}

export default Login