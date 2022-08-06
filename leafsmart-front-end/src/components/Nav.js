import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import LogIn from "./LogIn";
import "./Nav.scss";
import { useAuth } from "../contexts/AuthContext";
import Favourites from "./Favourites";

const Nav = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <section className="head-links">
        <Link to="/">
          <h1>LeafSmart</h1>
        </Link>
        {currentUser ? <Logout /> : <LogIn />}
        <Favourites />
      </section>
      <section className="foot-links">
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </section>
    </>
  );
};

export default Nav;
