import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Nav.scss";
import Cookies from "universal-cookie";

const cookie = new Cookies();

const Nav = () => {
  const [user, setUser] = useState([]);
  const [cookies, setCookies] = useState("");
  const [account, setAccount] = useState("");
  const [logged, setLogged] = useState("")

  useEffect(() => {
    axios
      .get(`http://localhost:3001/`)
      .then((res) => {
        const data = res.data;
        setUser(data);
        cookie.set('user', data[0].user_id)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setCookies(cookie.get("user_id"));
    setAccount(cookie.get("user"));
  }, []);

  useEffect(() => {
    setLogged(user[0]);
  }, [user]);

  return (
    <>
      {cookies === account? (
        <>
          <section className="head-links">
            <Link to="/">
              <h1>LeafSmart</h1>
            </Link>
            <Link to="/Favourites">Tina Testerson</Link>
            <button type="submit" onClick={() => {setAccount("")}}>Log Out</button>
            <p>Favourite</p>
          </section>
          <section className="foot-links">
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </section>
        </>
      ) : (
        <>
          <section className="head-links">
            <Link to="/">
              <h1>LeafSmart</h1>
            </Link>
            <Link to="/LogIn">Log-In</Link>
            <p>favourite</p>
          </section>
          <section className="foot-links">
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </section>
        </>
      )}
    </>
  );
};

export default Nav;
