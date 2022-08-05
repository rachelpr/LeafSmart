import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Nav = (props) => {
  const [cookie, setCookie] = useState('')
  const { user } = props;

  const deleteCookie = (name) => cookie.remove(name);

  useEffect(() => {
    setCookie(cookies.get("user"))
  }, []);

  return (
    <>
      <section className="head-links">
        <Link className="block" to="/">
          <h1>LeafSmart</h1>
        </Link>
        { cookie ? (
          <>
            <p>Tina Testerson</p>
            <button
              className="block"
              type="submit"
              onClick={() => {
                setCookie('');
              }}
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/LogIn">Log-In</Link>
        )}
        <p>Favourite</p>
      </section>
      <section className="foot-links">
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </section>
    </>
  );
};

export default Nav;
