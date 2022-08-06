import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Logout = () => {

  const { logout } = useAuth();

  logout()

  return (
    <div>
      <p>You have logged out!</p>
    </div>
  )
}

export default Logout
