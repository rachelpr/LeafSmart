import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const [userStatus] = useState(false);

  return (
    <>
      <section className="head-links">
        <Link to="/"><h1>LeafSmart</h1></Link>
        <Link to="/LogIn">Log-In</Link>
        {userStatus && <p>LogOut</p>}
        <p>favourite</p>
      </section>
      <section className="foot-links">
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </section>
    </>
  );
};

export default Nav;
