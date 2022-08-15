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
  const [favourites, setFavourites] = useState([]);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!auth && token) {
      setToken(token);
      const decoded = decode(token);
      setCurrentUser(decoded);
      setAuth(true);
    }
  }, [auth]);

  function register(email, first_name, last_name, password) {
    axios
    .post("http://localhost:3001/register/auth/register", {
      email: email,
      first_name: first_name,
      last_name: last_name,
      password: password
    })
    .then((res) => {
      console.log("user submitted to backend");
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function login(email, password) {
    const REQUSET_URL = "http://localhost:3001/login/auth/login";

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

  function returnFavourites() {
    axios
      .post("/favourites", {
        user_id: currentUser.id,
      })
      .then((res) => {
        const data = res.data;
        setFavourites(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function saveFavourites(geoname_id, display_name, city_name) {
    axios
      .post("/save", {
        user_id: currentUser.id,
        geoname_id: geoname_id,
        display_name: display_name,
        city_name: city_name,
      })
      .then((result) => {
        const favs = [...favourites]
        favs.push(result.data[0])
        setFavourites(favs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function deleteFavourites(favourite) {
    axios
      .post("/delete", {
        user_id: currentUser.id,
        city_name: favourite,
      })
      .then((result) => {
        const favs = favourites.filter(favourite => favourite.city_name !== result.data[0].city_name)
       setFavourites(favs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const value = {
    favourites,
    currentUser,
    register,
    returnFavourites,
    login,
    logout,
    saveFavourites,
    deleteFavourites,
    token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { useAuth, AuthProvider };
