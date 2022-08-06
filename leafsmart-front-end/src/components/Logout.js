import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Logout = () => {
  const { logout, currentUser } = useAuth();


  return (
    <div>
      <div className='block'>{currentUser.first_name} {currentUser.last_name}</div>
      <button className='block' onClick={() => logout()}>LogOut</button>
    </div>
  )
}

export default Logout
