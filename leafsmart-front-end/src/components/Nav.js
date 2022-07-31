import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <section className="head-links">
        <Link to='/' style={{ pointerEvents: 'none' }}><h1>LeafSmart</h1></Link>
        <Link to="/LogIn" style={{ textDecoration: 'none' }}>Log-In</Link>
        <p>LogOut</p>
        <p>favourite</p>
      </section>
      <section className="foot-links">
        <Link to="/About" style={{ textDecoration: 'none' }}>About</Link>
        <Link to="/Contact" style={{ textDecoration: 'none' }}>Contact</Link>
      </section>
    </>
  );
};

export default Nav;
