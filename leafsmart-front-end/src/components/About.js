import React from "react";
import Nav from "./Nav";

const About = () => {
  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav />
      </section>
      <section className="widgets">
        <div class="px-16 mt-16 bg-Isabelline h-full">
          <h1 className="text-9xl">About LeafSmart</h1>
          <h2 className="text-5xl">
            The Perfect place to get your travel location details before you
            "leaf"!
          </h2>
          <div class="bg-[#7c9bdb] flex rounded-full p-4">
            <div class="flex items-center text-white font-black text-base">
              LeafSmart is the hot new app to get all the details about the
              locations you want to visit.
              <br />
              4+ location based api's at your fingertips

            </div>
          </div>
          <div class="bg-[#7c9bdb] flex rounded-full p-4">
            <div class="flex items-center text-white font-black text-base">
              <div>
                <ul>
                  <li>Events</li>
                  <li>Weather</li>
                  <li>Quality of life</li>
                  <li>Handy Dandy Search bar!</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bg-[#7c9bdb] flex rounded-full p-4">
            <div class="flex items-center text-white font-black text-base">
              Version - 1.0.0
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
