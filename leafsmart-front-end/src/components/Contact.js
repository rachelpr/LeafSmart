import React from 'react'
import Nav from "./Nav";

const Contact = () => {
  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav />
      </section>
      <hr className="sidebar__separator sidebar--centered" />
      <section>
        <div>
          <h1>Contact</h1>
        </div>
      </section>
    </main>
  )
}

export default Contact
