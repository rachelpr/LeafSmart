import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";


const About = () => {
  const navigate = useNavigate();
  
  return (
    <main className="pl-44 pr-32">
      <Nav />
        <div className="bg-Isabelline py-5 h-max">
          <div className="mb-8 text-center">
          <img
              className="grid justify-items-start bg-White rounded-full h-auto w-32 mx-auto mt-1"
              src="/LeafSmartDark.png"
              alt="Lgo"
            />
            <h1 className="text-8xl">LeafSmart</h1>
            <p className="text-normal italic mb-2">
              The place to start thinking of travelling!
            </p>
            <p>
            LeafSmart focuses on providing city data for our users' convenience.
             With technology at their fingertips, our users can find all they need to know about the locations they aim to travel to.
            </p>
          </div>
          <div className="text-center">
            <table className="grid gap-1 grid-cols-3 grid-rows-1">
              <div className="col-6 col-sm-4 col-md-3">
                <h2 className="text-2xl">TicketMaster API</h2>
                <p className="mt-2 italic text-xs">Showing you the best Events</p>
                <img
                  className="border-double px-1 py-1 border-4 rounded-xl h-auto w-80 mx-auto mt-4"
                  src="/images/ticketmaster-banner2500w.png"
                  alt="TicketMaster"
                />
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <h2 className="text-2xl">Current and Forecast Weather API</h2>
                <p className="mt-2 italic text-xs">Presenting the future weather</p>
                <img
                  className="border-double px-1 py-1 border-4 border rounded-xl h-auto w-80 mx-auto mt-4"
                  src="/images/weatherbit-logo.png"
                  alt="Weather"
                />
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <h2 className="text-2xl">Quality of Life API</h2>
                <p className="mt-2 italic text-xs">
                  Giving you all there is to know about your future destination
                </p>
                <img
                  className="border-double bg-White px-1 py-1 border-4 border rounded-xl h-auto w-56 mx-auto mt-4"
                  src="/images/teleport-logo.png"
                  alt="Teleport-Api"
                />
              </div>
            </table>
            <h2 className="mt-8 text-2xl">GeoNames API</h2>
            <p className="mt-2 italic text-xs">Search API powering the search bar</p>
            <img
              className="border-double px-1 py-1 border-4 border rounded-xl h-auto w-80 mx-auto mt-2"
              src="/images/geonames-logo.png"
              alt="geonames-Api"
            />
          </div>
        </div>
        <div className="relative center h-32 w-60 mx-auto">
          <button
            className="fixed bottom-5 right-0 mx-auto px-2 py-2 bg-Independence text-White rounded-xl"
            onClick={() => navigate("/Contact")}
          >
            Check out our contact page
          </button>
        </div>
        <p className="fixed bottom-0 right-0 py-1 px-1 text-xs font-bold">v1.0.0</p>
    </main>
  );
};

export default About;