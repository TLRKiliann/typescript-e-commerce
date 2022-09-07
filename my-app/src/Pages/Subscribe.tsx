import React, { useState, useEffect } from "react";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import { Container } from "react-bootstrap";
//import { useAuthLogin } from "../context/AuthProvider"
import "../stylespage/subscribe.scss";


export const Subscribe = () => {
  const [log, setLog] = useState<boolean>(false);
  const [sign, setSign] = useState<boolean>(false);

  useEffect(() => {
    localStorage.removeItem('Email');
    localStorage.removeItem('Passwd');
  },[])

  const handleLogin = () => {
    setLog(!log);
    setSign(false);
  };

  const handleSignUp = () => {
    setSign(!sign);
    setLog(false);
  };

  //const turnLogin = useAuthLogin();
  //console.log("TurnLogin state", turnLogin)

  return (
    <Container className="mb-4">

      <div className="main--div mt-3">

        <div>
          <h6 style={{fontSize: "3rem"}}>Subscribe</h6>
        </div>

        <div className="btn--bloc">
        
          <button type="button" onClick={handleLogin} className="btn--logsign" id="btn--login">
            Login
          </button>
          
          <button type="button" onClick={handleSignUp} className="btn--logsign">
            SignUp
          </button>

        </div>

        <div className="log--sign">

          {!log && !sign &&
            <div style={{ textAlign: "center", marginTop: "10%" }}>
              <h1>Wellcome !</h1>
              <h3>Choose Login or SignUp.</h3>
            </div>}

          {log && <Login />}
          {sign && <SignUp />}
            
        </div>
      </div>

    </Container>
  );
};

/*
:root {
    --bs-font-one: One-serif;
    --bs-font-ch:  Helvetica;
    --bs-light: #ecdecd;
    --bs-grey: grey;
    --bs-white: #ffffff;
    --bs-orange: orange;
}

body {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    background: var(--bs-light);
}

Subscript/login/signin
.form--logsign {
    margin: auto;
    margin-top: 10%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.input--logsign {
    margin: 5px 0px;
}

.btn--submit {
    width: 25%;
    margin-top: 10px;
    border-radius: 15px;
}

.btn--submit:hover {
    background: var(--bs-grey);
    color: var(--bs-white);
}

.btn--submit:active {
    background: var(--bs-white);
    color: var(--bs-orange);
}

.main--div {
    display: flex;
    flex-direction: column;
}

.btn--bloc {
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: right;
}

.btn--logsign {
    width: 60px;
    height: 60px;
    margin-top: 20px;
    font-size: 0.9rem;
    border-radius: 50% 50%;
}

.btn--logsign:hover {
    background: var(--bs-grey);
    color: var(--bs-white);
}

.btn--logsign:active {
    background: var(--bs-white);
    color: orange;
}

#btn--login {
    margin-right: 10px;
}

.rounded--style {
    background: var(--bs-light);
}

.rounded--style:hover {
    background: orange;
}
*/