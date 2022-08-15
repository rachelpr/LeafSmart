import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { IoLogOutSharp } from "react-icons/io5";
import SideBarIcon from "./buttons/SideBarIcon";

const Logout = () => {
  const { logout, currentUser } = useAuth();

  return (
    <div>
      <p className="bg-White/75 w-28 font-bold
     break-normal rounded-2xl text-center mx-auto mt-3 shadow-lg">Happy travels, {currentUser.first_name}!</p>
      <button className="logout-button" onClick={() => logout()}>
        <SideBarIcon icon={<IoLogOutSharp size="32" />} />
      </button>
    </div>
  );
};

export default Logout;
