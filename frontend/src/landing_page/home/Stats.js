import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Side Content */}
        <div className="col-lg-5">
          <h2 className="mb-5">Trust with confidence</h2>

          <h4>Customer-first always</h4>
          <p className="text-muted mb-5">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
            crores of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h4>No spam or gimmicks</h4>
          <p className="text-muted mb-5">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <a href="#" className="text-primary text-decoration-none">
              {" "}Our philosophies.
            </a>
          </p>

          <h4>The Zerodha universe</h4>
          <p className="text-muted mb-5">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your
            needs.
          </p>

          <h4>Do better with money</h4>
          <p className="text-muted">
            With initiatives like{" "}
            <a href="#" className="text-primary text-decoration-none">
              Nudge
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary text-decoration-none">
              Kill Switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="col-lg-7 text-center">
          <img
            src="/media/Awards.png"
            alt="Zerodha Universe"
            className="img-fluid"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />

          <div className="mt-4">
            <a
              href="#"
              className="text-primary text-decoration-none me-5"
            >
              Explore our products →
            </a>

            <a
              href="#"
              className="text-primary text-decoration-none"
            >
              Try Kite demo →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;