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
              <h1 className="h1-mktg mb-3">LeafSmart About Page</h1>
              <p className="f2-mktg color-fg-muted text-normal mb-4">
                The best place to start thinking of travelling!
              </p>
            </div>
            <div className="mb-6 text-center">
              <table className="d-flex gutter-condensed gutter-md-spacious col-12 col-lg-8 flex-justify-between mx-auto">
                <div className="col-6 col-sm-4 col-md-3">
                  <h2 className="f3-mktg text-mono text-normal no-wrap">TicketMaster</h2>
                  <span className="color-fg-muted">Api</span>
                  <p className="m-0 text-mono f6-mktg">Showing you the best Events</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3">
                  <h2 className="f3-mktg text-mono text-normal no-wrap">Current and Forecast Weather</h2>
                  <span className="color-fg-muted">Api</span>
                  <p className="m-0 text-mono f6-mktg">Presenting the future weather</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3">
                  <h2 className="f3-mktg text-mono text-normal no-wrap">Quality of Life</h2>
                  <span className="color-fg-muted">Api</span>
                  <p className="m-0 text-mono f6-mktg">Giving you all there is to know about your future destination</p>
                </div>
              </table>
              <div className="mb-8 mx-auto text-center">
                <div className="d-inline-block border p-4 rounded-2">
                  <span className="d-inline-block f4-mktg">Check out our contact page!</span>
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
