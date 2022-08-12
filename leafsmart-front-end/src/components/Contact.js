import React from "react";
import Nav from "./Nav";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <Nav />
      <section className="page-container w-11/12 bg-Isabelline">
        <h1 className="pt-20 pb-32 text-6xl">
          Meet the team behind LeafSmart!
        </h1>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col rounded-3xl items-center bg-White w-80 h-96 pb-24">
            <img
              className="h-28 w-28 rounded-full"
              alt="rachel"
              src="/team-photos/rachel.jpg"
            />
            <h1>Rachel Plourde-Rideout</h1>
            <p>I'm Rachel and here is stuff about me.</p>
            <div className="pt-10">
              <div className="flex items-center">
                <p>
                  <MdEmail />
                </p>
                <p>rplourder@live.ca</p>
              </div>
              <div className="flex items-center">
                <p>
                  <FaGithub />
                </p>
                <p>
                  <a href={"https://github.com/rachelpr"}>rachelpr</a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-3xl items-center bg-White w-80 h-96 pb-24">
            <img
              className="h-28 w-28 rounded-full"
              alt="rachel"
              src="/team-photos/rachel.jpg"
            />
            <h1>Rachel Plourde-Rideout</h1>
            <p>I'm Rachel and here is stuff about me.</p>
            <div className="pt-10">
              <div className="flex items-center">
                <p>
                  <MdEmail />
                </p>
                <p>rplourder@live.ca</p>
              </div>
              <div className="flex items-center">
                <p>
                  <FaGithub />
                </p>
                <p>
                  <a href={"https://github.com/rachelpr"}>rachelpr</a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-3xl items-center bg-White w-80 h-96 pb-24">
            <img
              className="h-28 w-28 rounded-full"
              alt="rachel"
              src="/team-photos/rachel.jpg"
            />
            <h1>Rachel Plourde-Rideout</h1>
            <p>I'm Rachel and here is stuff about me.</p>
            <div className="pt-10">
              <div className="flex items-center">
                <p>
                  <MdEmail />
                </p>
                <p>rplourder@live.ca</p>
              </div>
              <div className="flex items-center">
                <p>
                  <FaGithub />
                </p>
                <p>
                  <a href={"https://github.com/rachelpr"}>rachelpr</a>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Contact;
