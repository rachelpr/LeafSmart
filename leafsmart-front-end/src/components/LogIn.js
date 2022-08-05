import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import Nav from "./Nav";

const cookies = new Cookies();

export default function LogIn(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [userObj, setUserObj] = useState(null || cookies.get("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`/login`, {
        email: email,
        password: pwd,
      })
      .then((res) => {
        const data = res.data[0];
        cookies.set("user", data, {maxAge: 600});
        setUserObj(data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav user={userObj} />
      </section>
      <hr className="sidebar__separator sidebar--centered" />
      <section className="widgets">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
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
    </main>
  );
}
