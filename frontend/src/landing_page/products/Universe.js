import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <h4 className="text-center text-muted">
        Want to know more about our technology stack? Check out the{" "}
        <a
          href="https://zerodha.tech/"
          target="_blank"
          rel="noreferrer"
        >
          Zerodha.tech
        </a>{" "}
        blog.
      </h4>

      <div className="row text-center mt-5 text-muted">
        <h1>The Zerodha Universe</h1>

        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <img
          src="/media/universe.png"
          alt="Zerodha Universe"
        />

        <button
          className="p-2 btn btn-primary fs-5 mt-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;