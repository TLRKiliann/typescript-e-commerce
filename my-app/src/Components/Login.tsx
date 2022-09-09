import React, { useState, useEffect, useRef } from "react";
import { useAuthLogin } from "../context/AuthProvider";
import axios from "../api/axios";
import '../stylescomp/login.scss';
import Confetti from 'react-confetti';


const LOGIN_URL = '/login';

const Login = () => {

  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const { toggle,
    switchLogin,
    email,
    setEmail,
    setUsrEmail,
    setAuth } = useAuthLogin();

  console.log("errMsg: ", errMsg);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);
  
  const emailLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    e.preventDefault();
  };

  const passwordLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({email, password}),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false
        }
      )
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      console.log(response?.data);
      setAuth({ email, password, roles, accessToken});
      setUsrEmail(email);
      setEmail('');
      setPassword('');
      toggle();
      setSuccess(true);
      console.log("login ok")
      } catch (error: any) {
        if (!error?.response) {
          console.error("Hello error");
          setErrMsg("No response from server");
        } else if (error.response?.status === 401) {
          setErrMsg('Wrong password');
          console.log(error.response);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.response?.status === 404) {
          setErrMsg('Error 404');
        } else {
          setErrMsg('Login Failed...');
        }
        errRef.current?.focus();
      };
  };

  return (
    <>
        <form className="form--login" onSubmit={(e) => handleSubmit(e)}>

          <h1 style={{textAlign: "center"}}>Login</h1>
          <input
            ref={userRef}
            type="email"
            className="input--logsign"
            value={email}
            placeholder="e-mail"
            autoComplete="off"
            onChange={(e) => emailLogin(e)}
            required
          />

          <input
            type="password"
            className="input--logsign"
            value={password}
            placeholder="password"
            onChange={(e) => passwordLogin(e)}
            required 
          />

          <button type="submit" className="btn--submit">
            Sign In
          </button>

        </form>

        {success && !switchLogin ? (
          <div>
            <Confetti />
            <h5
              style={{
                width: "20%",
                margin: "auto",
                marginTop: "20px",
                padding: "10px",
                textAlign: "center",
                borderRadius: "15px",
                background: "green",
                color: "white"
              }}
            >
              Success Login !
            </h5>

          </div>

          ) : (
          <>
            <div className="overflow--div">
              {errMsg && (
                <div className="passwd--ticket">
                  <h4>Wrong Password !</h4>
                </div>
                )}
            </div>
            <h5
              ref={errRef}
              style={{
                width: "20%",
                margin: "auto",
                marginTop: "20px",
                padding: "10px",
                textAlign: "center",
                borderRadius: "15px",
                background: "lightpink",
                color: errMsg ? 'red' : 'white'
              }}
              aria-live="assertive">
                {errMsg ? `${errMsg}` : `No login`}
            </h5>
            </>
        )}
    </>
  )
}

export default Login;
