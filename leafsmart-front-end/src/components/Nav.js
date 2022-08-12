import React from "react";
import { Link } from "react-router-dom";
import { FaComments, FaUsers } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";

import Logout from "./Logout";
import LogIn from "./LogIn";
import Favourites from "./Favourites";
import Register from "./Register"
import SideBarIcon from "./buttons/SideBarIcon";
import HomeIcon from "./buttons/HomeIcon";

const Nav = () => {
  const { currentUser } = useAuth();

  return (
    <nav className="fixed top-0 left-0 h-screen w-44 flex flex-col bg-White/50  dark:bg-Independence shadow-lg justify-between">
      <div className="pt-8">
        <Link to="/">
          <HomeIcon icon={<img src="LeafSmartLight.png" alt="LeafSmart Branding icon"/>} />
        </Link>
        {currentUser ? <Logout /> : <LogIn />}
        <Favourites />
        <Register />
      </div>
      <div>
        <Link to="/Contact">
          <SideBarIcon icon={<FaUsers size="32"/>} />
        </Link>
        <Link to="/About">
          <SideBarIcon icon={<FaComments size="32"/>} />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
