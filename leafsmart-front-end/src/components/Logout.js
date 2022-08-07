import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { IoLogOutSharp } from "react-icons/io5";

const Logout = () => {
  const { logout, currentUser } = useAuth();

  const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
    <div className="sidebar-icon group">{icon}</div>
  );

  return (
    <div>
      <div className="flex items-center justify-center
    h-12 w-12 mt-2 mb-2 mx-auto font-semibold italic shadow border-2 border-Zinc-100">
        <p>
          {currentUser.first_name}
          <br />
          {currentUser.last_name}
        </p>
      </div>
      <button className="logout-button" onClick={() => logout()}>
        <SideBarIcon icon={<IoLogOutSharp size="32" />} />
      </button>
    </div>
  );
};

export default Logout;
