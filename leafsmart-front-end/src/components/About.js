import React from "react";
import { useNavigate } from "react-router-dom"
import Nav from "./Nav";


const About = () => {
  const navigate = useNavigate()

  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav />
      </section>
      <section className="mx-auto">
        <div className="pt-7 pt-lg-9">
          <div className="col-12 col-lg-7 mb-8 mx-auto text-center">
            <h1 className="h1-mktg mb-3 text-8xl">LeafSmart</h1>
            <p className="text-normal mb-4">
              The place to start thinking of travelling!
            </p>
            <p>
              LeafSmart is a independantly built app focusing on the concentration of city data for our users convenience. <br/>
              With the technology at their fingertips our users can find all they need to know about the locations they aim to travel to. 
            </p>
          </div>
          <div className="mt-32 text-center">
            <table className="grid gap-1 grid-cols-3 grid-rows-1">
              <div className="col-6 col-sm-4 col-md-3">
                <h2 className="text-3xl">TicketMaster Api</h2>
                <p className="italic text-xs">Showing you the best Events</p>
                <img
                  className="border px-1 py-1 border-4 rounded-xl h-auto w-80 mx-auto mt-2"
                  src="/images/ticketmaster-banner2500w.png"
                  alt="TicketMaster"
                />
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <h2 className="text-3xl">Current and Forecast Weather Api</h2>
                <p className="italic text-xs">Presenting the future weather</p>
                <img
                  className="border-double px-1 py-1 border-4 border rounded-xl h-auto w-80 mx-auto mt-2"
                  src="/images/weatherbit-logo.png"
                  alt="Weather"
                />
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <h2 className="text-3xl">Quality of Life Api</h2>
                <p className="italic text-xs">
                  Giving you all there is to know about your future destination
                </p>
                <img
                  className="border-double px-1 py-1 border-4 border rounded-xl h-auto w-56 mx-auto mt-2"
                  src="/images/teleport-logo.png"
                  alt="Teleport-Api"
                />
              </div>
            </table>
          </div>
        </div>
        <div className="relative center h-32 w-60 mx-auto">
              <button className="fixed bottom-3 mx-auto px-2 py-2 bg-Independence text-White rounded-xl" onClick={() => navigate("/Contact")}>
                Check out our contact page
              </button>
            </div>
      </section>
    </main>
  );
};

export default About;
