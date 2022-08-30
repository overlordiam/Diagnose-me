import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./register.css";
import CustomButton from "../../customButton/customButton";
import CustomInput from "../../customInput/customInput";
import { auth } from "../../firebase.js";

function Register() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      window.location.reload();
      return;
    }

    try {
      const register = await auth.createUserWithEmailAndPassword(
        email,
        password
      ).then(auth => navigate("/upload")
      )   
    } catch (error) {
        alert(error);
      }

    navigate("/upload");

    // try {
    //   Axios.post("http://localhost:8000/signup",
    //   {
    //     user: user,
    //     email: email,
    //     password: password,
    //     confirmPassword: confirmPassword
    //   })
    // } catch (e) {
    //   alert(e);
    // }

    setUser("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    navigate("/upload");
  };

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width,
                             initial-scale=1"
        />
      </head>
      <body class="bodys">
        <div class="wrp">
          <div class="gfg-div">
            <div class="contain">
              <div class="gfg-title">SIGN UP</div>

              <div class="gfg-input-fields">
                <div class="gfg-email">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" />
                  </svg>
                  <input
                    type="name"
                    placeholder="Username"
                    name="username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                  ></input>
                </div>
                <div class="gfg-email">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div class="gfg-password">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
                  </svg>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div class="gfg-password">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
                  </svg>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div onClick={handleSubmit}>
              <CustomButton className="gfg-button">Sign Up</CustomButton>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Register;
