import React from "react";

function Hero() {
  return (
    <section id="supportHero">

      <div className="container" id="supportWrapper">
        <div className="d-flex justify-content-between align-items-center">
          <h4>Support Portal</h4>
          <a href="/support">Track Tickets</a>
        </div>
      </div>

      <div className="container">
        <div className="row support-content">

          <div className="col-6">
            <h1>
              Search for an answer or browse help topics
              <br />
              to create a ticket
            </h1>

            <input
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
            />

            <div className="support-links">
              <a href="/support/account-opening">
                Track account opening
              </a>

              <a href="/support/segment-activation">
                Track segment activation
              </a>

              <a href="/support/intraday-margins">
                Intraday margins
              </a>

              <a href="/support/kite-user-manual">
                Kite user manual
              </a>
            </div>
          </div>

          <div className="col-6 featured">
            <h1>Featured</h1>

            <ol>
              <li>
                <a href="/support/takeovers-delisting">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>

              <li>
                <a href="/support/intraday-leverages">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;