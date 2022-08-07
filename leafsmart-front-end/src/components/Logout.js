import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { IoLogOut } from "react-icons/io5";

const Logout = () => {
  const { logout, currentUser } = useAuth();

  const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon group">{icon}</div>
  );

  return (
    <div>
      <div className="user-name">
        <p className="mb-2 font-semibold italic border-2 border-Zinc-200 rounded">{currentUser.first_name}<br/>
        {currentUser.last_name}</p>
      </div>
        <button
          className="logout-button"
          onClick={() => logout()}
        >
           <SideBarIcon icon={<IoLogOut size="32" />}/>
        </button>
    </div>
  );
};

export default Logout;
