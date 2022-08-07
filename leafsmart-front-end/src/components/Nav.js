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
    <>
      <div className="fixed top-0 left-0 h-screen w-24 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
        <Link to="/">
          <SideBarIcon icon={<RiAncientPavilionFill size="42" />} />
        </Link>
        {currentUser ? <Logout /> : <LogIn />}
        <Favourites />
      </div>
      <div className="fixed bottom-0 left-0 w-24 flex flex-col
                  bg-white shadow-lg">
        <Link to="/Contact">
          <SideBarIcon icon={<FaUsers size="32"/>} />
        </Link>
        <Link to="/About">
          <SideBarIcon icon={<FaComments size="32"/>} />
        </Link>
      </div>
    </>
  );
};

export default Nav;
