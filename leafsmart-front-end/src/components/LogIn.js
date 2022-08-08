import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { IoLogInSharp } from "react-icons/io5";


export default function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
    setOpen(!open);
  };

  const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
      {icon}
    </div>
  );
  return (
    <>
    <div>
      <button onClick={() => setOpen(!open)} className="login-button">
        <SideBarIcon icon={<IoLogInSharp size="32"/>}/>
      </button>
      {open ? ( <section>
        <form className="pt-2 pb-2 ml-6 w-60 bg-White shadow-xl rounded-lg" onSubmit={handleSubmit}>
          <label className="font-bold ml-4" htmlFor="email">Email:</label>
          <input
            className="rounded bg-White block mt-2 p-4 ml-4 py-2 shadow"
            type="text"
            id="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="font-bold ml-4" htmlFor="password">Password:</label>
          <input
            className="rounded bg-white block p-4 ml-4 py-2 shadow"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="ml-4 rounded-lg bg-White block p-1 ml-6 mt-2 shadow border-2 border-Zinc-300 focus:outline-none focus:border-White" onClick={() => !open} type="submit">
            Submit
          </button>
        </form>
      </section>) : (
      <form className="hidden block" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            className="block"
            type="text"
            id="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            className="block"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="block" type="submit">
            Submit
          </button>
        </form>
      )}
      </div>
    </>
  );
}
