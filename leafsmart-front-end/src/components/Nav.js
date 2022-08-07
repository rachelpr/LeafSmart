import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import LogIn from "./LogIn";
import { useAuth } from "../contexts/AuthContext";
import Favourites from "./Favourites";
import { RiAncientPavilionFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { GiTalk } from "react-icons/gi";

const Nav = () => {
  const { currentUser } = useAuth();

  const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon group">{icon}
    </div>
  );

  return (
    <>
      <div
        className="fixed top-0 left-0 h-screen w-24 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
      >
        <Link to="/">
          <SideBarIcon icon={<RiAncientPavilionFill size="40" />} />
        </Link>
        <div  className="fixed top-20 left-0 h-screen w-24 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
        {currentUser ? <Logout /> : <LogIn />}
        <Favourites />
        </div>
      <div className="fixed bottom-0 left-0 w-24 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
        <Link to="/Contact">
          <SideBarIcon icon={<GiTalk size="32" />} />
        </Link>
        <Link to="/About">
          <SideBarIcon icon={<FaUsers size="32" />} />
        </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
