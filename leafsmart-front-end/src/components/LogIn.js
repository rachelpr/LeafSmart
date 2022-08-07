import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { IoLogIn } from "react-icons/io5";

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
  const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon group">{icon}</div>
  );

  return (
    <>
    <div>
      <button onClick={() => setOpen(!open)} className="login-button">
      <SideBarIcon icon={<IoLogIn size='32'/>}/>
      </button>
      {open ? ( <section>
        <div className="px-6 py-3 bg-Slate-50 shadow-xl w-fit rounded-lg flex justify-items-center">
        <form onSubmit={handleSubmit}>
          <label className="font-bold" htmlFor="email">Enter Email</label>
          <input
            className="block shadow"
            type="text"
            id="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="font-bold" htmlFor="password">Enter Password</label>
          <input
            className="block shadow"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="flex justify-evenly mt-2 ml-1 bg-Zinc-300 border-2 border-Slate-50 rounded shadow-l font-semibold focus:outline-none" onClick={() => !open} type="submit">
            Submit
          </button>
        </form>
        </div>
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
