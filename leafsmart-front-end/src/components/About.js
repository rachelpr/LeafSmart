import React from 'react'
import Nav from "./Nav";

const About = () => {
  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav />
      </section>
      <hr className="sidebar__separator sidebar--centered" />
      <section>
        <div>
          <h1>About</h1>
        </div>
      </section>
    </main>
  )
}

export default About
