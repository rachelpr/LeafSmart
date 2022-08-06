import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password)
  };

  login(email, password);

  return (
    <section>
      <h1>Please Log In</h1>
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
        <button className="block" type="submit">Submit</button>
      </form>
    </section>
  );
}
