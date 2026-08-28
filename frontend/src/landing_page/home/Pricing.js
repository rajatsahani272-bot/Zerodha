import React from "react";

function Pricing() {
  return (
    <div className="container mb-5 py-5">
      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-lg-5">
          <h1 className="mb-3">Unbeatable pricing</h1>

          <p>
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

          <a
            href="/pricing"
            className="text-primary text-decoration-none"
          >
            See pricing →
          </a>
        </div>

        {/* Right Pricing */}
        <div className="col-lg-7">
          <div className="row align-items-center flex-nowrap gx-10">

            {/* Free Account */}
            <div className="col">
              <div className="d-flex align-items-center">
                <img
                  src="/media/pricing-eq.svg"
                  alt="Free account opening"
                  style={{ width: "170px" }}
                />

                <p className="mb-0 ms-2">
                  Free account
                  <br />
                  opening
                </p>
              </div>
            </div>

            {/* Equity Delivery */}
            <div className="col">
              <div className="d-flex align-items-center">
                <img
                  src="/media/pricing-eq.svg"
                  alt="Free equity delivery"
                  style={{ width: "170px" }}
                />

                <p className="mb-0 ms-2">
                  Free equity delivery
                  <br />
                  and direct mutual funds
                </p>
              </div>
            </div>

            {/* Intraday */}
            <div className="col">
              <div className="d-flex align-items-center">
                <img
                  src="/media/other-trades.svg"
                  alt="Intraday and F&O"
                  style={{ width: "170px" }}
                />

                <p className="mb-0 ms-2">
                  Intraday and
                  <br />
                  F&O
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;