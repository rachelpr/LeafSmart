import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import LogIn from "./LogIn";
import "./Nav.scss";

const Nav = () => {
  const [user, setUser] = useState([]);

  return (
    <>
        <>
          <section className="head-links">
            <Link to="/">
              <h1>LeafSmart</h1>
            </Link>
            <LogIn />
            <Logout />
            <p>Favourite</p>
          </section>
          <section className="foot-links">
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </section>
        </>
      
        {/* <>
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
        </> */}

    </>
  );
};

export default Nav;
