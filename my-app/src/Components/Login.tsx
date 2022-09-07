import React, { useState, useEffect, useRef } from "react";
import { useAuthLogin } from "../context/AuthProvider";
import axios from "../api/axios";
import '../stylescomp/login.scss';


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
          withCredentials: true
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
          setErrMsg('Unauthorized');
        } else if (error.response?.status === 404) {
          setErrMsg('Forbidden');
        } else {
          setErrMsg('Login Failed...');
          console.log(error.response)
        }
        errRef.current?.focus();
      };
  };

  return (
    <>
        <form className="form--logsign" onSubmit={(e) => handleSubmit(e)}>

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

            <h5
              style={{
                width: "20%",
                margin: "auto",
                marginTop: "10px",
                padding: "10px",
                textAlign: "center",
                background: "green",
                borderRadius: "20px",
                color: "white"
              }}
            >
              Success Login !
            </h5>

          </div>

          ) : (

          <h5
            ref={errRef}
            style={{
              width: "20%",
              margin: "auto",
              marginTop: "10px",
              padding: "10px",
              textAlign: "center",
              background: "lightpink",
              color: errMsg ? 'red' : 'white'
            }}
            aria-live="assertive">
              {errMsg ? `${errMsg}` : `No login`}
          </h5>
        )}
    </>
  )
}

export default Login;

/*
      const accessData = response?.data;
      console.log("Data: ", response.data);
      //const accessToken = response?.data?.token;
      //console.log("token", accessToken);
      //const roles = response?.data?.roles;
      //console.log("roles", roles);
      setAuth({ email, password }); //roles, accessToken
*/