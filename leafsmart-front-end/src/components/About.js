import React from "react";
import Nav from "./Nav";

const About = () => {
  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav />
      </section>
      <section className="widgets">
        <div className="pt-7 pt-lg-9">
          <div className="container-xl p-responsive">
            <div className="col-12 col-lg-7 mb-8 mx-auto text-center">
              <h1 className="h1-mktg mb-3 text-7xl">LeafSmart About Page</h1>
              <p className="f2-mktg color-fg-muted text-normal mb-4">
                The best place to start thinking of travelling!
              </p>
            </div>
            <div className="mt-24 text-center">
              <table className="grid gap-4 grid-cols-3 grid-rows-3">
                <div className="col-6 col-sm-4 col-md-3">
                  <h2 className="f3-mktg text-mono text-normal no-wrap">
                    TicketMaster Api
                  </h2>
                  <p className="m-0 text-mono f6-mktg">
                    Showing you the best Events
                  </p>
                  <img
                    src="/images/ticketmaster-banner2500w.png"
                    alt="TicketMaster"
                  />
                </div>
                <div className="col-6 col-sm-4 col-md-3">
                  <h2 className="f3-mktg text-mono text-normal no-wrap">
                    Current and Forecast Weather Api
                  </h2>
                  <p className="m-0 text-mono f6-mktg">
                    Presenting the future weather
                  </p>
                  <img
                    src="/images/11machin-illo-superJumbo-v3.png"
                    alt="Weather"
                  />
                </div>
                <div className="col-6 col-sm-4 col-md-3">
                  <h2 className="f3-mktg text-mono text-normal no-wrap">
                    Quality of Life Api
                  </h2>
                  <p className="m-0 text-mono f6-mktg">
                    Giving you all there is to know about your future
                    destination
                  </p>
                  <img
                    src="/images/logo.png"
                    alt="Teleport-Api"
                  />
                </div>
              </table>
              <div className="mb-2 mx-auto text-center">
                <div className="d-inline-block border p-4 rounded-2">
                  <span className="d-inline-block f4-mktg">
                    Check out our contact page!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
