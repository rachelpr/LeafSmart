import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function LogIn(props) {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [userObj, setUserObj] = useState({});

const handleSubmit = async (e) => {
  e.preventDefault();

  axios.post(`/login`, {
    email: email,
    password: pwd
  })
  .then((res) => {
    const data = res.data[0];
    cookies.set('user_id', res.data[0].user_id)
    setUserObj(data)
    navigate("/")
  })
  .catch((err) => {
    console.log(err);
  });
}

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errMsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
