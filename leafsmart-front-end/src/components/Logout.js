import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { IoLogOutSharp } from "react-icons/io5";


const Logout = () => {
  const { logout, currentUser } = useAuth();

  const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
      {icon}
    </div>
  );

  return (
    <div>
      <div className='block text-Independence'>{currentUser.first_name} {currentUser.last_name}</div>
      <button className='logout-button' onClick={() => logout()}>
        <SideBarIcon icon={<IoLogOutSharp size="32"/>}/>
      </button>
    </div>
  )
}

export default Logout
