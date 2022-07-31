import React from 'react'
import Nav from "./Nav";

const LogIn = () => {
  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav />
      </section>
      <hr className="sidebar__separator sidebar--centered" />
      <section className="widgets">
        <div>
          <h1>Log In</h1>
        </div>
      </section>
    </main>
  )
}

export default LogIn
