import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        
        <div className="col-6">
          <img
            src="/media/index-education.svg"
            alt="Education"
          />
        </div>

        <div className="col-5">
          <h1 className="mb-3">Free and open market education</h1>

          <p>
            Varsity, the largest online stock market education book in the
            world covering everything from the basics to advanced trading.
          </p>

          <a
            href="https://zerodha.com/varsity/"
            target="_blank"
            rel="noreferrer"
            className="text-primary text-decoration-none me-5"
          >
            Varsity →
          </a>

          <p className="mt-1">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a
            href="https://tradingqna.com/"
            target="_blank"
            rel="noreferrer"
            className="text-primary text-decoration-none me-5"
          >
            TradingQ&A →
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;