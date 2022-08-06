import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

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

  return (
    <>
    <div>
      <button onClick={() => setOpen(!open)} className="block">
        <p>Log-In</p>
      </button>
      {open ? ( <section>
        <form className="block" onSubmit={handleSubmit}>
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
          <button className="block" onClick={() => !open} type="submit">
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
