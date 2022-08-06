import { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";
import decode from "jwt-decode";

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!auth && token) {
      setToken(token);
      const decoded = decode(token);
      setCurrentUser(decoded);
      setAuth(true);
    };
  }, [auth]);


  function login(email, password) {
    const REQUSET_URL = 'http://localhost:3001/login/auth';

    return axios
      .post(REQUSET_URL, { email, password })
      .then((response) => {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        const decoded = decode(response.data.token);
        setCurrentUser(decoded);
        setAuth(true);
        return decoded;
      })
      .catch((error) => error.message);
  }

  function logout() {
    localStorage.removeItem("token");
    setCurrentUser(null);
    setAuth(false);
  }

  const value = {
    currentUser,
    login,
    logout,
    token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { useAuth, AuthProvider };
