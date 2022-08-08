import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import LogIn from "./LogIn";
import { useAuth } from "../contexts/AuthContext";
import Favourites from "./Favourites";
import { RiAncientPavilionFill } from "react-icons/ri";
import { FaComments, FaUsers } from "react-icons/fa";

const Nav = () => {
  const { currentUser } = useAuth();

  const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
    <div className="sidebar-icon group">{icon}</div>
  );

  return (
    <nav className="fixed top-0 left-0 h-screen w-36 flex flex-col bg-white dark:bg-gray-900 shadow-lg justify-between">
      <div>
        <Link to="/">
          <SideBarIcon icon={<RiAncientPavilionFill size="42" />} />
        </Link>
        {currentUser ? <Logout /> : <LogIn />}
        <Favourites />
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
